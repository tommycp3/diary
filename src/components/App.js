import React, { Component } from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import { getNotes, saveNote, deleteNote } from '../actions/notesAction';
import NoteCard from './NoteCard';
import { getUser } from '../actions/userAction';
import AOCSalesComponent from './AOCSalesComponent';


class App extends Component {


  constructor(props) {
    super(props);
    // state
    this.state = {
      title: '',
      body: ''
    };
    // bind
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.renderNotes = this.renderNotes.bind(this)

  }


  




  // handle change
  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  // handle submit
  handleSubmit(e) {
    e.preventDefault();
    const note = {
      title: this.state.title,
      body: this.state.body
    }
    this.props.saveNote(note);

    // database.push(note);
    console.log('submit');
    this.setState({
      title: '',
      body: ''
    });
  }



  // render notes
  renderNotes() {
    return _.map(this.props.notes, (note, key) => {
      return (
        <NoteCard key={key}>
          <h1>{note.title}</h1>
          <p>{note.body}</p>
          <button
            className="btn btn-danger btn-xs"
            onClick={() => this.props.deleteNote(key)}>
            Delete
          </button>
        </NoteCard>
      )
    });
  }



  render() {
    return (
      <div>
        <div className="cointainer">

        <AOCSalesComponent />


        </div>

        <br />
        <br />
        <br />


        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-6 col-sm-offset-3">
              <form onSubmit={this.handleSubmit}>
                <div className="form-group">
                  <input
                    onChange={this.handleChange}
                    value={this.state.title}
                    type="text"
                    name="title"
                    className="form-control no-border"
                    placeholder="Title..."
                    required
                  />
                </div>

                <div className="form-group">
                  <textarea
                    onChange={this.handleChange}
                    value={this.state.body}
                    type="text"
                    name="body"
                    className="form-control no-border"
                    placeholder="Body..."
                    required
                  />
                </div>

                <div className="form-group">
                  <button className="btn btn-primary col-sm-12">Save</button>


                </div>


              </form>
              <br />
              <br />
              <br />
              {this.renderNotes()}



            </div>


          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state, ownProps) {
  return {
    notes: state.notes,
    user: state.user
  }

}

export default connect(mapStateToProps, { getNotes, saveNote, deleteNote, getUser })(App);
// https://hackernoon.com/import-export-default-require-commandjs-javascript-nodejs-es6-vs-cheatsheet-different-tutorial-example-5a321738b50f