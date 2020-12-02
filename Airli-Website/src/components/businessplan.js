import React from "react";
import OurStory from "./ourstory";
import MissionVision from "./missionvision";
import Values from "./values";
import Strategy from "./strategy";

export default function Businessplan() {
    return (
        <div id='other'>
            <div className='container'>
                <h3>Business Plan</h3>
                <p>
                    The primary business for Airli is those suffering a Chronic
                    Respiratory Condition, like asthma data state level.
                    Currently, there is 11.2% of the Australian population
                    suffering from this chronic condition, with the New South
                    Wales’ proportion approximated at 10.7% (Statistics n.d).
                    With a growing population, there is a steady increase in
                    observed Australians with asthma. Upon launch, airli’s
                    software application (app), will provide consumers with
                    analyzed pollen count data that can be accurately forecasted
                    for up to 1 week.
                </p>
                <p>
                    Currently, airli is among an emerging industry of vast
                    competitors that have huge potential for market growth. This
                    growth will reflect on how well airli adapt to their current
                    digital service offerings, to which they can benefit from
                    learning from other technological and health services, and
                    of course the consumer’s acceptance of these products into
                    their everyday lives. The greatest direct national
                    competitor airli faces in the industry is the Government
                    owned organization, Aus pollen.
                </p>
                <p>
                    With respect to the budget of $50 000, strategies are to be
                    determined for the critical issues: lack of funding, lack of
                    cohesion in marketing communications and product strategy
                    and industry awareness. Using the 7 P’s of marketing in a
                    unique perspective, can give airli a competitive advantage.
                    Starting with phase 1, options for sources of funds include
                    venture capital, government grants and equity crowd funding.
                    Phase 2 involves post launch and prelaunch of the
                    application, and strategies to match. Prelaunch strategies
                    include, establishing a cohesive social media presence,
                    including rebranding of the logo, website, Google My
                    Business profile, Google Ad Words and Facebook profile. Post
                    launch strategies will involve relevant tradeshows and
                    conferences, as well as the continuation of social media
                    throughout the operation of Airli.
                </p>
                <p>
                    Within the 12 months, provision of funding should be
                    available to commence the marketing plan. Securing the
                    capital will have a significant impact on your ability to
                    execute this plan and to make key improvements in areas such
                    as web development, your actualized service and social media
                    engagement. Post Phase 1, it is recommended that airli
                    secure a sizeable customer database to explore potential B2B
                    revenue streams as part of a 3 year plan.
                </p>
            </div>
            <div className='container div-down'></div>
            <OurStory />
            <div className='container div-up'></div>
            <MissionVision />
            <div className='container div-down'></div>
            <Values />
            <div className='container div-up'></div>
            <Strategy />
            <div className='container div-down'></div>
        </div>
    );
}
