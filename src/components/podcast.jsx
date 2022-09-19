export const Podcast = (props) => {
  return (
    <header id='podcast'>
      <div className='podcast'>
        <div className='overlay'>
          <div className='container'>
            <div className='row'>
              <div className='podcast-text'>
                <h1>
                  {props.data ? props.data.title : 'Loading'}
                  <span></span>
                </h1>
                <h2 className="subtitle1">
                  {props.data ? props.data.subtitle1 : 'Loading'}
                  <span></span>
                </h2>
                <div className="paragraph-podcast">{props.data ? props.data.paragraph : 'Loading'}</div>
                <div className="podcast-button-container">

                  <a
                    href='https://www.youtube.com/watch?v=prmuzYUQOEE&list=PLQEeNiWzr9_4kP7rdRXC1-agUTrrcqthH'
                    className='btn podcast-btn-custom btn-lg page-scroll mr-3'
                  >
                    Regarder l'émission
                  </a>{' '}
                  <a
                    href='https://podcast.ausha.co/memorable-1'
                    className='btn podcast-btn-custom btn-lg page-scroll ml-3'
                  >
                    Écouter le podcast
                  </a>{' '}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}