import React, { Component } from 'react';
import { connect } from 'react-redux';
import { googleLogin, twitterLogin } from '../actions/userAction';

class Login extends Component {
    render() {
        return (
            <div>
                <div className="continer-fluid">
                    <div className="row text-center">
                        <div className="col-sm-12 jumbotron" style={{ marginTop: '-20px' }}>
                            <h1>Welcome to <b>A</b>natomy<b>O</b>f<b>C</b>onsensus</h1>
                            <p><i>"The best no fluff education system that teaches you the power of blockchain by using it."</i></p>
                        </div>


                        <div className="col-sm-6">
                            <button className="btn btn-danger btn-lg" onClick={this.props.googleLogin}>Login with Google</button>
                        </div>

                        <br />

                        <div className="col-sm-6">
                            <button className="bt btn-success btn-lg" onClick={this.props.twitterLogin}>Login with Twitter</button>
                        </div>

                    </div>
                </div>

                <div className="container" style={{ marginTop: '20px' }}>

                    <p>ALWASYS A WORK IN PROGRESS: In the meantime login above with google or twitter buttons to jump on the announcment list.</p>
                    <h2>Developer To-Do List:</h2>
                    <p></p>
                    <ul>
                        <li>Put a form here for people to subscribe to the waiting list.</li>
                        <li>Add footer, with links to trello, github</li>
                        <li>Add AOC sales page.</li>
                        <li>Fix up site navigation.</li>
                        <li>Add page for develpers where developers get 20%, referers get 30%, and origional owners (Tom and Sam) get 50%, we can reach consensus on what percentages are fair for different offerings as pepole get inspired and realise they are working with a world class modern self-sovereign winning system.</li>
                        <li>Add page describing road map where the end goal is for this to turn into a Decentralised Automous Organisaton(DAO).</li>
                        <li>Add email-password login functions, so we don't have to rely on google or twitter connect.</li>
                        <li>Add the <a href="https://www.screencast.com/t/Pz6kWPzSM" target="_blank">following draft copy</a> to the AOC product description sales component with a comments box so we can improve this  message, and also begin crafting different flagship approaches.</li>
                        <li>Add section for regulators and government.</li>
                        
                        
                    </ul>
                    <p>PLEASE NOTE: Anatomy of Consensus actively practices <a href="https://en.wikipedia.org/wiki/Radical_transparency" target="_blank">Radical Transparency</a>. If there is something you feel passionate about or can be imporved, join our <a href="https://t.me/joinchat/A9GMWgyW9DDHa8dGWBpcIQ" target="_blank">Telegram group</a>, and the community will guide you to fufilling your immediate purpose.</p>
                </div>

            </div>


        )
    }

}

// connect function takes
export default connect(null, { googleLogin, twitterLogin })(Login);