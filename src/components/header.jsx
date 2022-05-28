import {} from '@fortawesome/fontawesome-free/js/brands';

export const Header = (props) => {
  return (
    <header id='header'>
      <div className='intro'>
        <div className='overlay'>
          <div className='container'>
            <div className='row'>
              <div className='col-md-8 col-md-offset-2 intro-text'>
                <h1>
                  {props.data ? props.data.title : 'Loading'}
                  <span></span>
                </h1>
                <p>{props.data ? props.data.paragraph : 'Loading'}</p>
                <a href="https://api.whatsapp.com/send?phone=5541997256794&text=Ol%C3%A1,%20estou%20entrando%20em%20contato%20para%20agendar%20um%20horário" className="btn btn-success btn-lg">
                AGENDE HORÁRIO PELO WHATSAPP</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
