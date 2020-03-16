import React, { Component } from 'react';
import { Container, Row, Col, Button, Card, Table } from "react-bootstrap";

import ModalDelete from '../components/modalDelete/modlDelete';
import ModalEdit from '../components/modalEdit/modalEdit';

class ProjectsContext extends Component {
    constructor(props) {
        super(props);
        this.replaceModalItem = this.replaceModalItem.bind(this);
        this.saveModalDetails = this.saveModalDetails.bind(this);
        this.state = {
            show: false,
            showedit: false,  
            requiredItem: 0,
            projects: [
                { 
                    id: 1, number: '1', name: 'Rakesh', Date : "03/14/2020", Edited: "020/02/16", Author:'Adams',
                   
                },
                { 
                   
                    id: 2, number: '2', name: 'Rohan', Date : "03/14/2020", Edited: "020/02/16", Author:'Paul',
                },
                { 
                   
                    id: 3, number: '3', name: 'Suresh', Date : "03/14/2020", Edited: "020/02/16", Author:'Sam',
                },
                { 
                   
                    id: 4, number: '4', name: 'Rana', Date : "03/14/2020", Edited: "020/02/16", Author:'Sam',
                },
             ],
            
          }
          
            
      }
      
      replaceModalItem(index) {
        this.setState({
          requiredItem: index
        });
      }
      saveModalDetails(item) {
        const requiredItem = this.state.requiredItem;
        let projects = this.state.projects;
        projects[requiredItem] = item;
        this.setState({ brochure: projects });
      }
        showModal = () =>{
           //listdata.splice(item, 1)
            this.setState({show:true})
        }
        handleModalclose =() =>{
           this.setState({show:false})
           this.setState({showedit:false})
        }
        showModaledit = (index) =>{
            
           this.setState({
            requiredItem:index
           })
            this.setState({showedit:true})
        }
        confirmAction = (index) => {
            let projects = this.state.projects;
            //console.log(listdata)
            projects.splice(index, 1)
           // this.props.listdata(this.state.listdata)
            //this.props.showModal(x); 
            this.setState({show:false})
        };
       
    render() { 
        const requiredItem = this.state.requiredItem;
        let modalData = this.state.projects[requiredItem];
        console.log('modalData',modalData);
        
        return ( <React.Fragment>
            <Table>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Project Name</th>
                        <th>Date Created</th>
                        <th>Date Edited</th>
                        <th>Client Name</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {this.state.projects.map((item, index) =>
                      <tr key={index}>
                          <td>{item.number}</td>
                          <td>{item.name}</td>
                          <td>{item.Date}</td>
                          <td>{item.Edited}</td>
                          <td>{item.Author}</td>
                          <td>
                          <Button
                                size={"sm"}
                                variant="success"
                            >
                                <i className="fa fa-eye"></i>
                          </Button>
                            <Button
                                 onClick={  () => {this.showModaledit(index)}}
                                size={"sm"}
                                variant="info"
                                className="ml-2"
                            >
                                <i className="fa fa-pencil"></i>
                            </Button>
                        <Button
                            onClick={  () => {this.showModal(item) }}
                            size={"sm"}
                            variant="danger"
                            className="ml-2"
                        >
                            <i className="fa fa-trash"></i>
                        </Button>
                          </td>
                      </tr>  
                     
                    )} 
                </tbody>
            </Table>
            <div>
           
    

            </div>
            <ModalDelete
                show={this.state.show}
                close={this.handleModalclose}
                onconfirm={this.confirmAction}
                
            /> 
            <ModalEdit
                number={modalData.number}
                name={modalData.name}
                Date={modalData.Date}
                Edited={modalData.Edited}
                Author={modalData.Author}
                showedit={this.state.showedit}
                saveModalDetails={this.saveModalDetails}
                close={this.handleModalclose}
                selectedmember={this.state.selectedMember}    
            />  
        </React.Fragment> );
    }
}
 
export default ProjectsContext;