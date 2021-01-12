import React from 'react';

import { Form, FormGroup, Input, InputGroup, InputGroupAddon, InputGroupText } from 'reactstrap';

import classnames from 'classnames';

class SearchForm extends React.Component {
    render() {
        return (
            <Form
                className={classnames(
                  "navbar-search form-inline mr-sm-3",
                  { "navbar-search-light": this.props.theme === "dark" },
                  { "navbar-search-dark": this.props.theme === "light" }
                )}
            >
                <FormGroup className="mb-0">
                  <InputGroup className="input-group-alternative input-group-merge">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="fas fa-search" />
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input placeholder="Search" type="text" />
                  </InputGroup>
                </FormGroup>
                <button
                  aria-label="Close"
                  className="close"
                  type="button"
                  onClick={this.props.closeSearch}
                >
                  <span aria-hidden={true}>×</span>
                </button>
            </Form>
        )
    }
}

export default SearchForm