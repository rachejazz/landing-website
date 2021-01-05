import React from 'react';
import classNames from 'classnames';
import { Link } from 'react-router-dom';

const FooterNav = ({
  className,
  ...props
}) => {

  const classes = classNames(
    'footer-nav',
    className
  );

  return (
    <nav
      {...props}
      className={classes}
    >
      <ul className="list-reset">
        <li>
          <Link to="mailto:twitter@dynopii.com">Contact</Link>
        </li>
        <li>
          <Link to="https://blog.dynopii.com">About us</Link>
        </li>
        {/* <li>
          <Link to="#0">FAQ's</Link>
        </li> */}
        <li>
          <Link to="https://twitter.com/dynopii">Support</Link>
        </li>
      </ul>
    </nav>
  );
}

export default FooterNav;