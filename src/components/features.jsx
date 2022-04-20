export const Features = (props) => {
  return (
    <div id='features' className='text-center'>
      <div className='container'>
        <div style={{marginTop: '100px'}}className='col-md-10 col-md-offset-1 section-title'>
          <h2>Actuellement, les acteurs du marché de l’occasion mettent en avant 3 types de bénéfices :</h2>
        </div>
        <div className='row'>
          {props.data
            ? props.data.map((d, i) => (
              // <a style={{ textDecoration: 'none !important', color: '#777' }} href={d.link} key={`${i}`}>
                <div style={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: "center",
                  alignItems: "center"
                }} key={`${d.title}-${i}`} className='col-xs-12 col-md-4'>
                  {' '}
                  {/* <i className={d.icon}></i> */}
                  <img src={`img/${d.img}`} alt='' style={{ width: '7vw' }} />
                  <h3>{d.title}</h3>
                  <p style={{ display: 'flex', justifyContent: 'center' }} className="col-md-10">{d.text}</p>
                </div>
              // </a>
            ))
            : 'Loading...'}
        </div>
      </div>
    </div >
  )
}
