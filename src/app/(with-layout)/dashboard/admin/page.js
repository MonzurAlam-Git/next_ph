import React from 'react';

export const metadata = {
    title: 'dashboard | admin ',
    description: 'Generated by create next app',
  }

const admin_page = () => {
    console.log("admin_page from PageJS rendered");

    return (
        <div>
            <h1 className="text-teal-400 font-bold">Admin panel</h1>
        </div>
    );
};

export default admin_page;