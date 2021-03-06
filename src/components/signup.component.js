import React, { Component } from "react";
const validEmailRegex = RegExp(/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i);
const validateForm = (errors) => {
    let valid = true;
    Object.values(errors).forEach(
      (val) => val.length > 0 && (valid = false)
    );
    return valid;
}
export default class SignUp extends Component {
    constructor(props) {
        super(props);
        this.state = {
          firstName: null,
          lastName: null,
          email: null,
          password: null,
          errors: {
            firstName: '',
            lastName: '',
            email: '',
            password: '',
          }
        };
    }
    handleChange = (event) => {
        event.preventDefault();
        const { name, value } = event.target;
        let errors = this.state.errors;
        switch(name) {
          case 'firstName':
            errors.firstName = value.length < 5 ? 'First Name must be 5 characters long!' : '';
            break;
        case 'lastName':
            errors.lastName = value.length < 5 ? 'Last Name must be 5 characters long!' : '';
            break;
          case 'email':
            errors.email = validEmailRegex.test(value) ? '' : 'Email is not valid!';
            break;
          case 'password':
            errors.password = value.length < 8 ? 'Password must be characters long!' : '';
            break;
          default:
            break;
        }
        this.setState({errors, [name]: value}, ()=>{
          console.log(errors)
        })
    }
    handleSubmit = (event) => {
        event.preventDefault();
        if(validateForm(this.state.errors)) {
          console.info('Valid Form')
        } else {
          console.error('Invalid Form')
        }
    }
    render() {
        const {errors} = this.state;
        return (
            <form onSubmit={this.handleSubmit} noValidate >
                <h3>Sign Up</h3>

                <div className="form-group">
                    <label htmlFor="firstName">First name</label>
                    <input type="text" className="form-control" name="firstName" onChange={this.handleChange} placeholder="First name" noValidate/>
                    {errors.firstName.length > 0 &&
                    <span className='error'>{errors.firstName}</span>}
                </div>

                <div className="form-group">
                    <label>Last name</label>
                    <input type="text" className="form-control" name="lastName" onChange={this.handleChange} placeholder="Last name" noValidate/>
                    {errors.lastName.length > 0 &&
                    <span className='error'>{errors.lastName}</span>}
                </div>

                <div className="form-group">
                    <label>Email address</label>
                    <input type="email" className="form-control" name="email" onChange={this.handleChange} placeholder="Enter email" noValidate/>
                    {errors.email.length > 0 && 
                    <span className='error'>{errors.email}</span>}
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" name="password" onChange={this.handleChange} placeholder="Enter password" noValidate/>
                    {errors.password.length > 0 && 
                    <span className='error'>{errors.password}</span>}
                </div>
                <div className='info'>
                    <small>Password must be eight characters in length</small>
                </div>

                <button type="submit" className="btn btn-primary btn-block">Sign Up</button>
                <p className="forgot-password text-right">
                    Already registered <a href="#">sign in?</a>
                </p>
            </form>
        );
    }
}