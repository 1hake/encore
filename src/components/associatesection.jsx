export const AssociateSection = (props) => {
  return (
    <div id="about">
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-md-12">
            <div className="about-text">
              <h2>Envie de rejoindre le projet</h2>
              <div className="list-style">
                <div className="col-lg-12 col-sm-12 col-xs-12">
                  <ul>
                    <p style={{ fontSize: '20px', lineHeight: '25px' }}>
                    Aujourd’hui, Encore Project est porté par Coline Laurent, et par une équipe de contributeurs engagés. <br/>
                    Si toi aussi, tu es  passionné.e par les objets d’occasion et l’histoire qu’ils transportent et que tu veux prendre part au projet, rejoins-nous !
                    </p>
                    <div style={{width: '100%', display: 'flex', justifyContent: 'center'}}>
                      <a
                      style={{marginTop: '10px'}}
                      href='/associes'
                      className='btn btn-custom btn-lg page-scroll'
                      >
                        En savoir plus
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
