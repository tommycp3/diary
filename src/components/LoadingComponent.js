import React, { Component } from 'react';
import { connect } from 'react-redux';
// with withRouter you can get access to the history object's property.
import { withRouter } from 'react-router-dom';
import { getUser } from '../actions/userAction';
import { getNotes } from '../actions/notesAction';

class LoadingComponet extends Component {
    componentWillMount() {
        const { userLoading, notesLoading } = this.props;
        // if we haven't tried to load the user, load user
        if (userLoading === undefined) {
            this.props.getUser();
        }

        // if we haven't tried to get notes, load notes
        if (notesLoading === undefined) {
            this.props.getNotes();
        }
    }

    componentWillReceiveProps(nextProps) {
        // wait for user to get authenticated and try to load notes
        // -1 means to firebase, wait for changes and when there is a change,
        // like the user is logged in, then using the && operator check nextProps.user() 
        // is !-- null try to load the notes again with 
        // this.props.getNotes();
        if (nextProps.notesLoading === -1 && nextProps.user !== null) {
            this.props.getNotes();
        }
    }

    render() {
        // is children and not props becusae it's wrapping another componet
        /**
         * throughout the lifecycle of app user and notes loading status will
         * keep toggling between true and false
         * when anything other than that toggling state such as true or false
         * that means the loading operation is settled and not active
         * that time, show the enclosing components
         * for everthing else and inbetween show loading
         */
        const { userLoading, notesLoading, children } = this.props;
        if ((!userLoading && !notesLoading) || this.props.user === null) {
            return <div>{children}</div>;
        }
        else {
            return (
                <div>
                    <h2>Loading...</h2>
                </div>
            );

        }
    }
}

function mapStateToProps(state) {
    return {
        user: state.user,
        userLoading: state.loading.user,
        notesLoading: state.loading.notes
    }

};

export default withRouter(connect(mapStateToProps, { getUser, getNotes })(LoadingComponet));

