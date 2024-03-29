import { useState } from 'react'
import emailjs from 'emailjs-com'

const initialState = {
  name: '',
  email: '',
  message: '',
}
export const Contact = (props) => {
  const [{ name, email, message }, setState] = useState(initialState)
  const [mailSent, setMailSent] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setState((prevState) => ({ ...prevState, [name]: value }))
  }
  const clearState = () => setState({ ...initialState })

  const handleSubmit = (e) => {
    e.preventDefault()
    emailjs
      .sendForm(
        'service_qb73yo8', 'template_o3dz7j8', e.target, 'user_obQts8UtpXQYHlb2LeAbh'
      )
      .then(
        (result) => {
          setMailSent(true);
          clearState()
        },
        (error) => {
          console.log(error.text)
        }
      )
  }
  return (
    <div>
      <div id='contact'>
        <div className='container'>
          <div className='col-md-8'>
            <div className='row'>
              <div className='section-title'>
                <h2>Restons en contact</h2>
                <p>
                  Professionnel·le·s de la seconde main, acteurs du réemploi ou simples curieux·ses ?
                  Laissez-nous vos coordonnées, on vous informe vite de la suite !
                </p>
              </div>
              <form name='sentMessage' validate onSubmit={handleSubmit}>
                <div className='row'>
                  <div className='col-md-6'>
                    <div className='form-group'>
                      <input
                        type='text'
                        id='name'
                        name='name'
                        className='form-control'
                        placeholder='Mon petit nom'
                        required
                        onChange={handleChange}
                      />
                      <p className='help-block text-danger'></p>
                    </div>
                  </div>
                  <div className='col-md-6'>
                    <div className='form-group'>
                      <input
                        type='email'
                        id='email'
                        name='email'
                        className='form-control'
                        placeholder='ecrismoi@pastropquandmeme.fr'
                        required
                        onChange={handleChange}
                      />
                      <p className='help-block text-danger'></p>
                    </div>
                  </div>
                </div>
                <div className='form-group'>
                  <textarea
                    name='message'
                    id='message'
                    className='form-control'
                    rows='4'
                    placeholder="Hello, moi aussi j'adore les objets qui ont une histoire !"
                    required
                    onChange={handleChange}
                  ></textarea>
                  <p className='help-block text-danger'></p>
                </div>
                <div id='success'></div>
                <button disabled={mailSent} type='submit' className='btn btn-custom btn-lg'>
                  {mailSent ? <>Message envoyé{'  '}<i className='fa fa-check'></i></> : "Envoyer Message"}
                </button>
              </form>
            </div>
          </div>
          <div className='col-md-3 col-md-offset-1 contact-info'>
            <div className='contact-item'>
              <h3>Coline LAURENT</h3>

              <div className='social'>
                <a href={props.data ? props.data.instagram : '/'}>
                  <i className='fa fa-instagram'></i>
                </a>
                <a href={props.data ? props.data.linkedin : '/'}>
                  <i className='fa fa-linkedin'></i>
                </a>
              </div>
            </div>
            <div className='contact-item'>
              <p>
                <span>
                  <i className='fa fa-phone'></i> Téléphone
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
        </div>
      </div>
      <div id='footer'>
        <div className='container text-center'>
          <p>
            &copy; 2021 Design by Colin Champdavoine
          </p>
        </div>
      </div>
    </div>
  )
}
