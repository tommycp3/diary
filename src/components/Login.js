import React, { Component } from 'react';
import { connect } from 'react-redux';
import { googleLogin, twitterLogin } from '../actions/userAction';

class Login extends Component {
    render() {
        return (
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
        )
    }

}

// connect function takes 
export default connect(null, { googleLogin, twitterLogin })(Login);