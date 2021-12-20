import React, {useContext, useState} from 'react';
import {AppContext} from "../App";
import '../PageStyles/Login.scss'
import {getUsers} from "../api";


const Login = () => {
    const {setIsAuth} = useContext(AppContext)
    const [login, setLogin] = useState('')
    const [password, setPassword] = useState('')


    async function handleLogin(e) {
        e.preventDefault()
        const users = await getUsers()

        const isUser = users.find((item) => item.login === login)
        if (!isUser) {
            return alert('no such user!')
        }
        if (isUser.password !== password) {
            return alert('error password!')
        }
        setIsAuth(true)
        console.log("handleLogin", isUser)
    }

    return (
        <div className="login">
            <h1 className="login__title">Login</h1>
            <form onSubmit={handleLogin}>
                <input className="login__input" type="text"
                       placeholder="login"
                       value={login}
                       onChange={(e) => setLogin(e.target.value)}
                />
                <input className="login__input" type="text"
                       placeholder="password"
                       value={password}
                       onChange={(e) => setPassword(e.target.value)}
                />
                <button className="login__button" type="submit">Enter</button>
            </form>
        </div>
    );
};

export default Login;
