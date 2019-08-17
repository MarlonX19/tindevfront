import React, { useState } from 'react';
import './Login.css';
import api from '../services/api';

import logo from '../assets/logo.svg';

export default function Login({ history }) {
    const [username, setUsername] = useState('');

    async function handleSubmit(e) {
        e.preventDefault();
        const response = await api.post('/dev', {
            username,
        });

        console.log(response);

        const { _id } = response.data;

        history.push(`/dev/${_id}`)
    }

    return (
        <div className="login-container">
            <form onSubmit={handleSubmit}>
                <img src={logo} alt="Tindev" />
                <input
                    placeholder="Digite seu usuário do github"
                    value={username}
                    onChange={e => setUsername(e.target.value)}
                />
                <button
                    disabled={username.length > 0 ? false : true}
                    style={{ backgroundColor: username.length > 0 ? '#DF4723' : 'lightgrey' }}
                    type="submit">Entrar
                </button>
            </form>
        </div>
    );
}