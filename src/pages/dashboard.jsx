import React, { Component } from 'react';
import { Container, Row, Col, Button, Card, Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from './images/custom-logo.png';
import Header from '../containers/header/header';
import ModalEdit from '../components/modalEdit/modalEdit'
import './dashboard.scss';

import ProjectsContext from '../context/projectsContext'
class Dashboard extends Component {

    
    state = { 
        show: false,
        
       
     }
   

    render() { 
        
        return ( <React.Fragment>
            <Header/>
            <main className="main">
                <ProjectsContext />
            </main>
         
           
        </React.Fragment> );
    }
}
 
export default Dashboard;