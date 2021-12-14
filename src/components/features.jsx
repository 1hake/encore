export const Features = (props) => {
  return (
    <div id='features' className='text-center'>
      <div className='container'>
        <div className='col-md-10 col-md-offset-1 section-title'>
          <h2>Mais pour ça, j'ai besoin de vous</h2>
        </div>
        <div className='row'>
          {props.data
            ? props.data.map((d, i) => (
              <a style={{ textDecoration: 'none !important', color: '#777' }} href={d.link} key={`${i}`}>
                <div style={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: "center",
                  alignItems: "center"
                }} key={`${d.title}-${i}`} className='col-xs-6 col-md-6'>
                  {' '}
                  <i className={d.icon}></i>
                  <h3>{d.title}</h3>
                  <p style={{ display: 'flex', justifyContent: 'center' }} className="col-md-10">{d.text}</p>
                </div>
              </a>
            ))
            : 'Loading...'}
        </div>
      </div>
    </div >
  )
}
