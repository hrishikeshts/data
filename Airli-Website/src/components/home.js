import React from "react";
import Ourteam from "./ourteam";
import Banner from "./Banner";
import Amp from "./amp";
import Working from "./working";
import DownloadApp from "./DownloadApp";

export default function Home() {
    return (
        <div>
            <Banner />
            <div className='container div-down align-top'></div>
            <Amp />
            <div className='container div-up'></div>
            <Working />
            <div className='container div-down'></div>
            <Ourteam />
            <div className='container div-up'></div>
            <DownloadApp />
            <div className='container div-down align-top'></div>
        </div>
    );
}
