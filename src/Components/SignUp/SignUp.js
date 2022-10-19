import React from 'react';
import { Link } from 'react-router-dom';
import './SignUp.css'

const SignUP = () => {
    return (
        <div className='form-container'>
            <h2 className='form-title'>Sign Up</h2>
            <form>
                <div className="form-control">
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" required />
                </div>

                <div className="form-control">
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" required />
                </div>
                <div className="form-control">
                    <label htmlFor="confirm">Confirm Password</label>
                    <input type="password" name="confirm" required />
                </div>
                <input className='btn-submit' type="submit" value="Login" />
            </form>
            <p>Already Hava an Account? <br /> Please <Link to="/login">Log In</Link></p>
        </div>
    );
};

export default SignUP;