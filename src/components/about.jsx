export const About = (props) => {
  return (
    <div id="about">
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-md-6">
            <img src="img/about.jpg" className="img-responsive" alt="" />
          </div>
          <div className="col-xs-12 col-md-6">
            <div className="about-text">
              <h2 style={{marginTop: '10px'}}>Et si on redonnait aux objets toute leur valeur émotionnelle ?</h2>
              <div className="list-style">
                <div style={{padding: '0px'}} className="col-lg-12 col-sm-12 col-xs-12">
                  <ul>
                    {props.data
                      ? props.data.Why.map((d, i) => (
                        <>
                          <li key={`${d}-${i}`}>{d.title}</li>
                          {d.subtitle && <div style={{
                            marginBottom: "10px",
                          }} key={`${d}-${i}`}>{d.subtitle}</div>}
                        </>
                      ))
                      : "loading"}
                      <div style={{width: '100%', display: 'flex', justifyContent: 'center'}}>

                      <a
                        style={{marginTop: '20px'}}
                        href='/histoires/'
                        className='btn btn-custom btn-lg page-scroll'
                        >
                        Découvrir la plateforme
                      </a>
                      </div>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
