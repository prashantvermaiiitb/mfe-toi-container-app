import React from 'react'
import Header from 'components/header/index.jsx';
import Content from 'components/content/index.jsx';
import Footer from 'components/footer/index.jsx';
import { ToiContainer } from './toi.styled.component';
export const TOI = () => {
    return (
        <ToiContainer>
            <Header />
            <Content />
            <Footer />
        </ToiContainer>
    )
};
