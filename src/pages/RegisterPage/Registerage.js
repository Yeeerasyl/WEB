import React from 'react';
import './RegisterPage.css';

export const RegisterPage = () => {
    return (
        <form className='LoginForm'>
            <h1>
                Регистрация
            </h1>
            <div>
                <input type="text" placeholder="Имя" name="name" />
            </div>
            <div>
                <input type="text" placeholder="Логин" name="login" />
            </div>
            <div>
                <input type="password" placeholder="Пароль" name="password" />
            </div>
            <div>
                <button>
                    Зарегистрироваться
                </button>
            </div>
        </form>
    )
}

export default RegisterPage;
