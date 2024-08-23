const element = (
  // Write your code here.
  <div className='bg-container'>
    <h1 className='title'> Congratulations </h1>
    <div className='content-container'>
      <img
        src='https://assets.ccbp.in/frontend/react-js/congrats-card-profile-img.png'
        className='person-image'
      />
      <h1 className='person-name'> Kiran V </h1>
      <p className='clg-name'>
        Vishnu Institute of Computer Education and Technology, and Bhimavaram
      </p>
      <img
        src='https://assets.ccbp.in/frontend/react-js/congrats-card-watch-img.png'
        className='watch-img'
      />
    </div>
  </div>
)

ReactDOM.render(element, document.getElementById('root'))
