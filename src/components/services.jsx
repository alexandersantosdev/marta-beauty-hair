export const Services = (props) => {
  return (
    <div id='services' className='text-center'>
      <div className='container'>
        <div className='section-title'>
          <h2>Nossos Serviços</h2>
        </div>
        <div className='row'>
          {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.name}-${i}`} className='col-md-4'>
                  {' '}<h3>{d.name}</h3>
                </div>
              ))
            : 'carregando...'}
        </div>
      </div>
    </div>
  )
}
