export const Team = (props) => {
  return (
    <div id='team' className='text-center'>
      <div className='container'>
        <div className='col-md-8 col-md-offset-2 section-title'>
          <h2>Ils font vivre le projet 
          </h2>
          <p>
          C’est grâce à eux qu’Encore existe déjà, un peu. 
          </p>
        </div>
        <div id='row'>
          {props.data
            ? props.data.map((d, i) => (
              <a href={d.link}>
                <div key={`${d.name}-${i}`} className='col-md-4 col-sm-4 team'>
                  <div className='thumbnail'>
                    {' '}
                    <img src={d.img} alt='...' className='team-img' />
                    <div className='caption'>
                      <h4>{d.name}</h4>
                    </div>
                  </div>
                </div>
              </a>
            ))
            : 'loading'}
        </div>
        {/* <img src={'img/team/05.png'} alt='...' className='' style={{ width: '85vw', maxWidth: '1000px' }} /> */}

      </div>
    </div >
  )
}
