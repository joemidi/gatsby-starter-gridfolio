'use strict';

var DepartureBoard = function DepartureBoard(element, options) {
  options = options || {};

  this._element = element;
  this._letters = [];

  element.className = 'departure-board';

  this.rowCount = options.rowCount || 1;
  var letterCount = options.letterCount || 25;
  var letter;
  var rowElement;

  for (var r = 0; r < this.rowCount; r++) {
    this._letters.push([]);

    rowElement = document.createElement('div');
    rowElement.className = 'row';
    element.appendChild(rowElement);

    for (var l = 0; l < letterCount; l++) {
      letter = new DepartureBoard.Letter();
      this._letters[r].push(letter);
      rowElement.appendChild(letter.getElement());
    }
  }
};

DepartureBoard.LETTERS = ' ABCDEFGHIJKLMNOPQRSTUVWXYZ.0123456789,:()&!?+-';

DepartureBoard.prototype.spin = function () {
  var _this = this;

  for (var i = 0, l = this._letters.length; i < l; i++) {
    (function (i) {
      setTimeout(function () {
        _this._letters[i].spin();
      }, 20 * i + Math.random() * 400);
    })(i);
  }
};

DepartureBoard.prototype.setValue = function (value) {
  var _this = this;

  if (!(value instanceof Array)) {
    value = [value];
  }

  for (var r = 0, rl = this._letters.length; r < rl; r++) {
    value[r] = value[r] ? value[r].toUpperCase() : '';

    for (var i = 0, l = this._letters[r].length; i < l; i++) {
      (function (r, i) {

        setTimeout(function () {
          var letterValue = value[r].substr(i, 1) || '';
          _this._letters[r][i].setValue(letterValue);
        }, 2000 * r + 25 * i + Math.random() * 400);

        setTimeout(function () {
          TweenLite.set(_this._letters[r][i]._element, { autoAlpha: 0 });
        }, 500 + _this.rowCount * 3000 + 25 * i + Math.random() * 500);
      })(r, i);
    }
  }
};

DepartureBoard.Letter = function () {
  this._element = document.createElement('span');
  this._element.className = 'letter';

  this._bottom = document.createElement('span');
  this._bottom.className = 'flap bottom';
  this._element.appendChild(this._bottom);

  this._bottomText = document.createElement('span');
  this._bottomText.className = 'text';
  this._bottom.appendChild(this._bottomText);

  this._top = document.createElement('span');
  this._top.className = 'flap top';
  this._element.appendChild(this._top);

  this._topText = document.createElement('span');
  this._topText.className = 'text';
  this._top.appendChild(this._topText);

  this._fold = document.createElement('span');
  this._fold.className = 'fold';
  this._element.appendChild(this._fold);

  this._falling = document.createElement('span');
  this._falling.className = 'flap falling';
  this._fold.appendChild(this._falling);

  this._fallingText = document.createElement('span');
  this._fallingText.className = 'text';

  this._falling.appendChild(this._fallingText);

  this._index = 0;
  this._interval = null;
  this._stopAt = null;
};

DepartureBoard.Letter.DROP_TIME = 90;

DepartureBoard.Letter.prototype.getElement = function () {
  return this._element;
};

DepartureBoard.Letter.prototype.spin = function (clear) {
  var _this = this;

  if (clear !== false) {
    this._stopAt = null;
  }

  this._interval = setInterval(function () {
    _this._tick();
  }, DepartureBoard.Letter.DROP_TIME * 1.1);
};

DepartureBoard.Letter.prototype.setValue = function (value) {
  this._stopAt = DepartureBoard.LETTERS.indexOf(value);

  if (this._stopAt < 0) {
    this._stopAt = 0;
  }

  if (!this._interval && this._index !== this._stopAt) {
    this.spin(false);
  }
};

DepartureBoard.Letter.prototype._tick = function () {
  var _this = this;

  var oldValue = DepartureBoard.LETTERS.charAt(this._index);
  var fallingStyle = this._falling.style;
  var fallingTextStyle = this._fallingText.style;
  var newValue;

  this._index = (this._index + 1) % DepartureBoard.LETTERS.length;
  newValue = DepartureBoard.LETTERS.charAt(this._index);

  this._fallingText.innerHTML = oldValue;
  fallingStyle.display = 'block';

  this._topText.innerHTML = newValue;
  this._bottomText.innerHTML = oldValue;

  setTimeout(function () {
    _this._fallingText.innerHTML = newValue;
    TweenLite.fromTo(_this._falling, DepartureBoard.Letter.DROP_TIME / 1000, { rotationX: 90, backgroundColor: '#000' }, { rotationX: 0, backgroundColor: '#333' });
  }, 1);

  setTimeout(function () {
    _this._fallingText.innerHTML = newValue;
    _this._bottomText.innerHTML = newValue;

    fallingStyle.top = '-.03em';
    fallingStyle.bottom = 'auto';
    fallingTextStyle.top = '-.65em';
  }, DepartureBoard.Letter.DROP_TIME / 2);

  if (this._index === this._stopAt) {
    clearInterval(this._interval);
    delete this._interval;
  }
};