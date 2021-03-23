import React, { Component } from 'react'

class Form extends Component {
  constructor(props) {
    super(props)
    /* TODO - set initial state for link name and URL */
    this.state = {
      name: '',
      URL: ''
    }
  }

  handleChange = event => {
    /* TODO - Logic for changing state based on form changes */
    if (event.target.id === 'nameInput') {
      this.setState({ name: event.target.value })
    } else {
      this.setState({ URL: event.target.value })
    }
  }

  onFormSubmit = event => {
    // to prevent page reload on form submit
    event.preventDefault()
    /* TODO - Logic for calling props to handle submission and setting state changes */
    this.props.addLink(this.state)
    this.setState({ name: '', URL: '' })
  }

  render() {
    return (
      <form onSubmit={this.onFormSubmit}>
        {/* TODO - Logic for returning a form element with labels and inputs for link name and URL */}
        <label htmlFor='nameInput'>Name: </label>
        <input
          type='text'
          name='name'
          id='nameInput'
          value={this.state.name}
          onChange={this.handleChange}
        />

        <label htmlFor='urlInput'>URL: </label>
        <input
          type='url'
          name='url'
          id='urlInput'
          value={this.state.URL}
          onChange={this.handleChange}
        />

        <button type='submit'>Submit</button>
      </form>
    )
  }
}

export default Form
