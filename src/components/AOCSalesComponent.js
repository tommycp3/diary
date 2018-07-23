import React, { Component } from 'react';
import { connect } from 'react-redux';
import { googleLogin, twitterLogin } from '../actions/userAction';

class AOCSalesComponent extends Component {

    constructor(props) {
        super(props);

        this.state = {

        }


    }
    render() {
        return (
            <div className="continer-fluid">
                <div className="row text-center">
                    <div className="col-sm-12 jumbotron" style={{ marginTop: '-20px' }}>
                        <h1>Weclome to <b>A</b>natomy<b>O</b>f<b>C</b>onsensus</h1>
                        <h1></h1>
                        <p><i>Congratulations you are now logged in, read below to get introduced to this idea of consensus through the eyes of the blockchain. </i></p>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12">
                            <h3>What is Consensus?</h3>
                            <p>Consensus occures when 2 parties agree on a shared state of things.</p>
                            <p>This is a very important process because it's how we can get:</p>
                        </div>


                        <form onSubmit={this.handleSubmit}>
                            <div className="form-group">
                                <input
                                    onChange={this.handleChange}
                                    value=""
                                    type="text"
                                    name="title"
                                    className="form-control no-border"
                                    placeholder="0x..."
                                    required
                                />
                            </div>





                            <div className="form-group">
                                <button className="btn btn-primary col-sm-4 center-block">Execute Smart Contract (Cost = 0.1 ETH)</button>


                            </div>





                        </form>


                    </div>
                </div>
            </div>
        )
    }

}

// connect function takes 
export default connect(null, { googleLogin, twitterLogin })(AOCSalesComponent);