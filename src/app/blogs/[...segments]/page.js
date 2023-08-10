import React from 'react';

const blogs_page = ({params}) => {
    const [year,id] = params.segments || [];
    return (
        <div>
            <h1>{year || new Date().getFullYear()} rendered dynamically from user {id}</h1>
        </div>
    );
};

export default blogs_page;
