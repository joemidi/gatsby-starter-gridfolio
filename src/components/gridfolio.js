import React from 'react';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';
import Link, { withPrefix } from 'gatsby-link';

import './gridfolio.scss';

const Block = props => (
  <div className={`gridfolio--block is-animated ${props.className}`} style={{ height: '100%' }}>
    <Link key={props.slug} to={props.slug} className="gridfolio--block-link">
      <Img className="gridfolio--block-image" sizes={props.image.childImageSharp.sizes} />
      <div className="gridfolio--block-details">
        <img className="gridfolio--block-logo" alt={props.title} src={withPrefix(`/brands/${props.brand}.png`)} />
        <div className="gridfolio--block-text">
          <h2 className="gridfolio--block-title">{props.title}</h2>
          <p className="gridfolio--block-category">{props.category}</p>
        </div>
      </div>
    </Link>
  </div>
);

export const ChildImageSharp = {
  childImageSharp: PropTypes.shape({
    sizes: PropTypes.shape({
      aspectRatio: PropTypes.number.isRequired,
      sizes: PropTypes.string.isRequired,
      src: PropTypes.string.isRequired,
      srcSet: PropTypes.string.isRequired,
      srcSetWebp: PropTypes.string.isRequired,
      srcWebp: PropTypes.string.isRequired,
      tracedSVG: PropTypes.string.isRequired,
    }),
  }),
};

export const Node = {
  fields: PropTypes.shape({
    slug: PropTypes.string.isRequired,
  }),
  frontmatter: PropTypes.shape({
    date: PropTypes.string.isRequired,
    height: PropTypes.number.isRequired,
    image: PropTypes.shape(ChildImageSharp).isRequired,
    title: PropTypes.string.isRequired,
    brand: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    width: PropTypes.number.isRequired,
    className: PropTypes.string,
  }),
};

Block.propTypes = {
  title: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
  brand: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  image: PropTypes.shape(ChildImageSharp),
  className: PropTypes.string,
};

Block.defaultProps = {
  image: '',
  className: '',
};

const Gridfolio = props => (
  <div className="grid-wrapper">
    <div className="gridfolio animates-into-view">
      {props.blocks.map(block => (
        <Block
          key={block.node.fields.slug}
          slug={block.node.fields.slug}
          title={block.node.frontmatter.title}
          brand={block.node.frontmatter.brand}
          category={block.node.frontmatter.category}
          image={block.node.frontmatter.image}
          className={block.node.frontmatter.className}
        />
      ))}
    </div>
  </div>
);

Gridfolio.propTypes = {
  blocks: PropTypes.arrayOf(PropTypes.shape(Node)).isRequired,
};

export default Gridfolio;
