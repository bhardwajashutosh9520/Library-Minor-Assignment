import React from 'react'
import { Field, reduxForm} from 'redux-form'

class BookForm extends React.Component {
  constructor(props){
    super(props);
    this.save = this.save.bind(this);
    this.state = {
      message: ""
    };
  }
  save(values) {
    this.state.message = "You have Successfully submitted."
    this.props.submitForm(values);
  }
  render() {
    return (
      <div>
        <form onSubmit={this.props.handleSubmit(this.save)}>
          <div>
            <label htmlFor="book_name">Book Name</label>
            <Field
              name="book_name"
              component="input"
              type="text"
              placeholder= "enter the book name"
              required= "required"
            />
          </div>
          <div>
            <label htmlFor="author_name">Author Name</label>
            <Field
              name="author_name"
              component="input"
              type="text"
              placeholder= "enter the author name"
              required= "required"
            />
          </div>
          <div>
            <label htmlFor="qnt">Quantity</label>
            <Field
              name="qnt"
              component="input"
              type="number"
              placeholder="enter the quantity of the book."
              required= "required"
            />
          </div>
          <div>
            <label>Field
             <Field name="field" component="select" required= "required">
               <option />
               <option>Mechanical Engineering.</option>
               <option>Electrical Engineering</option>
               <option>Electronic & Communication Engineering</option>
               <option>Civil Engineering</option>
               <option>Computer Science Engineering</option>
               <option>Chemical Engineering</option>
             </Field></label>
          </div>
          <button type="submit">Submit</button>
        </form>
        <h2> {this.state.message} </h2>
      </div>
    );
  }
}

export default reduxForm({
  form:'form',
})(BookForm)

