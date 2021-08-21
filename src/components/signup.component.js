import React, { Component } from "react";

export default class SignUp extends Component {
    render() {
        return (
            <form onSubmit={this.handleSubmit} noValidate >
                <h3>Sign Up</h3>

                <div className="form-group">
                    <label>First name</label>
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