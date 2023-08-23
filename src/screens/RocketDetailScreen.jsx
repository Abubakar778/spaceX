import React,{useState,useEffect} from 'react';
import { useParams , useNavigate } from 'react-router-dom';
import Loader from '../components/Loader';
import Message from '../components/Message';

const RocketDetailScreen = () => {
  const navigate = useNavigate();
  const  {id}  = useParams();
  const [rockets, setRockets] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const goToBackPage = () => {
    navigate(-1);
  };
   useEffect(() => {
    fetch(`https://api.spacexdata.com/v4/rockets/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setRockets([data]);
  
      })
      .catch((err) => {
        setError(err.message);
      })
      .finally(() => {
        setLoading(false);
      });
  },[id]);
  
 return (
   <>
      <div className='row'>
        <div className='col'>
          <button className='btn btn-primary' onClick={goToBackPage}>
            Back
          </button>
        </div>
      </div>
  
        {loading && <Loader />}
        {error && <Message text={error} />}
        
        <>
          <div  className=" mt-5">
            <div className=" card-height row">

          {rockets.map((rockets) => (
            
            
            <div key={rockets.id} >
                <div className="d-flex flex-row align-items-center">
                <div className="col-md-5 d-inline-block ">
                  <img src={rockets.flickr_images[0]} alt="source img" className='w-100 h-100 ' />
                </div>
                <div className="col-md-6  d-inline-block  ">
                  <div className=" ps-5">

                  <h2>{rockets.name}</h2>
                  <h5>Height: {rockets.height.meters} meters</h5>
                  <h5>Weight: {rockets.mass.kg} kg</h5>
                  <h5>Stages: {rockets.stages}</h5>
                  <h5>Country: {rockets.country}</h5>
                  <p>{rockets.description}</p>
                  <a href={rockets.wikipedia}>
                    <button className="btn btn-primary">More Details</button>
                  </a>
                  
                  </div>
                </div>
              </div>
          </div>
          
          
          ))}
          </div>
          </div>
        
        </>
      
      
    </>
 )
};


export default RocketDetailScreen;
