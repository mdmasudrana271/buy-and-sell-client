import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Details = () => {

    const data = useLoaderData();
    console.log(data)

    return (
        <div>
            <h3>Hello from details</h3>
        </div>
    );
};

export default Details;