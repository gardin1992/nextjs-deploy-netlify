import { useState, useEffect } from 'react'
import axios from 'axios'
import cookiesStore from '../../core/helpers/cookie'
import { config } from '../../config'
import { useRouter } from 'next/router'

export function AdminLoginForm() {

    const router = useRouter();

    const [login, setLogin] = useState({
        email: '',
        password: ''
    })

    useEffect(() => {
        console.log('recuperar o usuario e senha q estivar salvo no cookie')
    }, [])

    function requestLogin(e) {
        e.preventDefault()

        axios({
            method: 'post',
            url: 'http://localhost:8800/api/login.admin',
            data: { ...login }
        })
            .then(resp => {
                const { data } = resp
                // cookiesStore.set(config.OPERATOR_KEY, data.user)
                cookiesStore.set(config.SA_TOKEN_KEY, data.access_token)
                router.push('/sa');
            })
            .catch(err => {
                console.log(err)
            })
    }

    return (<>
        <form>
            <div>
                <label>Email</label>
                <input type="text" name="email" placeholder="Digite o seu email."
                    onChange={e => {
                        const email = e.target.value
                        setLogin(prev => ({ ...prev, email }))
                    }} />
            </div>
            <div>
                <label>Password</label>
                <input type="password" name="password"
                    onChange={e => {
                        const password = e.target.value
                        setLogin(prev => ({ ...prev, password }))
                    }}
                />
            </div>

            <button onClick={requestLogin}>Entrar</button>
        </form>
    </>);
}