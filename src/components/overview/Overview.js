import React from 'react';
import './Overview.css';
import Slider from 'react-slick';



class Overview extends React.Component {
    constructor() {
        super();

        this.state = {
            showTextUnderCarousel: false
        }


    }
    render() {

        var settingsForCarouselOne = {
            autoplay: true,
            autoplaySpeed: 3000,
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1
        }

        var settingsForCarouselTwo = {
            autoplay: true,
            autoplaySpeed: 10000,
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1
        }

        var settingsForCarouselThree = {
            autoplay: true,
            autoplaySpeed: 10000,
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1
        }


        return (
            <div className="whole-page">
                <link href="https://fonts.googleapis.com/css?family=Montserrat" rel="stylesheet" />
                <div className="top-slider">
                    <h1>Make Something Unreal</h1>
                    <h2>with the most powerful creation engine</h2>
                    <div className="get-started-button-parent">
                        <button className="get-started-button">Get Started Now</button>
                    </div>
                </div>

                <Slider {...settingsForCarouselOne}>

                    <div className="carousel-1">
                    </div>
                    <div className="carousel-2">
                    </div>
                    <div className="carousel-3">
                    </div>
                    <div className="carousel-4">
                    </div>
                </Slider>
                <Slider {...settingsForCarouselTwo}>
                    <div>
                        <div className="batman-1" ></div>
                        <div className="text-below-batman">
                            <h2>Uncompromised Quality, Proven Results</h2>
                            <p>Unreal Engine is a complete suite of tools designed too meet ambitious
                                artistic visions while being flexible enough to ensure success for teams
                                of all sizes. As an established, industry-leading engine, Unreal delivers
                                powerful, proven performance that you can trust.
                    </p>
                        </div>
                    </div>
                    <div>
                        <div className="astroneer-2" ></div>
                        <div className="text-below-astroneer">
                            <h2>Any Project, Any Size</h2>
                            <p>Break free from barriers with tools and workflows that put you in control.
                               Whether your team is made up of five or 500 developers, Unreal’s pre-built,
                               modular systems, customizable plugins and source control integration empower
                           you to meet each project’s unique needs.</p>
                        </div>
                    </div>
                    <div>
                        <div className="Abzu-1" ></div>
                        <div className="text-below-abzu">
                            <h2>A Community Committed to Quality</h2>
                            <p>The highest caliber of professionals continually choose Unreal to push the
                               limits of visual experiences. Whether you’re an aspiring developer or
                               seasoned veteran, you’re joining a community with a shared passion for
                           creation and a commitment to achieving excellence.</p>
                        </div>
                    </div>
                    <div>
                        <div className="paragon-1"></div>
                        <div className="text-below-paragon">
                            <h2>Made by Developers, For Developers</h2>
                            <p>At Epic, we use the engine ourselves to craft award-winning content resulting
                               in powerful tools and pipelines that enable you to achieve your goals. Over the
                               course of two decades, Unreal has become the most trusted, reliable engine in
                           the world.</p>
                        </div>
                    </div>
                </Slider>
                <Slider {...settingsForCarouselThree}>
                    <div>
                        <div className="carousel3-slide1"></div>
                        <div className="text-below-car3-slide1">
                            <h2>Everything Is Included to Build and Ship</h2>
                            <p>The Unreal Engine is a full product suite that comes production ready out of
                               the box without the need for additional plugins or purchases.</p>
                        </div>
                    </div>
                    <div>
                        <div className="carousel3-slide2"></div>
                        <div className="text-below-car3-slide2">
                            <h2>Blueprints: Create Without Coding</h2>
                            <p>With Blueprints, you can rapidly prototype and ship playable interactive
                               content without touching a line of code.</p>
                            <h2>Full C++ Source Code Included</h2>
                            <p>With complete C++ source code, you can study, customize and debug the
                               entire engine, and ship your project without obstruction.</p>
                        </div>
                    </div>
                    <div>
                        <div className="carousel3-slide3"></div>
                        <div className="text-below-car3-slide3">
                            <h2>Sequencer: Professional Cinematics</h2>
                            <p>Designed by film and TV professionals, Sequencer unlocks your creative
                               potential with a fully non-linear, real-time cinematics and animation tool.
                               Powerful features include dynamic cutscene variations, cinematic cameras
                               and live gameplay recording.</p>
                        </div>
                    </div>
                    <div>
                        <div className="carousel3-slide4"></div>
                        <div className="text-below-car3-slide4">
                            <h2>Photoreal Rendering in Real-Time</h2>
                            <p>Achieve Hollywood-quality visuals out of the box. Features such as Physically
                               Based Rendering, Advanced Dynamic Shadow Options, Screenspace Reflections and
                               Lighting Channels equip you with the flexibility and efficiency to create
                               awe-inspiring content.</p>
                            <h2>VFX Quality Particle Systems</h2>
                            <p>Completely customize particle systems using a wide variety of modules,
                               leverage particle lights to impact your scene and build complex particle
                               motion with vector fields to mimic reality and create professional levels
                               of polish.</p>
                        </div>
                    </div>
                    <div>
                        <div className="carousel3-slide5"></div>
                        <div className="text-below-car3-slide5">
                            <h2>Lifelike Animation</h2>
                            <p>Completely customize your characters with Unreal’s Mesh and Animation editor
                               tools, including powerful features like State Machines, Blend Spaces,
                               Inverse Kinematics and Animation-Driven Physics. Use visual Animation
                               Blueprints to work efficiently and preview your animations on the fly as you
                               craft truly dynamic characters that bring your project to life.</p>
                        </div>
                    </div>
                    <div>
                        <div className="carousel3-slide6"></div>
                        <div className="text-below-car3-slide5">
                            <h2>Templates & Learning Resources</h2>
                            <p>Kickstart your work with free project templates and rich learning resources.
                               Instantly access content across a variety of visual styles and genres while
                               engaging with the engine and exploring entire worlds of content.</p>
                        </div>
                    </div>
                    <div>
                        <div className="carousel3-slide7"></div>
                        <div className="text-below-car3-slide7">
                            <h2>Asset Marketplace</h2>
                            <p> The ever-expanding Unreal Engine Marketplace has thousands of high-quality
                                assets to start or accelerate your project including Blueprints, plugins,
                                effects, textures, animations, meshes, audio, and project starter kits.
                                Or, create your own content and sell directly to others. </p>
                        </div>
                    </div>
                </Slider>
                <div>
                    <div className="car-photo"></div>
                    <div className="text-below-car-photo">
                        <h2>Real-time Design</h2>
                        <p>Create high-quality, photo-realistic renders and immersive AR and VR experiences
                            for architecture, product design and manufacturing.
                        </p>
                        <button className="find-out-more">FIND OUT MORE</button>
                    </div>
                </div>
                <div>
                    <div className="platform-support-photo"></div>
                    <div className="text-below-support-photo">
                        <h2>Deep support for the platforms that matter</h2>
                        <p>At Epic, we prove our technology by regularly shipping games and demos ourselves
                            so you can count on getting the most out of the world's leading platforms.
                        </p>
                    </div>
                </div>
                <div>
                    <div className="section-of-logos">
                        <div className="logo-row-1">
                            {/* Ps4-logo */}
                            <img className="ps4-logo" src="https://cdn2.unrealengine.com/ueOverview%2Fplatforms%2Fnew%2FSony-PS4-137x128-82b64d4f8b400c07aa356e34800dc8b15367f9d7.png" alt=""/>
                            {/* Xbox-one-logo */}
                            <img className="xbox-one-logo" src="https://cdn2.unrealengine.com/ueOverview%2Fplatforms%2Fnew%2FxboxOne-152x128-ffb83a849281837297be45ef02581b07e7928d61.png" alt=""/>
                            {/* nintendo-switch-logo */}
                            <img className="nintendo-switch-logo" src="https://cdn2.unrealengine.com/ueOverview%2Fplatforms%2Fnew%2FNintendo-71x128-53610da53ffdf8b6d71bb90cd858908e7926f858.png" alt=""/>
                        </div>
                        <div className="logo-row-2">
                            {/* apple-logo */}
                            <img src="https://cdn2.unrealengine.com/ueOverview%2Fplatforms%2Fnew%2Fapple_v3-58x128-b05f08e59963c0eeaedd6795e0577546f0c85ef7.png" alt=""/>
                            {/* microsoft-logo */}
                            <img src="https://cdn2.unrealengine.com/ueOverview%2Fplatforms%2Fnew%2Fmicrosoft-39x128-34540529e3d731304b7a70fbc4f66097d0adef21.png" alt=""/>
                            {/* steam-logo */}
                            <img src="https://cdn2.unrealengine.com/ueOverview%2Fplatforms%2Fnew%2Fsteam-40x128-a2492383c2f288cd93544aa931fad205dcbaab6a.png" alt=""/>
                            {/* penguin-logo */}
                            <img src="https://cdn2.unrealengine.com/ueOverview%2Fplatforms%2Fnew%2Flinux-36x128-1f65c9a7b047be5031c57777f411de974e5e8367.png" alt=""/>
                            {/* html5-logo */}
                            <img src="https://cdn2.unrealengine.com/ueOverview%2Fplatforms%2Fnew%2Fhtml5-43x128-aa839f36b33a251c633a8fe1d54e34cbf2e09fc4.png" alt=""/>
                            {/* iOS-logo */}
                            <img src="https://cdn2.unrealengine.com/ueOverview%2Fplatforms%2Fnew%2Fios-53x128-a90c18b8d8bb252aa6f368bec8cf71faf9a1af25.png" alt=""/>
                        </div>
                        <div className="logo-row-3">
                            {/* android-logo */}
                            <img src="https://cdn2.unrealengine.com/ueOverview%2Fplatforms%2Fnew%2Fandroid_v3-38x128-54eb611b5ab5e03aecba4c29a4c0571f79e41ec8.png" alt=""/>
                            {/* playstation-VR */}
                            <img className="playstation-VR" src="https://cdn2.unrealengine.com/ueOverview%2Fplatforms%2Fnew%2FplaystationVR-192x128-2c2d95156bbdab441bd4bd1c9dbeb3011cfc71ce.png" alt=""/>
                            {/* oculus-logo */}
                            <img src="https://cdn2.unrealengine.com/ueOverview%2Fplatforms%2Fnew%2Foculus_v3-62x128-8a45dc0a72b0d7dabf0feffdea388c94768bc657.png" alt=""/>
                            {/* samsungVR-logo */}
                            <img src="https://cdn2.unrealengine.com/ueOverview%2Fplatforms%2Fnew%2FsamsungGear-122x128-1b4c39b47cbd7ef920b7bb80d0c9e706443abec6.png" alt=""/>
                        </div>
                        <div className="logo-row-4">
                            {/* vive-logo */}
                            <img src="https://cdn2.unrealengine.com/ueOverview%2Fplatforms%2Fnew%2Fviveport-121x128-b809d989a61fe179c4211b09b59866d4def4856d.png" alt=""/>
                            {/* daydream-logo */}
                            <img src="https://cdn2.unrealengine.com/ueOverview%2Fplatforms%2Fnew%2Fdaydream-151x129-60e46340e2d415e98feaab17a13af53ba7b2992c.png" alt=""/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Overview;
