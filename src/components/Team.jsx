export const Team = (props) => {
  return (
    <div id='team' className='text-center'>
      <div className='container'>
        <div className='col-md-8 col-md-offset-2 section-title'>
          <h2>Depuis 2 mois, je suis entourée de personnes incroyables
          </h2>
          <p>
            Ils sont mes amis, mes anciens collègues ou mes voisins. Ils sont talentueux, et incroyablement généreux. C’est grâce à eux qu’Encore existe déjà, un peu.
            Mais comme moi, ils ont tous des boulots. Et contrairement à moi, ils n’ont pas l’intention de les quitter  !
          </p>
        </div>
        <div id='row'>
          {props.data
            ? props.data.map((d, i) => (
              <a href={d.link}>
                <div key={`${d.name}-${i}`} className='col-md-3 col-sm-6 team'>
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
        <img src={'img/team/05.png'} alt='...' className='' style={{ width: '85vw', maxWidth: '1000px' }} />

      </div>
    </div >
  )
}
