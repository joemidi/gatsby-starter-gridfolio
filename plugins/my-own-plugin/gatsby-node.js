const fse = require('fs-extra');

const error = (src, dest, err) => {
  console.error(`my-own-plugin: ${src} -> ${dest} \u2718`);
  console.error();
  console.error(`${err}`);
};
const success = (src, dest) => console.log(`my-own-plugin: ${src} -> ${dest} \u2714`);

const filterFunc = (src, dest) => {
  const exp = /^(.(?!.md))*$/;
  return exp.test(src);
}

exports.onCreateNode = (args, pluginOptions) => {
  delete pluginOptions.plugins; // eslint-disable-line no-param-reassign
  const { verbose } = pluginOptions;
  delete pluginOptions.verbose; // eslint-disable-line no-param-reassign
  const files = pluginOptions;
  const promises = Object.keys(files).map((src) => {
    const dest = files[src];
    return fse.copySync(src, dest, { filter: filterFunc });
  });

  return Promise.all(promises);
};
