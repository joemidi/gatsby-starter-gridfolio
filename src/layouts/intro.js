import React from 'react';

const Intro = () => (
  <div className="intro">
    <h1
      style={{
        fontSize: 40,
        fontFamily: `'Playfair Display', serif`,
        letterSpacing: '0.05em',
        marginBottom: 10,
      }}
    >
      Gatsby Starter Gridfolio
      <span style={{ fontSize: 11, textTransform: 'uppercase', marginLeft: 10 }}>1.0</span>
    </h1>
    <h3
      style={{
        fontSize: 13,
        fontWeight: 400,
        letterSpacing: '0.05em',
      }}
    >
      A <a href="https://www.gatsbyjs.org/">Gatsby</a> port of
      <a href="https://christinecha.com/"> Christine Cha&apos;s </a>
      <a href="https://christinecha.github.io/gridfolio/">Gridfolio</a>.
    </h3>
    <p
      style={{
        display: 'inline-block',
        padding: '10px 12px',
        margin: '20px 0',
        borderRadius: 3,
        verticalAlign: 'middle',
        backgroundColor: '#333',
        color: 'white',
        fontFamily: 'monospace',
      }}
    >
      $ gatsby new gridfolio https://github.com/joemidi/gatsby-starter-gridfolio
    </p>
    <a style={{ marginLeft: 4 }} href="https://github.com/joemidi/gatsby-starter-gridfolio">
      <button
        style={{
          padding: '11px 12px',
          margin: '20px 0',
          borderRadius: 3,
          display: 'inline-block',
          verticalAlign: 'middle',
          textTransform: 'uppercase',
          letterSpacing: '0.1em',
          fontWeight: 'bold',
          backgroundColor: '#31cad9',
          color: 'white',
          cursor: 'pointer',
          transition: 'background-color 0.4s ease-in-out',
        }}
      >
        documentation
      </button>
    </a>
  </div>
);

export default Intro;
