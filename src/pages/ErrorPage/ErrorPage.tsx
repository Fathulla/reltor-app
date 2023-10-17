import React from 'react';
import './ErrorPage.css'
import { Link } from 'react-router-dom';

export const ErrorPage = () => {
    return (
        <div className='errorPage'>
            <h1>Что сказал Гагарин когда увидел землю?</h1>
            <h1>ЗЕМЛЯ КРУГЛАЯ</h1>
            <h1>Как поймаю сразу есть жееее</h1>
            <Link to={'./main'}><button className='btn'>go main</button></Link>
        </div>
    );
};

