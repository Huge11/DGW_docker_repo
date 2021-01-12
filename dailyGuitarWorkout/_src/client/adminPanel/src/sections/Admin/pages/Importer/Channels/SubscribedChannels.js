import React from 'react'

import { Link } from 'react-router-dom'

import {
  Card,
  CardHeader,
  // CardBody,
  // Label,
  // FormGroup,
  // Form,
  // Input,
  // Container,
  Row,
  Col,
  Button,
  Table,
  UncontrolledTooltip
} from "reactstrap";


const data = {
	channelId: 'UCmnlTWVJysjWPFiZhQ5uudg',
	channelPic: 'https://yt3.ggpht.com/a/AGF-l7_DW2npcValkkH-6COzG5sESmvIrtkDIGyjRw=s88-c-k-c0xffffffff-no-rj-mo',
	channelName: 'Marty Music',
	subscribed: true,
}

const createTableRow = (data)=>{
	return (
                <tr>
                  <td className="table-user">
                  	<Link to={`/admin/channels/${data.channelId}`}>
	                    <img
	                      alt="..."
	                      className="avatar rounded-circle mr-3"
	                      src={data.channelPic}
	                    />
                    	<b>{data.channelName}</b>
                    </Link>
                  </td>
                  <td>
                	<span className="text-muted">{data.channelId}</span>
                  </td>
                  <td>
                    <a
                      className="font-weight-bold"
                      href="#pablo"
                      onClick={e => e.preventDefault()}
                    >
                      {data.subscribed ? 'true' : 'false'}
                    </a>
                  </td>
                  <td className="table-actions">
                    <a
                      className="table-action"
                      href="#pablo"
                      id="tooltip564981685"
                      onClick={e => e.preventDefault()}
                    >
                      <i className="fas fa-user-edit" />
                    </a>
                    <UncontrolledTooltip delay={0} target="tooltip564981685">
                      Subscribe
                    </UncontrolledTooltip>
                    <a
                      className="table-action table-action-delete"
                      href="#pablo"
                      id="tooltip601065234"
                      onClick={e => e.preventDefault()}
                    >
                      <i className="fas fa-trash" />
                    </a>
                    <UncontrolledTooltip delay={0} target="tooltip601065234">
                      Delete
                    </UncontrolledTooltip>
                  </td>
              
                </tr>
            )
}

const SubscribedChannels = ()=>{
	return(
         <Card>
            <CardHeader className="border-0">
              <Row>
                <Col xs="6">
                  <h3 className="mb-0">Subscribed Channels</h3>
                </Col>
                <Col className="text-right" xs="6">
                  <Button
                    className="btn-neutral btn-round btn-icon"
                    color="default"
                    href="#pablo"
                    id="tooltip969372949"
                    onClick={e => e.preventDefault()}
                    size="sm"
                  >
                    <span className="btn-inner--icon mr-1">
                      <i className="fas fa-user-edit" />
                    </span>
                    <span className="btn-inner--text">This Button Does Nothing</span>
                  </Button>
                  <UncontrolledTooltip delay={0} target="tooltip969372949">
                    Edit product
                  </UncontrolledTooltip>
                </Col>
              </Row>
            </CardHeader>

            <Table className="align-items-center table-flush" responsive>
              <thead className="thead-light">
                <tr>
                  <th>Name</th>
                  <th>Channel Id</th>
                  <th>Following</th>
                  <th />
                </tr>
              </thead>
              <tbody>
              	{createTableRow(data)}

              </tbody>
            </Table>
          </Card>
	)
}


export default SubscribedChannels