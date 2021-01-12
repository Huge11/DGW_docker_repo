import React from 'react'

import {NavItem, NavLink} from 'reactstrap'




class SearchToggler extends React.Component{
    render() {
        return (
                <NavItem className="d-sm-none">
                  <NavLink onClick={this.props.openSearch}>
                    <i className="ni ni-zoom-split-in" />
                  </NavLink>
                </NavItem>
        )
    }
}

export default SearchToggler