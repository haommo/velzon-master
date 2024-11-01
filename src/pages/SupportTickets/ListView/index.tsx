import React from 'react';
import { Container, Row } from 'reactstrap';
import BreadCrumb from '../../../Components/Common/BreadCrumb';
import AddressData from './AddressData';

const ListView = () => {
    document.title="Address Books | Velzon - React Admin & Dashboard Template";
    return (
        <React.Fragment>
            <div className="page-content">
                <Container fluid>                    
                    <BreadCrumb title="Address List" pageTitle="Address" />
                    <AddressData />
                </Container>
            </div>
        </React.Fragment>
    );
};

export default ListView;