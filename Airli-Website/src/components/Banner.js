import React, { useState } from "react";
import Banner from "../graphics/Child-With-Arms-in-the-Air.jpg";

export default function Home() {
    const [scroll, setScroll] = useState(false);

    const changeBrightness = () => {
        if (window.scrollY >= window.innerWidth / 15 - 20) setScroll(true);
        else setScroll(false);
    };

    window.addEventListener("scroll", changeBrightness);

    return (
        <div id='banner'>
            <img
                src={Banner}
                alt='Airli'
                className={scroll ? `banner-scroll` : `banner`}
                draggable='false'
            />
            <div className={scroll ? `text-scroll` : `text`}>
                Creating Better Quality of Life for Asthma sufferers. <br />
                Everyday. Everywhere. Everyone.
            </div>
        </div>
    );
}
