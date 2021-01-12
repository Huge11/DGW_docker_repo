import React from 'react';
import {connect} from 'react-redux';

import {
    Card,
    // CardHeader,
    CardBody,
    // Label,
    FormGroup,
    // Form,
    Input,
    // Container,
    // Row,
    // Col,
    Button,
    // Table,
    // UncontrolledTooltip
  } from "reactstrap";

// import axios from 'axios'
// import { getChannelById } from 'utils/youtube';

import { fetchChannelYoutubeData } from 'redux/channel/channel.actions';


class ChannelInput extends React.Component {
    constructor({fetchChannelYoutubeData}){
        super()
        this.state = {
            channelId: "UCmnlTWVJysjWPFiZhQ5uudg"
        }
        this.fetchYoutubeData = ()=>{fetchChannelYoutubeData.call(this, this.state.channelId)}
    }

    render(){
        return (
            <Card>
                <CardBody>
                <FormGroup>
                    <label className="form-control-label">Channel Id</label>
                    <Input
                    className="form-control-lg"
                    placeholder=".form-control-lg"
                    type="text"
                    value={this.state.channelId}
                    onChange={e=>this.setState({channelId: e.target.value})}
                    />
                </FormGroup>
                <Button 
                color="default" 
                type="button" 
                onClick={this.fetchYoutubeData}
                >
                    Search
                </Button>
                </CardBody>
            </Card>
        )
    }
}

const mapDispatchToProps = (dispatch)=>({
    fetchChannelYoutubeData: (channelId)=>dispatch(fetchChannelYoutubeData(channelId))
})


export default connect(null, mapDispatchToProps)(ChannelInput)