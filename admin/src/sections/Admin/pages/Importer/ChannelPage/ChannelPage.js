import React from 'react'
import {connect} from 'react-redux'
import { useParams } from 'react-router-dom'
import {SimpleHeader} from 'sections/Admin/headers'
import { getChannelById } from 'utils/youtube'
import { updateChannelSnippet } from 'redux/importer/importer.actions'

import ChannelDisplay from './ChannelDisplay'
import {
  Card,
  CardHeader,
  CardBody,
  // // Label,
  // FormGroup,
  // // Form,
  // Input,
  Container,
  Row,
  Col,
  // Button,
  // Table,
  // UncontrolledTooltip
} from "reactstrap";


function ChannelPage({updateChannelSnippet, channelSnippet}) {

  const {id} = useParams()
  
  getChannelById(id)                        
    .then(response=>{
      if(response.data.items.length > 0){
          updateChannelSnippet(response.data.items[0].snippet)
      }
    })


		return(
			<div>
				<SimpleHeader name={channelSnippet && channelSnippet.title ? channelSnippet.title : id} parentName="Channels" />
				<Container className="mt--6" fluid>
				  <Card className="mb-4">
					<CardHeader>
					  <h3 className="mb-0">Channel {channelSnippet && channelSnippet.title ? channelSnippet.title : id}</h3>
					</CardHeader>
					<CardBody>
					  <Row>
						<Col lg="6">
						  <div className="card-wrapper">
                {channelSnippet ? <ChannelDisplay /> : null }
						  </div>
						</Col>
						<Col lg="6">
						  <div className="card-wrapper">

						  </div>
						</Col>
					  </Row>
					  <Row>
						  <Col>
                <div className="card-wrapper">

                </div>
						  </Col>
					  </Row>
					</CardBody>
				  </Card>
				</Container>
			</div>
		)
	
}

const mapStateToProps = ({importer: {channelSnippet}})=>({
  channelSnippet
})


const mapDispatchToProps = (dispatch)=>({
  updateChannelSnippet: (snippet)=>dispatch(updateChannelSnippet(snippet))
})

export default connect(mapStateToProps, mapDispatchToProps)(ChannelPage)