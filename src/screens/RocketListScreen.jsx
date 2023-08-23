import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Loader from '../components/Loader';
import Message from '../components/Message';

const RocketListScreen = () => {
  const navigate = useNavigate();
  const [rockets, setRockets] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const goToBackPage = () => {
    navigate(-1);
  };

  useEffect(() => {
    fetch('https://api.spacexdata.com/v4/rockets')
      .then((res) => res.json())
      .then((data) => setRockets(data))
      .catch((err) => {
        setError(err.message);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);
  

  return (
    <>
      <div className='row'>
        <div className='col'>
          <button className='btn btn-primary' onClick={goToBackPage}>
            Back
          </button>
        </div>
      </div>
      <div className='row my-5'>
        {loading && <Loader />}
        {error && <Message text={error} />}
        {rockets.length > 0 && (
          <>
            {rockets.map((rocket) => (
              <div key={rocket.id} className='col-md-4 my-3'>
                <Link to={`/rockets/${rocket.id}`}>

                 <div class="card" >
     <img src={rocket.flickr_images[0]} className="card-img-top" alt="source img" />
  <div className="card-body">
    <h5 className="card-title">{rocket.name}</h5>
    <p className="card-text">{rocket.description}</p>
  
  </div>
</div> 
                </Link>
              </div>
            ))}
          </>
        )}
      </div>
    </>
  );
};

export default RocketListScreen;
