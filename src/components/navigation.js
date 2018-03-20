import React from 'react';
import Link from 'gatsby-link';

import './navigation.scss';

const Navigation = () => (
  <div className="navigation">
    <ul>
      <li className="active">
        <Link to="/">Brand Campaign</Link>
      </li>
      <li>
        <Link to="/">Banner</Link>
      </li>
      <li>
        <Link to="/">Video</Link>
      </li>
      <li>
        <Link to="/">Email</Link>
      </li>
      <li>
        <Link to="/">Website</Link>
      </li>
      <li>
        <a className="contact" href="mailto:hello@jellyfish.co.uk">
          Get in touch
        </a>
      </li>
    </ul>
  </div>
);

export default Navigation;
