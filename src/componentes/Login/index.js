import CampoTexto from '../Texto'
import './Login.css'
import Botao from '../Botao'

const Login = () => {

    const aoSalvar = (evento) => {
        evento.preventDefault()
    }

    return (
    <section className="Login">
        <form onSubmit={aoSalvar}>
            <CampoTexto obrigatorio="true" label="Email"/>
            <CampoTexto obrigatorio="true"label="Senha"/>
            <Botao obrigatorio="true"texto="Enviar" />
        </form>
    </section>
    )
}

export default Login