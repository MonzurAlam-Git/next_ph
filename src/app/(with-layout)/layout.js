import React from 'react';
import Navbar from '../components/navbar';
import Footer from '../components/Footer';

const group_layout = ({children}) => {
    return (
        <div>          
            {/* navbar raw  */}
            <Navbar></Navbar>
            {/* children element */}
            {children}
            {/* footer  */}
            <Footer></Footer>
        </div>
    );
};

export default group_layout;