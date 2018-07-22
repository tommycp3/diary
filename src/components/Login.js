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
                    <h2>To-Do List:</h2>
                    <p></p>
                    <ul>
                        <li>Put a form here for people to subscribe to the waiting list.</li>
                        <li>Add footer, with links to trello, github</li>
                        <li>Add AOC sales page.</li>
                        <li>Fix up site navigation.</li>
                        <li>Add page for develpers where developers get 20%, referers get 30%, and origional owners (Tom and Sam) get 50%.</li>
                        <li>Add page describing road map where the end goal is for this to turn into a Decentralised Automous Organisaton.</li>
                        <li>Add email-password login functions, so we don't have to rely on google or twitter connect.</li>
                    </ul>
                </div>
            </div>


        )
    }

}

// connect function takes
export default connect(null, { googleLogin, twitterLogin })(Login);