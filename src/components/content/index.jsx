import React from 'react';
import { ContentColumnContainer, ContentContainer, SliderContainer } from './content.styled.component.jsx';

const CityBasedContent = React.lazy(() => import('Home/home'));

const DefaultContent = () => {
    return (
        <ContentContainer>
            <ContentColumnContainer>
                <div>Column:1 content</div>
                <div>Column:2 content</div>
                <div>Column:3 content</div>
            </ContentColumnContainer>
            <SliderContainer>Sliders : This will be served from Slider App component.</SliderContainer>
        </ContentContainer>
    );
}

const Content = () => {
    return (
        <React.Suspense fallback={<DefaultContent />}>
            {<CityBasedContent /> || <DefaultContent />}
        </React.Suspense>
    );
};

export default Content;