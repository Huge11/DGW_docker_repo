import React from 'react'
import { connect } from 'react-redux'

import {
  Card,
  // CardHeader,
  CardBody,
  // Label,
  // FormGroup,
  // Form,
  // Input,
  // Container,
  // Row,
//   Col,
  Button,
  // Table,
  // UncontrolledTooltip
} from "reactstrap";


const ChannelDisplay = ({channelSnippet})=>{
	console.log('channel display')
		console.log(channelSnippet)

		return(

	              <Card>
	                <CardBody>
	                  <a href="#pablo" onClick={e => e.preventDefault()}>
	                    <img
	                      alt="..."
	                      className="rounded-circle img-center img-fluid shadow shadow-lg--hover"
	                      src={channelSnippet.thumbnails.default.url}
	                      style={{ width: "140px" }}
	                    />
	                  </a>
	                  <div className="pt-4 text-center">
	                    <h5 className="h3 title">
	                      <span className="d-block mb-1">{channelSnippet.title}</span>
	                      <small className="h4 font-weight-light text-muted">
	                        {channelSnippet.description}
	                      </small>
	                    </h5>
	                    <div className="mt-3">
	                      <Button
	                        className="btn-icon-only rounded-circle"
	                        color="success"
	                        href="#pablo"
	                        onClick={e => e.preventDefault()}
	                      >
	                        <i className="fa fa-plus-square" />
	                      </Button>
	                      <Button
	                        className="btn-icon-only rounded-circle"
	                        color="danger"
	                        href="#pablo"
	                        onClick={e => e.preventDefault()}
	                      >
	                        <i className="fa fa-minus-square" />
	                      </Button>
	                    </div>
	                  </div>
	                </CardBody>
	              </Card>


			)
}

const mapStateToProps = ({importer: {channelSnippet}}) => ({
  channelSnippet
});

export default connect(mapStateToProps)(ChannelDisplay)