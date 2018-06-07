import React, { Component } from 'react';
import "./Forum.css";
import gameDisplay from '../gameDisplay/GameDisplay'
import Checkout from '../checkout/Checkout';
import axios from 'axios';

class Forum extends Component {
    constructor() {
        super();

        this.state = {
            user_input: '',
            amount: 0

        }

        this.handleUserInput = this.handleUserInput.bind(this);
        this.getNewComment = this.getNewComment.bind(this);

    }

    handleDonation(e) {
        this.setState({ amount: e })
    }

    handleUserInput(e) {
        e.preventDefault()
        this.setState({ user_input: e.target.value })
    }

    getNewComment(game_id) {
        axios.post('/api/add_post', { 'userInput': this.state.user_input, 'gameId': game_id })
            .then(response => {
                console.log(response)
            })
    }





    render() {
        return (
            <div className="wholeForumPage">
                <link href="https://fonts.googleapis.com/css?family=Squada+One" rel="stylesheet" />
                <h1 className="fortnite-title">FORTNITE</h1>
                <img className="fortnite-image" src="http://steam.cryotank.net/wp-content/gallery/fortnite/Fortnite-06-HD-textless.png"
                    alt="Fortnite-06-HD-textless.png" />
                <p className="Fortnite-bio">Fortnite is a co-op sandbox survival game developed by "Epic Games" and "People Can Fly"
                    and published by Epic Games. The game was released as a paid-for early access title for
                    Microsoft Windows, macOS, Playstation 4 and Xbox One on July 25th, 2017, with a full
                    free-to-play release expected in 2018. The retail versions of the game were published
                    by Gearbox Publishing, while online distribution of the PC versions is handled by
                    Epic's launcher.
              </p>
                <button className="purchase-button">Purchase Product Here</button>
                <div className="review-box">
                    <input className="fortnite-box" value={this.state.user_input} placeholder="Comment/Review here"
                        onChange={(e) => this.handleUserInput(e)} />
                    <button className="submit-post" onClick={() => this.getNewComment('fortnite')}>Submit Post</button>
                </div>
                <div>
                    <h1 className="tournament-title">UNREAL TOURNAMENT</h1>
                    <img className="unreal-samael" src="https://cdn2.unrealengine.com/UnrealTournament/RootImages/Character_Samael01a-937x900-1131282575-937x900-1585229315.png"
                        alt="UTSamael.png" />
                    <p className="unreal-tournament-bio">
                        Unreal Tournament is a first-person shooter video game developed by Epic Games and Digital Extremes. The second installment
                        in the Unreal series, it was first published by GT Interactive in 1999 for Microsoft Windows, and later released on the
                        PlayStation 2 and Dreamcast by Infogrames in 2000 and 2001, respectively. Players compete in a series of matches of various
                        types, with the general aim of out-killing opponents. The PC version supports multiplayer online or over a local area network.
                        Free expansion packs were released, some of which were bundled with a 2000 re-release: Unreal Tournament: Game of the Year
                        Edition.
                </p>
                    <button className="purchase-button">Purchase Product Here</button>
                    <div className="review-box">
                        <input className="fortnite-box" value={this.state.user_input} placeholder="Comment/Review here"
                            onChange={(e) => this.handleUserInput(e)} />
                        <button className="submit-post" onClick={() => this.getNewComment('unreal_tournament')}>Submit Post</button>
                    </div>
                </div>
                <div>
                    <h1 className="robo-recall-title">ROBO RECALL</h1>
                    <img className="robo-recall-image" src="https://cdn2.unrealengine.com/ueOverview%2FtabletImages%2Fbots-min-1200x675-33f6ba52b54f1008121629f4b6f8df47f463bea6.jpg" alt="" />
                    <p className="robo-recall-bio">
                        Robo Recall is a virtual reality first-person shooter game developed and published by Epic Games for Microsoft Windows. The game
                        uses the Oculus Rift virtual reality headset, and was released on March 1, 2017. Players that activate their Oculus Touch
                        virtual reality controllers with its software are able to download the game for free.
                    </p>
                    <button className="purchase-button" onClick={() => this.getNewComment('robo_recall')}>Purchase Product Here</button>
                    <div className="review-box">
                        <input className="fortnite-box" value={this.state.user_input} placeholder="Comment/Review here"
                            onChange={(e) => this.handleUserInput(e)} />
                        <button className="submit-post">Submit Post</button>
                    </div>
                </div>
                <div>
                    <h1 className="shadow-complex-title">SHADOW COMPLEX</h1>
                    <img className="shadow-complex-image" src="https://cdn2.unrealengine.com/Viper/news_bg-805x973-490698590.png"
                        alt="shadow-complex.png" />
                    <p className="shadow-complex-bio">
                        Shadow Complex is a platform-adventure video game developed by Chair Entertainment in association with Epic Games
                        and published by Microsoft Game Studios for the Xbox 360 through Xbox Live Arcade. The game was released worldwide
                        on August 19, 2009.
                        The original script of Shadow Complex was written by Peter David. The game follows Jason Flemming and his new
                        girlfriend Claire, who opts to explore some caverns the two stumble across. When she does not respond to his calls,
                        Jason follows her. He finds a massive underground complex with soldiers and high-end technology. Jason must rescue
                        Claire and discover the plot behind the faction operating the complex.
                    </p>
                    <button className="purchase-button">Purchase Product Here</button>
                    <div className="review-box">
                        <input className="fortnite-box" value={this.state.user_input} placeholder="Comment/Review here"
                            onChange={(e) => this.handleUserInput(e)} />
                        <button className="submit-post" onClick={() => this.getNewComment('shadow_complex')}>Submit Post</button>
                    </div>
                </div>
                <div>
                    <h1 className="infinity-blade-title">INFINITY BLADE</h1>
                    <img className="infinity-blade-image" src="https://i.pinimg.com/originals/64/bc/00/64bc00c1b9ecc8b16cd1e2f18b3609e2.jpg"
                        alt="infinity-blade.jpg" />
                    <p className="infinity-blade-bio">
                        Infinity Blade is a fighting game with role-playing elements developed by Chair Entertainment and Epic Games and released
                        through the Apple App Store on December 9, 2010. It is the first iOS video game to run on the Unreal Engine. In the game,
                        the unnamed player character fights a series of one-on-one battles in a derelict castle to face the immortal God King.
                        When in battle, players swipe the screen to attack and parry, and tap the screen to dodge and block enemy attacks.
                        Upon victory or defeat, the player restarts the game as the character's descendant with the same items and experience level.
                    </p>
                    <button className="purchase-button">Purchase Product Here</button>
                    <div className="review-box">
                        <input className="fortnite-box" value={this.state.user_input} placeholder="Comment/Review here"
                            onChange={(e) => this.handleUserInput(e)} />
                        <button className="submit-post" onClick={() => this.getNewComment('infinity_blade')}>Submit Post</button>
                    </div>
                </div>
                <div>
                    <input onChange={e => this.handleDonation(e)} />
                    <Checkout
                        amount={+this.state.amount * 100} />
                </div>
            </div>
        )
    }
}

export default Forum;