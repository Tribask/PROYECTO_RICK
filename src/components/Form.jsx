import styles from './Form.module.css'
import React from 'react';
import {validation} from './validation' ;

export default function Form(props){
    const [userData, setUserData] = React.useState({
        username: '',
        password: ''
    });

    const [errors, setErrors] = React.useState({
        username: '',
        password: ''
    })

    function handleInputChange(e){
        setUserData({...userData, [e.target.name]:e.target.value});
        setErrors(validation({...userData, [e.target.name]:e.target.value }));
    };

    function handleSubmit(e){
        e.preventDefault();
        if (Object.keys(errors).length) alert ('Rellena correctamente los campos');
        else{
            props.login(userData);       
        };


    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div >
                    <label className={styles.user}>Username:</label>
                    <input onChange={handleInputChange} type='text' placeholder="ejemplo@gmail.com" name="username" value={userData.username} className={styles.iname} />
                    <p className={styles.error}>{errors.username}</p>
                </div>
                <div>
                    <label className={styles.user}>Password:</label>
                    <input onChange={handleInputChange} value={userData.password} type='password' placeholder="1password" name='password' className={styles.iname} />
                    <p className={styles.error}>{errors.password}</p>
                </div>
                <button type='submit'> LOGIN </button>
            </form>
        </div>
        )
}