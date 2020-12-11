import React from "react";
import pollen from "../graphics/pollen.png";
import health from "../graphics/health.png";
import inhaler from "../graphics/inhaler.png";
import amp from "../graphics/amp.svg";

export default function Amp() {
    return (
        <div className='container'>
            <div class='row'>
                <div class='col-8 amp'>
                    <h3>
                        Asthma <br></br>Management <br />
                        Platform
                    </h3>
                    <p>
                        Providing real time contextualized location based Air
                        Quality Health Data everyday, everywhere, and for
                        everyone. Satellite data is transmitted to
                        servers/repositories in cloud — the data includes
                        Vegetation Index, Weather, Wind, Rainfall, Climate
                        patterns, Pollution, CO
                        <sub>2</sub> emissions, Celestial body positions,
                        transits and forces, and many more variables, which are
                        more significantly predictive than others. Log symptoms,
                        track medicines usage, live doctor chat and digital
                        asthma community forum.
                    </p>
                </div>
                <div class='col-4 amp'>
                    <img
                        src={amp}
                        alt='Asthma Management Platform'
                        draggable='false'
                    ></img>
                </div>
            </div>
            <div className='container div-down'></div>

            <div>
                <h3>Services</h3>
                <p>
                    Airli makes a real difference to the lives of people with
                    Allergy and Asthma
                </p>

                <div class='row flex-container'>
                    <div className='col-8 col-sm-6 col-md-4'>
                        <article>
                            <img
                                alt='Pollen Alerts'
                                src={pollen}
                                draggable='false'
                                style={{ width: 200 }}
                            />
                            <h4 id='sid'>Pollen Alerts</h4>
                            <div>
                                Alerts user when there are critical pollen level
                                in the air, and predicts levels based on
                                weather, season and live satellite location data
                            </div>
                        </article>
                    </div>
                    <div className='col-8 col-sm-6 col-md-4'>
                        <article>
                            <img
                                alt='Asthma Management'
                                src={inhaler}
                                draggable='false'
                                style={{ width: 200 }}
                            />
                            <h4 id='sid'>Asthma Management</h4>
                            <div>
                                Logs symptoms, tracks medicine usage, provides
                                live doctor chat and digital Asthma community
                                forum
                            </div>
                        </article>
                    </div>
                    <div className='col-8 col-sm-6 col-md-4'>
                        <article>
                            <img
                                alt='Live Health Data'
                                src={health}
                                draggable='false'
                                style={{ width: 200, height: 200 }}
                            />
                            <h4 id='sid'>Live Health Data</h4>
                            <div>
                                Provides location based outdoor air quality
                                health data for BREATHE EASY
                            </div>
                        </article>
                    </div>
                </div>
            </div>
        </div>
    );
}
