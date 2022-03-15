import { useEffect, useState, useContext } from 'react';
import { Image } from "./image";
import { MyContext } from '../layout/Context';
import { convertDateToFrenchString, sliceNRandomElementsArray } from '../utils/utils';
import { Card } from './display/StoryCard';
import { ImageBlock } from './display/ImageBlock';
import { useHistory } from 'react-router-dom';
import { Navigation } from './navigation';
import emailjs from 'emailjs-com'



export const Waitlist = (props) => {
    const { data, setData } = useContext(MyContext);
    const [email, setEmail] = useState("");
    const [mailSent, setMailSent] = useState(false);

    // get histoiry from router 
    const history = useHistory();

    const handleSubmit = () => {
        emailjs
            .send(
                'service_qb73yo8', 'template_cxqmlcl', { email: email }, 'user_obQts8UtpXQYHlb2LeAbh'
            )
            .then(
                (result) => {
                    console.log('SUCCESS!', result.status, result.text);

                    setMailSent(true);
                },
                (error) => {
                    console.log(error.text)
                }
            )
    }
    return (
        <>
            <Navigation></Navigation>
            <div className='column-flex-container-space'>
                <div style={{ marginTop: '15vh', textAlign: 'center' }} className='column-flex-container' >
                    <div style={{ fontWeight: 'bold', fontSize: '1.3em', maxWidth: '80vw' }}>
                        Pour toi aussi, la valeur émotionnelle des objets est importante ?
                    </div>
                    {/* <div style={{ display: 'flex' }}>
                        <div
                            style={{ backgroundColor: '#c6104d' }}
                            className="custom-button-colored">
                            Oui
                        </div>
                        <div
                            style={{ backgroundColor: '#fce0d2', color: 'black' }}
                            className="custom-button-colored">
                            Non
                        </div>
                    </div> */}
                    <div style={{ fontStyle: 'italic', marginTop: '2vh', fontSize: '1.3em', maxWidth: '80vw' }}>
                        Actuellement, Encore est en phase de test. Le site permet uniquement de découvrir des histoires, racontées par une petite sélection de vendeurs d’objets d’occasion.<br /><br />
                    </div>
                    <div style={{ fontWeight: 'bold', marginTop: '2vh', fontSize: '1.3em', maxWidth: '80vw' }}>
                        Pour être au courant dès que la plateforme Encore sera disponible au grand public, laisse-nous ton email :
                    </div>

                    <input style={{ padding: '10px', width: '100%', margin: '10px' }} type="text" placeholder={"Jesuisimpatient@previensmoi"} onChange={(e) => setEmail(e.target.value)} />


                    <div
                        onClick={() => {
                            window.location.href = 'https://www.instagram.com/encore.project.fr/?hl=fr';
                        }}
                        style={{ marginTop: '10px', backgroundColor: "#89c884", color: 'white' }}
                        onClick={handleSubmit}
                        className="left-button">
                        {mailSent ? <>Message envoyé{'  '}<i className='fa fa-check'></i></> : "On a hâte"}
                    </div>

                </div>
            </div>
        </>
    )
}
