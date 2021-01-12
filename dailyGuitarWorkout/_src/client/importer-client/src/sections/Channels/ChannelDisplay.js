//   ____ _                            _   ____  _                 _       
//  / ___| |__   __ _ _ __  _ __   ___| | |  _ \(_)___ _ __   __ _| |_   _ 
// | |   | '_ \ / _` | '_ \| '_ \ / _ \ | | | | | / __| '_ \ / _` | | | | |
// | |___| | | | (_| | | | | | | |  __/ | | |_| | \__ \ |_) | (_| | | |_| |
//  \____|_| |_|\__,_|_| |_|_| |_|\___|_| |____/|_|___/ .__/ \__,_|_|\__, |
//                                                    |_|            |___/ 






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

import {watchChannel, unWatchChannel, /* deleteChannel */} from 'redux/channel/channel.actions';



const ChannelDisplay = ({youtube, watchChannel, unWatchChannel, /* deleteChannel */})=>{
		let YT_Data = youtube.data.snippet
		const channelId = youtube.data.id

		const onClickWatch = ()=>{watchChannel(channelId)},
					onClickUnWatch = ()=>{unWatchChannel(channelId)}
					// onClickDelete = ()=>{deleteChannel(YT_Data.channelId)}


		return(

	              <Card>
	                <CardBody>
	                  <a href="#pablo" onClick={e => e.preventDefault()}>
	                    <img
	                      alt="..."
	                      className="rounded-circle img-center img-fluid shadow shadow-lg--hover"
	                      src={YT_Data.thumbnails.default.url}
	                      style={{ width: "140px" }}
	                    />
	                  </a>
	                  <div className="pt-4 text-center">
	                    <h5 className="h3 title">
	                      <span className="d-block mb-1">{YT_Data.title}</span>
	                      <small className="h4 font-weight-light text-muted">
	                        {YT_Data.description}
	                      </small>
	                    </h5>
	                    <div className="mt-3">
	                      <Button
	                        className="btn-icon-only rounded-circle"
	                        color="success"
	                        href="#pablo"
	                        onClick={onClickWatch}
	                      >
	                        <i className="fa fa-plus-square" />
	                      </Button>
	                      <Button
	                        className="btn-icon-only rounded-circle"
	                        color="danger"
	                        href="#pablo"
	                        onClick={onClickUnWatch}
	                      >
	                        <i className="fa fa-minus-square" />
	                      </Button>
	                    </div>
	                  </div>
	                </CardBody>
	              </Card>


			)
}

const mapStateToProps = ({channels: {youtube}}) => ({
  youtube
});

const mapDispatchToProps = (dispatch) => ({
  watchChannel: (channelId) => dispatch(watchChannel(channelId)),
  unWatchChannel: (channelId) => dispatch(unWatchChannel(channelId)),
  // deleteChannel: (channelId) => dispatch(deleteChannel(channelId))
})

export default connect(mapStateToProps, mapDispatchToProps)(ChannelDisplay)