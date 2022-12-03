import HeartLogo from '../assets/heart.svg';

//Heart Component
const Heart = (props) => {
    return(
      <div className='heart'>
        <img className="heart-img" src={HeartLogo} alt='heart' />
        <p className='heart-message'>{props.msg}</p>
      </div>
    )
  }

  export default Heart;
  