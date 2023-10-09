import React from 'react';
import './LoginPage.css';
import {Link} from 'react-router-dom' 
export const LoginPage=()=>{
    return(
        <form className='LoginForm'>
            <h1>
                Войти
            </h1>
            <div>
                <input type="text" placeholder="Логин" name="login"/>
            </div>
            <div>
                <input type="password" placeholder="Пароль" name="password"/>
            </div>
            <div>
                <button>
                    Войти
                </button>
            </div>
            </form>
       
    )
}
export default LoginPage;