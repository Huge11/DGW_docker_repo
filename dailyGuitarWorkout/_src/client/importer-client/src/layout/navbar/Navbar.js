import React from "react";
// nodejs library that concatenates classes
import classnames from "classnames";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// reactstrap components
import {
  Collapse,
  Navbar,
  Nav,
  Container,
} from "reactstrap";

// import NotificationDropdown from './NotificationDropdown.js';
// import ShortcutDropdown from './ShortcutDropdown.js';
import UserDropdown from './UserDropdown.js';
// import SearchToggler from './SearchToggler.js';
import MobileNavToggler from './MobileNavToggler.js';
// import SearchForm from './SearchForm.js'


class AdminNavbar extends React.Component {
  // function that on mobile devices makes the search open
  openSearch = () => {
    document.body.classList.add("g-navbar-search-showing");
    setTimeout(function() {
      document.body.classList.remove("g-navbar-search-showing");
      document.body.classList.add("g-navbar-search-show");
    }, 150);
    setTimeout(function() {
      document.body.classList.add("g-navbar-search-shown");
    }, 300);
  };
  // function that on mobile devices makes the search close
  closeSearch = () => {
    document.body.classList.remove("g-navbar-search-shown");
    setTimeout(function() {
      document.body.classList.remove("g-navbar-search-show");
      document.body.classList.add("g-navbar-search-hiding");
    }, 150);
    setTimeout(function() {
      document.body.classList.remove("g-navbar-search-hiding");
      document.body.classList.add("g-navbar-search-hidden");
    }, 300);
    setTimeout(function() {
      document.body.classList.remove("g-navbar-search-hidden");
    }, 500);
  };
  render() {
    return (
      <>
        <Navbar
          className={classnames(
            "navbar-top navbar-expand border-bottom",
            { "navbar-dark bg-info": this.props.theme === "dark" },
            { "navbar-light bg-secondary": this.props.theme === "light" }
          )}
        >
          <Container fluid>
            <Collapse navbar isOpen={true}>

              {/* <SearchForm closeSearch={this.closeSearch.bind(this)} theme={this.props.theme}/>   */}

              <Nav className="align-items-center ml-md-auto" navbar>
                <MobileNavToggler sidenavOpen={this.props.sidenavOpen} toggleSidenav={this.props.toggleSidenav}/>
                {/* <SearchToggler openSearch={this.openSearch.bind(this)} /> */}
                {/* <NotificationDropdown /> */}
                {/* <ShortcutDropdown /> */}
              </Nav>

              <Nav className="align-items-center ml-auto ml-md-0" navbar>
                <UserDropdown />
              </Nav>

            </Collapse>
          </Container>
        </Navbar>
      </>
    );
  }
}
AdminNavbar.defaultProps = {
  toggleSidenav: () => {},
  sidenavOpen: false,
  theme: "dark"
};
AdminNavbar.propTypes = {
  toggleSidenav: PropTypes.func,
  sidenavOpen: PropTypes.bool,
  theme: PropTypes.oneOf(["dark", "light"])
};

export default AdminNavbar;






