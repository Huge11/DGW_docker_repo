import React from 'react'
import {SimpleHeader} from 'components/headers'
// import NewChannelSection from './NewChannelSection'
import { connect } from 'react-redux';

import {
  Card,
  CardHeader,
  CardBody,
  // Label,
//   FormGroup,
  // Form,
//   Input,
  Container,
  Row,
  Col,
//   Button,
  // Table,
  // UncontrolledTooltip
} from "reactstrap";

import ChannelDisplay from './ChannelDisplay';
import SubscribedChannels from './SubscribedChannels';
import ChannelInput from './ChannelInput';


class Channels extends React.Component {

	render(){
		return(
			<div>
				<SimpleHeader name="Channels" parentName="Importer" />
				<Container className="mt--6" fluid>
				  <Card className="mb-4">
					<CardHeader>
					  <h3 className="mb-0">Search Channel By Id</h3>
					</CardHeader>
					<CardBody>
					  <Row>
							<Col lg="6">
								<div className="card-wrapper">
								<ChannelInput />
								</div>
							</Col>
							<Col lg="6">
								<div className="card-wrapper">
									{this.props.youtube.data ? <ChannelDisplay /> : null}
								</div>
							</Col>
					  </Row>
					  <Row>
						  <Col>
							<div className="card-wrapper">
								<SubscribedChannels />
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

const mapStateToProps = ({channels: {youtube}}) => ({
	youtube
});


export default connect(mapStateToProps)(Channels)