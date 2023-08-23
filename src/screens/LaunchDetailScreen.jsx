import React,{useState,useEffect}from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Loader from '../components/Loader';
import Message from '../components/Message';

const LaunchDetailScreen = () => {
    const [launch, setLaunch] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);
    const {id} = useParams();
    const navigate = useNavigate();
    const goToBackPage = () =>{
        navigate(-1)
    };
    useEffect(() => {
        fetch(`https://api.spacexdata.com/v4/launches/${id}`)
        .then((res)=>res.json())
        .then((data)=>setLaunch(data))
        .catch((err)=>setError(err.message))
        .finally(()=>setLoading(false));
      
    }, [id])
    // console.log(launch.failures.reason)
    
  return (
        <>
        <div className="row">
            <div className="col">
                <button className="btn btn-primary" onClick={goToBackPage}>Back</button>
            </div>
        </div>
        {loading && <Loader/>}
        {error && <Message text={error}/>}
        
            
             <>
    <div  className="row">
        <div className="col-md-6">
            <div className="card my-5">
                <div className="card-body">
                     <h5 className="card-title">{launch.name}</h5>
                    <p className="card-text">{launch.details}</p>

                </div>
            </div>
        </div>
    </div>
    </>
            </>
    
        
  )
}

export default LaunchDetailScreen