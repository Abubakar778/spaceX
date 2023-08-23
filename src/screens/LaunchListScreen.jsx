import React,{useState,useEffect} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Loader from '../components/Loader';
import Message from '../components/Message';

const LaunchListScreen = () => {
  const [launch, setLaunch] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigation = useNavigate();
  const goToBackPage = () =>{
    navigation(-1)
  }

  useEffect(() => {
    fetch('https://api.spacexdata.com/v4/launches')
    .then((res)=>res.json())
    .then((data)=>setLaunch(data))
    .catch((err)=>setError(err.message))
    .finally(()=>setLoading(false));
    
  }, []);
  

  return (
    <>
    <div className="row">
      <div className="col">
        <button className="btn btn-primary" onClick={goToBackPage}>Back</button>
      </div>
    </div>
    {loading && <Loader />}
    {error && <Message text={error} />}
    <div className="row my-5">
{launch.length > 0 && (
          <>
            {launch.map((launchs) => (
              <div key={launchs.id} className='col-md-4'>
                <div className='card m-2 p-2'>
                  <Link to={`/launches/${launchs.id}`}>{launchs.name}</Link>
                </div>
              </div>
            ))}
          </>
        )}
      </div>
    
    </>
  );
};

export default LaunchListScreen;
