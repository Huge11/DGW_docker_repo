import React from 'react';

import {
//   Collapse,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  DropdownToggle,
//   FormGroup,
//   Form,
//   Input,
//   InputGroupAddon,
//   InputGroupText,
//   InputGroup,
  ListGroupItem,
  ListGroup,
//   Media,
//   Navbar,
//   NavItem,
//   NavLink,
//   Nav,
//   Container,
  Row,
  Col
} from "reactstrap";





function NotificationDropdown(){
  return(
    <UncontrolledDropdown nav>
                  <DropdownToggle className="nav-link" color="" tag="a">
                    <i className="ni ni-bell-55" />
                  </DropdownToggle>
                  <DropdownMenu
                    className="dropdown-menu-xl py-0 overflow-hidden"
                    right
                  >
                    <div className="px-3 py-3">
                      <h6 className="text-sm text-muted m-0">
                        You have <strong className="text-info">13</strong>{" "}
                        notifications.
                      </h6>
                    </div>

                    <ListGroup flush>
                      <ListGroupItem
                        className="list-group-item-action"
                        href="#pablo"
                        onClick={e => e.preventDefault()}
                        tag="a"
                      >
                        <Row className="align-items-center">
                          <Col className="col-auto">
                            <img
                              alt="..."
                              className="avatar rounded-circle"
                              src={require("assets/img/theme/team-1.jpg")}
                            />
                          </Col>
                          <div className="col ml--2">
                            <div className="d-flex justify-content-between align-items-center">
                              <div>
                                <h4 className="mb-0 text-sm">John Snow</h4>
                              </div>
                              <div className="text-right text-muted">
                                <small>2 hrs ago</small>
                              </div>
                            </div>
                            <p className="text-sm mb-0">
                              Let's meet at Starbucks at 11:30. Wdyt?
                            </p>
                          </div>
                        </Row>
                      </ListGroupItem>
                      <ListGroupItem
                        className="list-group-item-action"
                        href="#pablo"
                        onClick={e => e.preventDefault()}
                        tag="a"
                      >
                        <Row className="align-items-center">
                          <Col className="col-auto">
                            <img
                              alt="..."
                              className="avatar rounded-circle"
                              src={require("assets/img/theme/team-2.jpg")}
                            />
                          </Col>
                          <div className="col ml--2">
                            <div className="d-flex justify-content-between align-items-center">
                              <div>
                                <h4 className="mb-0 text-sm">John Snow</h4>
                              </div>
                              <div className="text-right text-muted">
                                <small>3 hrs ago</small>
                              </div>
                            </div>
                            <p className="text-sm mb-0">
                              A new issue has been reported for Argon.
                            </p>
                          </div>
                        </Row>
                      </ListGroupItem>
                      <ListGroupItem
                        className="list-group-item-action"
                        href="#pablo"
                        onClick={e => e.preventDefault()}
                        tag="a"
                      >
                        <Row className="align-items-center">
                          <Col className="col-auto">
                            <img
                              alt="..."
                              className="avatar rounded-circle"
                              src={require("assets/img/theme/team-3.jpg")}
                            />
                          </Col>
                          <div className="col ml--2">
                            <div className="d-flex justify-content-between align-items-center">
                              <div>
                                <h4 className="mb-0 text-sm">John Snow</h4>
                              </div>
                              <div className="text-right text-muted">
                                <small>5 hrs ago</small>
                              </div>
                            </div>
                            <p className="text-sm mb-0">
                              Your posts have been liked a lot.
                            </p>
                          </div>
                        </Row>
                      </ListGroupItem>
                      <ListGroupItem
                        className="list-group-item-action"
                        href="#pablo"
                        onClick={e => e.preventDefault()}
                        tag="a"
                      >
                        <Row className="align-items-center">
                          <Col className="col-auto">
                            <img
                              alt="..."
                              className="avatar rounded-circle"
                              src={require("assets/img/theme/team-4.jpg")}
                            />
                          </Col>
                          <div className="col ml--2">
                            <div className="d-flex justify-content-between align-items-center">
                              <div>
                                <h4 className="mb-0 text-sm">John Snow</h4>
                              </div>
                              <div className="text-right text-muted">
                                <small>2 hrs ago</small>
                              </div>
                            </div>
                            <p className="text-sm mb-0">
                              Let's meet at Starbucks at 11:30. Wdyt?
                            </p>
                          </div>
                        </Row>
                      </ListGroupItem>
                      <ListGroupItem
                        className="list-group-item-action"
                        href="#pablo"
                        onClick={e => e.preventDefault()}
                        tag="a"
                      >
                        <Row className="align-items-center">
                          <Col className="col-auto">
                            <img
                              alt="..."
                              className="avatar rounded-circle"
                              src={require("assets/img/theme/team-5.jpg")}
                            />
                          </Col>
                          <div className="col ml--2">
                            <div className="d-flex justify-content-between align-items-center">
                              <div>
                                <h4 className="mb-0 text-sm">John Snow</h4>
                              </div>
                              <div className="text-right text-muted">
                                <small>3 hrs ago</small>
                              </div>
                            </div>
                            <p className="text-sm mb-0">
                              A new issue has been reported for Argon.
                            </p>
                          </div>
                        </Row>
                      </ListGroupItem>
                    </ListGroup>

                    <DropdownItem
                      className="text-center text-info font-weight-bold py-3"
                      href="#pablo"
                      onClick={e => e.preventDefault()}
                    >
                      View all
                    </DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>
  )
}

export default NotificationDropdown;