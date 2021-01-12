import React from 'react'
// reactstrap components
import {
  Card,
  CardHeader,
  CardBody,
  Label,
  FormGroup,
  Form,
  Input,
  Container,
  Row,
  Col
} from "reactstrap";

import { SimpleHeader } from 'views/headers'

class Channels extends React.Component {

	render(){
		return(
			<div>
				<SimpleHeader name="Form elements" parentName="Forms" />
				<NewChannelSection />
			</div>
		)
	}
}

class NewChannelSection extends React.Component{
	constructor(){
		super()
		this.state = {
			channelId: ""
		}
	}

	render(){
		return (
			<span>
				<Container className="mt--6" fluid>
				  <Card className="mb-4">
					<CardHeader>
					  <h3 className="mb-0">Search Channel By Id</h3>
					</CardHeader>
					<CardBody>
					  <Row>
						<Col lg="6">
						  <div className="card-wrapper">
							<Card>
							  <CardBody>
								<FormGroup>
								  <label className="form-control-label">Channel Id</label>
								  <Input
									className="form-control-lg"
									placeholder=".form-control-lg"
									type="text"
								  />
								</FormGroup>
				                <Button color="default" type="button" onClick={e=>}>
				                    Search
				                </Button>
							  </CardBody>
							</Card>
						  </div>
						</Col>
					  </Row>
					</CardBody>
				  </Card>
				</Container>
			</span>
		)
	}
}

