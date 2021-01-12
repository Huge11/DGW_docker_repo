import React from 'react'
import {connect} from 'react-redux'

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
import { getChannelById } from 'utils/youtube'

import { updateChannelSnippet } from 'redux/importer/importer.actions'


class ChannelInput extends React.Component {
    constructor(){
        super()
        this.state = {
            channelId: "UCmnlTWVJysjWPFiZhQ5uudg"
        }
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
                onClick={
                    ()=>getChannelById(this.state.channelId)
                        .then(response=>{
                            if(response.data.items.length > 0){
                                this.props.updateChannelSnippet(response.data.items[0].snippet)
                            }
                        })
                }
                >
                    Search
                </Button>
                </CardBody>
            </Card>
        )
    }
}

const mapDispatchToProps = (dispatch)=>({
    updateChannelSnippet: (snippet)=>dispatch(updateChannelSnippet(snippet))
})


export default connect(null, mapDispatchToProps)(ChannelInput)