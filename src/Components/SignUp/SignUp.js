import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Contexts/UserContext';
import './SignUp.css'

const SignUP = () => {
    const {createUser} = useContext(AuthContext)
    const [error, setError] = useState(null);

    const handleSubmit = event => {

        event.preventDefault();

        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        const confirm = form.confirm.value;

        if(password !== confirm){
            setError('Password did not match')
        }

        createUser(email, password)
       .then(result => {
        const user = result.user;
        console.log(user);
        form.reset()
       })
       .catch(error => {
        console.error(error)
       })
    }


    return (
        <div className='form-container'>
            <h2 className='form-title'>Sign Up</h2>
            <form onSubmit={handleSubmit}>
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
                <input className='btn-submit' type="submit" value="Sign Up" />
            </form>
            <p>Already Hava an Account? <br /> Please <Link to="/login">Log In</Link></p>
            <p className='error-msg'><small>{error}</small></p>
        </div>
    );
};

export default SignUP;