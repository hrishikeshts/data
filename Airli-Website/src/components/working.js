import React from "react";
import video from "../graphics/youtube.png";

export default function Working() {
    return (
        <div class='container'>
            <div class='row flex-container work'>
                <div class='col-11 col-sm-10 col-md-5' id='applink'>
                    <h3 id='work-title'>
                        How Does It
                        <br /> Work?
                    </h3>
                    <p id='work-text'>
                        Airli makes a real difference to the lives of people
                        with allergy and Asthma. Watch how Airli works.
                    </p>
                </div>
                <div class='col-11 col-sm-10 col-md-7'>
                    <div class='video'>
                        <iframe
                            title='How Airli Works'
                            width='560'
                            height='315'
                            src='https://www.youtube.com/embed/NpEaa2P7qZI'
                            frameborder='0'
                            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                            allowfullscreen='allowfullscreen'
                        ></iframe>
                    </div>
                </div>
            </div>
        </div>
    );
}
