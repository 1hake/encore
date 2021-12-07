export const AboutAssociate = (props) => {
  return (
    <div id="about">
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-md-6">
            {" "}
            <img src="img/about-associate.jpg" className="img-responsive" alt="" />{" "}
          </div>
          <div className="col-xs-12 col-md-6">
            <div className="about-text">
              <h2>Salut, moi c’est Coline. </h2>
              <div className="list-style">
                <div className="col-lg-12 col-sm-12 col-xs-12">
                  <ul>
                    <p style={{ fontSize: '20px', lineHeight: '30px' }}>
                      Après 2 ans dans le retail, et depuis 4 ans en start-up, je veux contribuer à faire évoluer nos modes de consommation. Je suis convaincue que la meilleure façon pour le faire est de proposer des alternatives, et de les rendre désirables.
                      <br />Avec <b>Encore</b>, l’idée et de faire vivre une expérience émotionnelle aux consommateurs de seconde main, en leur transmettant bien plus qu’un objet : son histoire.
                    </p>
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
