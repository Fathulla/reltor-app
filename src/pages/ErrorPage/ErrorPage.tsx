import React from 'react';
import { Link } from 'react-router-dom';
import { AppHeader } from '../../components/AppHeader/AppHeader';
import { SCErrorBtn, SCErrorPage } from './ErrorPage.styled';

export const ErrorPage = () => {
    return (
        <SCErrorPage>
            <AppHeader headerText='Что сказал Гагарин когда увидел землю?' type='h1'/>
            <AppHeader headerText='ЗЕМЛЯ КРУГЛАЯ' type='h1'/>
            <AppHeader headerText='Как поймаю сразу есть жееее' type='h1'/>
            <Link to={'/thanks'}><SCErrorBtn className='btn'>Далее</SCErrorBtn></Link>
        </SCErrorPage>
    );
};

