export const HeaderAssociate = (props) => {
  return (
    <header id='header'>
      <div className='intro-associate'>
        <div className='overlay'>
          <div className='container'>
            <div >
              <div className='col-d-8 col-md-offset-2 intro-text'>
                <h1>
                  {props.data ? props.data.title : 'Loading'}
                  <span></span>
                </h1>
                <h1>
                  {props.data ? props.data.subtitle : 'Loading'}
                  <span></span>
                </h1>
                <p>{props.data ? props.data.paragraph : 'Loading'}</p>

              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
