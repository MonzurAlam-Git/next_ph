import React from 'react';
export const metadata = {
    title: 'Create Next App',
    description: 'Generated by create next app',
  }

const About_layout = ({children}) => {  
    console.log("About from layout Page rendered");
  
    return (
        <div>
            <h2>about layout</h2>
            {children}
        </div>
    );
};

export default About_layout;