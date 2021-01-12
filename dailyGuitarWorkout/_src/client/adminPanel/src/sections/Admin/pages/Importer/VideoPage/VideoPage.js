import React from 'react';

import {SimpleHeader} from 'sections/Admin/headers';

import {
  Container,
  Card,
  CardHeader,
  CardBody,
  Row,
  Col,
  
} from 'reactstrap'



class VideoPage extends React.Component {
  constructor(){
    super()
  }

  render(){
    return(
			<div>
				<SimpleHeader name="Videos" parentName="Importer" />
				<Container className="mt--6" fluid>
				  <Card className="mb-4">
					<CardHeader>
					  <h3 className="mb-0">Search Channel By Id</h3>
					</CardHeader>
					<CardBody>
					  <Row>
						<Col lg="6">
						  <div className="card-wrapper">
							{/* <ChannelInput /> */}
						  </div>
						</Col>
						<Col lg="6">
							<div className="card-wrapper">
								{/* {this.props.channelSnippet ? <ChannelDisplay /> : null} */}
							</div>
            			</Col>
					  </Row>
					  <Row>
						  <Col>
							<div className="card-wrapper">
								{/* <SubscribedChannels /> */}
							  </div>
						  </Col>
					  </Row>
					</CardBody>
				  </Card>
				</Container>
			</div>      
    )
  }
}





export default VideoPage;