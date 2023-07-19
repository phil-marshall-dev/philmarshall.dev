import React from "react";
import {
  Link,Outlet
} from "react-router-dom";

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export default function Layout() {
  return (
    <div>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand>Phil Marshall</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
                {/* use class from bootstrap Nav.Link */}
                <Link className='nav-link' to="/">
                  Home
                </Link>
                <Link className='nav-link' to="/blog">
                  Blog
                </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Outlet />
    </div>
  )
  // return (
  //   <div>
  //     {/* A "layout route" is a good place to put markup you want to
  //         share across all the pages on your site, like navigation. */}
  //     <nav>
  //       <span><Link to="/">Home</Link></span>
  //       |
  //       <span><Link to="/blog">Blog</Link></span>
  //     </nav>

  //     <hr />

  //     {/* An <Outlet> renders whatever child route is currently active,
  //         so you can think about this <Outlet> as a placeholder for
  //         the child routes we defined above. */}
  //     <Outlet />
  //   </div>
  // );
}
