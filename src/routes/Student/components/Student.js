import React from 'react'
import { Field, reduxForm} from 'redux-form'

class StudentForm extends React.Component {
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
            <label htmlFor="s_name">Student Name</label>
            <Field
              name="s_name"
              component="input"
              type="text"
              placeholder= "enter the student name"
              required= "required"
            />
          </div>
          <div>
            <label htmlFor="author_name">E-mail</label>
            <Field
              name="email"
              component="input"
              type="email"
              placeholder= "eg: xyz123@gmail.com"
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
          <div>
            <label htmlFor="m_num">Mobile Number</label>
            <Field
              name="m_num"
              component="input"
              type="number"
              placeholder="enter the mobile number"
              required= "required"
            />
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
})(StudentForm)

