import React from 'react';

const dy_doc_page = ({params}) => {
    const [year,id] = params.segments || [];

    return (
        <div>
            <h1 className="text-violate-500">page dynamically rendered in {year} from user no: {id}</h1>
        </div>
    );
};

export default dy_doc_page;