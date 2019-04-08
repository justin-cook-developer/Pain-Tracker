import React from 'react';
import { Link } from 'react-router-dom';

class Form extends React.Component {
  constructor (props) {
    super(props)
    this.state = this.props.initialState
  }

  handleGeneralChange = e => {
    const { name, value } = e.target
    this.setState({ [name]: value })
  }

  makeValidDate = date => {
    const [year, month, other] = date.toJSON().split('-')
    const day = other.slice(0, 2)
    return `${year}-${month}-${day}`
  }

  handleDateChange = e => {
    const [year, month, day] = e.target.value.split('-').map(el => parseInt(el))
    const date = new Date(year, month - 1, day)
    this.setState({ date })
  }

  handleSubmit = e => {
    e.preventDefault()
    const state = { ...this.state }
    this.props.onSubmit(state)
  }

  render() {
    const { date, title, painLevel, notes } = this.state
    const dateValue = this.makeValidDate(date)

    return (
      <form>
        <div className='field'>
          <label htmlFor='title' className='label'>Title</label>
          <div className='control'>
            <input className='input is-rounded' type='text' name='title' onChange={this.handleGeneralChange} value={title} />
          </div>
        </div>

        <div className='field'>
          <label htmlFor='date' className='label'>Date</label>
          <div className='control'>
            <input className='input is-rounded' type='date' name='date' onChange={this.handleDateChange} value={dateValue} />
          </div>
        </div>
        <div className='field'>
          <label htmlFor='painLevel' className='label'>Pain Level (0-10)</label>
          <div className='control'>
            <input className='input is-rounded' min='0' max='10' type='number' name='painLevel' onChange={this.handleGeneralChange} value={painLevel} />
          </div>
        </div>
        <div className='field'>
          <label className='label' htmlFor='notes'>How did today go?</label>
          <div className='control'>
            <textarea className='textarea' name='notes' value={notes} onChange={this.handleGeneralChange} />
          </div>
        </div>
        <div className="field is-grouped">
          <div className="control">
            <button className="button is-success" onClick={this.handleSubmit}>Submit</button>
          </div>
          <div className="control">
            <Link className="button is-text" to={this.props.cancelDestination}>Cancel</Link>
          </div>
        </div>
      </form>
    );
  }
}

Form.defaultProps = {
  initialState: {
    date: new Date(),
    title: '',
    painLevel: 0,
    notes: '',
  },
 }

export default Form
