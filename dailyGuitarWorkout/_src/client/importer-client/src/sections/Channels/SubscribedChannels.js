import React from 'react';
import {connect} from 'react-redux';

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

import {fetchChannelList} from 'redux/channel/channel.actions';
import Spinner from 'components/UX/Spinner';
import ChannelTableRow from './ChannelTableRow'



class SubscribedChannels extends React.Component {

  componentDidMount(){
    this.props.fetchChannelList()
  }

  createTableRows = (json)=>{
    let rows = []
    const channelIds = Object.keys(json)

    channelIds.forEach((id, index) => {
      if(id ==='isFetching'){return}
      const data = json[id]
      rows.push(<ChannelTableRow key={index} data={data} />)
    })

    return rows
  }

  render(){
    const channelList = this.props.channelList
    // console.log(channelList)
    const channelIds = Object.keys(channelList)
    console.log(channelIds.length)
    const TableRows = channelIds.length > 1 ? this.createTableRows(channelList) : <tr key={0}></tr>
    console.log(TableRows)
  	return(
         <Card>
            <CardHeader className="border-0">
              <Row>
                <Col xs="6">
                  <h3 className="mb-0">Subscribed Channels</h3>
                  <div>{channelIds.length}</div>
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

            {channelList.isFetching ? 
              <Spinner /> : 
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
                  {TableRows}
                </tbody>
              </Table>
            }
          </Card>
	  )
  }
}

const mapStateToProps = ({channels: {channelList}}) => ({
  channelList
})

const mapDispatchToProps = (dispatch) => ({
  fetchChannelList: () => dispatch(fetchChannelList()),
})


export default connect(mapStateToProps, mapDispatchToProps)(SubscribedChannels);
