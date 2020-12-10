import React from "react";
import playstore from "../graphics/Google-Play-Store-badge.svg";
import appstore from "../graphics/Download-on-the-App-Store.svg";

const DownloadApp = () => {
    return (
        <div className='container' id='download-container'>
            <div id='download'></div>
            <h3>Download App</h3>
            <section className='flex-container'>
                <article id='applink'>
                    <div id='gap2'></div>
                    <h4 id='applinktext'>Try Airli</h4>
                    <p id='applinkdescription'>
                        For real time contextualised location based air quality
                        health data on Android and iOS.
                    </p>
                    <div id='gap1'></div>
                    <div id='badge'>
                        <a
                            href='https://play.google.com/'
                            alt='Get it on Google Play'
                            target='_blank'
                            rel='noreferrer'
                            draggable='false'
                        >
                            <img
                                alt='Get it on Google Play'
                                src={playstore}
                                draggable='false'
                            />
                        </a>
                    </div>
                    <div id='gap2'></div>
                    <div id='badge'>
                        <a
                            href='https://apps.apple.com/'
                            alt='Download on the App Store'
                            target='_blank'
                            rel='noreferrer'
                            draggable='false'
                        >
                            <img
                                alt='Download on the App Store'
                                src={appstore}
                                draggable='false'
                            />
                        </a>
                    </div>
                    <div id='gap2'></div>
                </article>
                <article id='appimg'>
                    <figure id='phones'></figure>
                </article>
            </section>
        </div>
    );
};

export default DownloadApp;
