import { useState } from 'react'
import { WMCompose, WMSend } from '@aninga/whatsapp-manager';
const initialState = {
  name: '',
  fone: '',
  message: '',
}
export const Contact = (props) => {
  const [{ name, fone, message }, setState] = useState(initialState)

  const handleChange = (e) => {
    const { name, value } = e.target
    setState((prevState) => ({ ...prevState, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(name, fone, message)
    let mensagem = new WMCompose();
    mensagem.writeText(`Nome: ${name}`);
    mensagem.writeText(`Telefone: ${fone}`, 1, 1);
    mensagem.writeText(`Mensagem : ${message}`);
    WMSend('5541987138561', mensagem.getText());
  }

  return (
    <div>
      <div id='contact'>
        <div className='container'>
          <div className='col-md-8'>
            <div className='row'>
              <div className='section-title'>
                <h2>Envie-nos uma mensagem</h2>
              </div>

              <a href="https://api.whatsapp.com/send?phone=5541997256794&text=Ol%C3%A1,%20estou%20entrando%20em%20contato%20para%20agendar%20um%20horário" className="btn btn-success btn-lg">
                WhatsApp</a>

            </div>
          </div>
          <div className='col-md-3 col-md-offset-1 contact-info'>
            <div className='contact-item'>
              <h3>Informações</h3>
              <p>
                <span>
                  <i className='fa fa-map-marker'></i> Endereço
                </span>
                {props.data ? props.data.address : 'loading'}
              </p>
            </div>
            <div className='contact-item'>
              <p>
                <span>
                  <i className='fa fa-phone'></i> WhatsApp
                </span>{' '}
                {props.data ? props.data.phone : 'loading'}
              </p>
            </div>
            <div className='contact-item'>
              <p>
                <span>
                  <i className='fa fa-envelope-o'></i> Email
                </span>{' '}
                {props.data ? props.data.email : 'loading'}
              </p>
            </div>
          </div>
          <div className='col-md-12'>
            <div className='row'>
              <div className='social'>
                <ul>
                  <li>
                    <a href={props.data ? props.data.facebook : '/'} target="_blank">
                      <i className='fa fa-facebook'></i>
                    </a>
                  </li>
                  <li>
                    <a href={props.data ? props.data.instagram : '/'} target="_blank">
                      <i className='fa fa-instagram'></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id='footer'>
        <div className='container text-center'>
          <p>
            &reg; {new Date().getFullYear()} Alexander Roberto dos Santos
          </p>
        </div>
      </div>
    </div>
  )
}
