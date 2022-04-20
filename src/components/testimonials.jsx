export const Testimonials = (props) => {
  return (
    <div id='testimonials'>
      <div className='container'>
        <div className='section-title text-center'>
          <h2>Témoignages partenaires</h2>
        </div>
        <div className='row'>
          {props.data
            ? props.data.map((d, i) => (
              <div key={`${d.name}-${i}`} className='col-md-6'>
                <div className='testimonial'>
                  <div className='testimonial-image'>
                    {' '}
                    <a href={d.link}>
                      <img src={d.img} style={{height: '10vh'}} />{' '}
                    </a>
                  </div>
                  <div className='testimonial-content'>
                    <p>"{d.text}"</p>
                    <div className='testimonial-meta'> - {d.name} </div>
                    <div style={{ fontStyle: 'italic', fontSize: '1em' }} >{d.position} </div>
                  </div>
                </div>
              </div>
            ))
            : 'loading'}
             <div style={{width: '100%', display: 'flex', justifyContent: 'center'}}>
              <a
              style={{marginTop: '30px'}}
              href='mailto:encore.coline@gmail.com'
              className='btn btn-custom btn-lg page-scroll'
              >
                Mettre en place un partenariat
              </a>
              </div>
        </div>
      </div>
    </div>
  )
}
