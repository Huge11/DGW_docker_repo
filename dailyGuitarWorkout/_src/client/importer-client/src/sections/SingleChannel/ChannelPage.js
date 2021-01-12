import React from 'react'
import {connect} from 'react-redux'
import { useParams } from 'react-router-dom'
import {SimpleHeader} from 'components/headers'
import { getChannelById } from 'utils/youtube'
// import { setChannelData } from 'redux/channels/channels.actions'

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


function ChannelPage({setChannelData, YT_Data}) {

  const {id} = useParams()
  
  getChannelById(id)                        
    .then(response=>{
      if(response.data.items.length > 0){
          setChannelData(response.data.items[0].snippet)
      }
    })


		return(
			<div>
				<SimpleHeader name={YT_Data && YT_Data.title ? YT_Data.title : id} parentName="Channels" />
				<Container className="mt--6" fluid>
				  <Card className="mb-4">
					<CardHeader>
					  <h3 className="mb-0">Channel {YT_Data && YT_Data.title ? YT_Data.title : id}</h3>
					</CardHeader>
					<CardBody>
					  <Row>
						<Col lg="6">
						  <div className="card-wrapper">
                {YT_Data ? <ChannelDisplay /> : null }
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

// const mapStateToProps = ({channels: {YT_Data}})=>({
//   YT_Data
// })


// const mapDispatchToProps = (dispatch)=>({
//   setChannelData: (snippet)=>dispatch(setChannelData(snippet))
// })

export default connect(null, null)(ChannelPage)