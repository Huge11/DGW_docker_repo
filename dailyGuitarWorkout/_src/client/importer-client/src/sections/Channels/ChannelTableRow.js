import React from 'react';
import {connect} from 'react-redux'

import { Link } from 'react-router-dom';

import {
  UncontrolledTooltip
} from "reactstrap";

import {watchChannel, unWatchChannel, deleteChannel} from 'redux/channel/channel.actions';




class ChannelTableRow extends React.Component {
  constructor({watchChannel}){
    super()
    this.watchChannel = watchChannel.bind(this)
  }


  render(){
    console.log("channelTableRow render")
    let {index, data} = this.props
    console.log(data)
    const channelId = data.id
    data = data.snippet

    const onClickWatch = () => this.watchChannel(channelId)
    const onClickUnWatch = () => this.props.unWatchChannel(channelId)
    const onClickDelete = () => this.props.deleteChannel(channelId)

    return(
      <tr key={index}>
        <td className="table-user">
          <Link to={`/admin/channels/${channelId}`}>
            <img
              alt="..."
              className="avatar rounded-circle mr-3"
              src={data.thumbnails.default.url || "https://www.google.com/url?sa=i&url=https%3A%2F%2Fstackoverflow.com%2Fquestions%2F53295439%2Fusing-div-ngstyle-for-background-image-and-am-looping-it-ngfor-if-any-of-ima&psig=AOvVaw0gWwvYlm6dNfkk73HJ3DAM&ust=1582433416371000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCKCKw_-t5OcCFQAAAAAdAAAAABAG"}
            />
            <b>{data.title}</b>
          </Link>
        </td>
        <td>
        <span className="text-muted">{channelId}</span>
        </td>
        <td>
          <a
            className="font-weight-bold"
            href="#pablo"
            onClick={e => e.preventDefault()}
          >
            {data.watching ? 'true' : 'false'}
          </a>
        </td>

        <td className="table-actions">
          <a
            className="table-action"
            href="#pablo"
            id="tooltip564981685"
            onClick={onClickWatch}
          >
            <i className="fas fa-user-edit" />
          </a>
          <UncontrolledTooltip delay={0} target="tooltip564981685">
            Watch
          </UncontrolledTooltip>
          <a
            className="table-action"
            href="#pablo"
            id="tooltip564981685"
            onClick={onClickUnWatch}
          >
            <i className="fas fa-eye-slash" />
          </a>
          <UncontrolledTooltip delay={0} target="tooltip564981685">
            UnWatch
          </UncontrolledTooltip>
          <a
            className="table-action table-action-delete"
            href="#pablo"
            id="tooltip601065234"
            onClick={onClickDelete}
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
}


const mapDispatchToProps = (dispatch) => ({
  watchChannel: (channelId) => dispatch(watchChannel(channelId)),
  unWatchChannel: (channelId) => dispatch(unWatchChannel(channelId)),
  deleteChannel: (channelId) => dispatch(deleteChannel(channelId))
})

export default connect(null, mapDispatchToProps)(ChannelTableRow)