export default Channels


				// <Card>
				//   <CardHeader>
				//     <h3 className="mb-0">Text inputs</h3>
				//   </CardHeader>
				//   <CardBody>
				//     <Form>
				//       <FormGroup>
				//         <label
				//           className="form-control-label"
				//           htmlFor="exampleFormControlTextarea2"
				//         >
				//           Basic textarea
				//         </label>
				//         <Input
				//           id="exampleFormControlTextarea2"
				//           rows="3"
				//           type="textarea"
				//         />
				//       </FormGroup>
				//       <FormGroup>
				//         <label
				//           className="form-control-label"
				//           htmlFor="exampleFormControlTextarea3"
				//         >
				//           Unresizable textarea
				//         </label>
				//         <Input
				//           id="exampleFormControlTextarea3"
				//           resize="none"
				//           rows="3"
				//           type="textarea"
				//         />
				//       </FormGroup>
				//     </Form>
				//   </CardBody>
				// </Card>
				// <Card>
				//   <CardHeader>
				//     <h3 className="mb-0">Select</h3>
				//   </CardHeader>
				//   <CardBody>
				//     <Form>
				//       <FormGroup>
				//         <label
				//           className="form-control-label"
				//           htmlFor="exampleFormControlSelect3"
				//         >
				//           Basic select
				//         </label>
				//         <Input id="exampleFormControlSelect3" type="select">
				//           <option>1</option>
				//           <option>2</option>
				//           <option>3</option>
				//           <option>4</option>
				//           <option>5</option>
				//         </Input>
				//       </FormGroup>
				//       <FormGroup>
				//         <label
				//           className="form-control-label"
				//           htmlFor="exampleFormControlSelect5"
				//         >
				//           Basic select
				//         </label>
				//         <Input
				//           disabled
				//           id="exampleFormControlSelect5"
				//           type="select"
				//         >
				//           <option>1</option>
				//           <option>2</option>
				//           <option>3</option>
				//           <option>4</option>
				//           <option>5</option>
				//         </Input>
				//       </FormGroup>
				//       <FormGroup>
				//         <label
				//           className="form-control-label"
				//           htmlFor="exampleFormControlSelect6"
				//         >
				//           Multiple select
				//         </label>
				//         <Input
				//           id="exampleFormControlSelect6"
				//           multiple="multiple"
				//           type="select"
				//         >
				//           <option>1</option>
				//           <option>2</option>
				//           <option>3</option>
				//           <option>4</option>
				//           <option>5</option>
				//         </Input>
				//       </FormGroup>
				//       <FormGroup>
				//         <label
				//           className="form-control-label"
				//           htmlFor="exampleFormControlSelect4"
				//         >
				//           Disabled multiple select
				//         </label>
				//         <Input
				//           disabled
				//           id="exampleFormControlSelect4"
				//           multiple="multiple"
				//           type="select"
				//         >
				//           <option>1</option>
				//           <option>2</option>
				//           <option>3</option>
				//           <option>4</option>
				//           <option>5</option>
				//         </Input>
				//       </FormGroup>
				//     </Form>
				//   </CardBody>
				// </Card>
				// <Card>
				//   <CardHeader>
				//     <h3 className="mb-0">File browser</h3>
				//   </CardHeader>
				//   <CardBody>
				//     <Form>
				//       <div className="custom-file">
				//         <input
				//           className="custom-file-input"
				//           id="customFileLang"
				//           lang="en"
				//           type="file"
				//         />
				//         <label
				//           className="custom-file-label"
				//           htmlFor="customFileLang"
				//         >
				//           Select file
				//         </label>
				//       </div>
				//     </Form>
				//   </CardBody>
				// </Card>
				// <Card>
				//   <CardHeader>
				//     <h3 className="mb-0">Checkboxes and radios</h3>
				//   </CardHeader>
				//   <CardBody>
				//     <Form>
				//       <Row>
				//         <Col md="6">
				//           <div className="custom-control custom-checkbox mb-3">
				//             <input
				//               className="custom-control-input"
				//               id="customCheck1"
				//               type="checkbox"
				//             />
				//             <label
				//               className="custom-control-label"
				//               htmlFor="customCheck1"
				//             >
				//               Unchecked
				//             </label>
				//           </div>
				//           <div className="custom-control custom-checkbox mb-3">
				//             <input
				//               className="custom-control-input"
				//               defaultChecked
				//               id="customCheck2"
				//               type="checkbox"
				//             />
				//             <label
				//               className="custom-control-label"
				//               htmlFor="customCheck2"
				//             >
				//               Checked
				//             </label>
				//           </div>
				//           <div className="custom-control custom-checkbox mb-3">
				//             <input
				//               className="custom-control-input"
				//               disabled
				//               id="customCheck3"
				//               type="checkbox"
				//             />
				//             <label
				//               className="custom-control-label"
				//               htmlFor="customCheck3"
				//             >
				//               Disabled Unchecked
				//             </label>
				//           </div>
				//           <div className="custom-control custom-checkbox mb-3">
				//             <input
				//               className="custom-control-input"
				//               defaultChecked
				//               disabled
				//               id="customCheck4"
				//               type="checkbox"
				//             />
				//             <label
				//               className="custom-control-label"
				//               htmlFor="customCheck4"
				//             >
				//               Disabled Checked
				//             </label>
				//           </div>
				//         </Col>
				//         <Col md="6">
				//           <div className="custom-control custom-radio mb-3">
				//             <input
				//               className="custom-control-input"
				//               id="customRadio5"
				//               name="custom-radio-1"
				//               type="radio"
				//             />
				//             <label
				//               className="custom-control-label"
				//               htmlFor="customRadio5"
				//             >
				//               Unchecked
				//             </label>
				//           </div>
				//           <div className="custom-control custom-radio mb-3">
				//             <input
				//               className="custom-control-input"
				//               defaultChecked
				//               id="customRadio6"
				//               name="custom-radio-1"
				//               type="radio"
				//             />
				//             <label
				//               className="custom-control-label"
				//               htmlFor="customRadio6"
				//             >
				//               Checked
				//             </label>
				//           </div>
				//           <div className="custom-control custom-radio mb-3">
				//             <input
				//               className="custom-control-input"
				//               disabled
				//               id="customRadio7"
				//               name="custom-radio-3"
				//               type="radio"
				//             />
				//             <label
				//               className="custom-control-label"
				//               htmlFor="customRadio7"
				//             >
				//               Disabled unchecked
				//             </label>
				//           </div>
				//           <div className="custom-control custom-radio mb-3">
				//             <input
				//               className="custom-control-input"
				//               defaultChecked
				//               disabled
				//               id="customRadio8"
				//               name="custom-radio-4"
				//               type="radio"
				//             />
				//             <label
				//               className="custom-control-label"
				//               htmlFor="customRadio8"
				//             >
				//               Disabled checkbox
				//             </label>
				//           </div>
				//         </Col>
				//       </Row>
				//     </Form>
				//   </CardBody>
				// </Card>