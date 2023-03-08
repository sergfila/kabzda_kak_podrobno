import React from 'react';
import './App.css';
import Accordion from "./components/Accordion/Accordion";
import Rating from "./components/Rating/Rating";

function App() {
    console.log("App rendering")
    return (
        <div className="App">
            <PageTitle title={'Home Page'}/>
            <PageTitle title={'Contacts Page'}/>
            <Rating value={1}/>
            <Accordion title={'Menu'} collapsed={true}/>
            <Rating value={4}/>
            <Accordion title={'Users'} collapsed={false}/>
        </div>

    );
}

// Application Title

type PageTitlePropsType = {
    title: string
}

function PageTitle(props: PageTitlePropsType) {
    console.log("AppTitle rendering")
    return <h1>{props.title}</h1>
}

export default App;