import './texto.css'

const CampoTexto = (props) => {
    return(
        <div className="campo-texto">
            <label>{props.label}</label>
                <input required={props.obrigatorio} />
        </div>
    )
}

export default CampoTexto;
