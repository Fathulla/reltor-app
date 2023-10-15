import React from 'react';
import './ErrorPage.css'
import { Link } from 'react-router-dom';

export const ErrorPage = () => {
    return (
        <div>
            <h1>CHTO SKAZAL GAGRIN KOGDA UVIDEL ZEMLYU?</h1>
            <h1>ZEMLYA KRUGLAYA</h1>
            <h1>KAK POYMAYU SRAZU EJEEEEEE</h1>
            <Link to={'./main'}><button>go main</button></Link>
        </div>
    );
};

