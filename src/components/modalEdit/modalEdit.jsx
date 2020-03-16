import React, { Component } from 'react';
import {Modal, Button, Row, Col, Form} from "react-bootstrap";
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
class ModalEdit extends Component {
    constructor(props) {
        super(props);
        this.handleSave = this.handleSave.bind(this);
        this.state = {
            number:'',
            name:'',
            Date:'',
            Edited:'',
            Author:'',
            startDate: new Date()
        }
        this.handleChange = this.handleChange.bind(this);
      }
      componentWillReceiveProps(nextProps) {
        this.setState({
            number: nextProps.number,
            name: nextProps.name,
            Date: nextProps.Date,
            Edited: nextProps.Edited,
            Author: nextProps.Author
        });
        
    }
    handleChange(date) {
        this.setState({
          startDate: date
         
        })
        console.log('date', date)
      }
    //   componentWillMount() {
    //     this.setState({
    //         editState: {...this.props.editState}
    //     })
    //   }
    numberHandler(e){
        this.setState({number : e.target.value})
    }
    nameHandler(e){
        this.setState({name : e.target.value})
    }
    editedHandler(e){
        this.setState({Edited : e.target.value})
    }
    handleSave() {
        const item = this.state;
        this.props.saveModalDetails(item);
        this.props.close()
      
    }
    render() { 
        
      
        return ( <React.Fragment>
              <Modal
                      show ={this.props.showedit}
                      onHide={this.props.close}
                        
                       >
                       <Modal.Header>
                           <Modal.Title id="contained-modal-title-vcenter">
                               S List Data  
                           </Modal.Title>
                       </Modal.Header>
                       <Modal.Body>
             
                              <div className="form-section">
                                 <p><span className="modal-lable">Number:</span> <input type="number" value={this.state.number} onChange={(e) => this.numberHandler(e)}/></p>
                                 <p><span className="modal-lable">Name:</span> <input value={this.state.name} onChange={(e) => this.nameHandler(e)}/></p>
                                 <div>
                                 <span className="modal-lable">Date:</span>
                                 <DatePicker
                                        selected={ this.state.startDate }
                                        onChange={ this.handleChange }
                                        dateFormat="MM/dd/yyyy"

                                    />
                                 </div>
                                 
                                 <p><span className="modal-lable">Edited Date:</span> <input value={this.state.Edited}   onChange={(e) => this.editedHandler(e)}/></p>
                                 <p><span className="modal-lable">Author:</span> <input value={this.state.Author}   /></p>
                            </div>
                        </Modal.Body>
                       <Modal.Footer>

                           <Button variant="danger" onClick={this.props.close}>Close</Button>
                           <Button variant="primary" onClick={() => { this.handleSave() }}>Save</Button>
                       </Modal.Footer>
               </Modal>
        </React.Fragment> );
    }
}
 
export default ModalEdit;