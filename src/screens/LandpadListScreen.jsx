import React,{useState,useEffect} from 'react'
import { useNavigate,Link } from 'react-router-dom';
import Loader from '../components/Loader';
import Message from '../components/Message';

export const LandpadListScreen = () => {
    const [landpad, setlandpad] = useState([]);
    const [loading, setloading] = useState(true);
    const [error, seterror] = useState(null);
    const navigate = useNavigate();
    const goToBackPage = () =>{
        navigate(-1)
    }

    useEffect(() => {
      
    fetch('https://api.spacexdata.com/v4/landpads')
    .then((res)=>res.json())
    .then((data)=>setlandpad(data))
    .catch((err)=>seterror(err))
    .finally(()=>setloading(false));
      
    }, []);
    
  return (
    <>
        <div className="row">
            <div className="col">
                <button className="btn btn-primary" onClick={goToBackPage}>Back</button>
            </div>
        </div>
        <div className="mt-5">
            <div className="row">
        {error && <Message text={error}/>}
        {loading && <Loader/>}
        {landpad.map((landpad)=><>
            <div key={landpad.id} className="col-md-4 my-2">
        <Link to={`/landpads/${landpad.id}`}>
                <div class="card overflow-hidden" style={{height:'499px'}} >
  <img src={landpad.images.large[0]} className="card-img-top" alt="source img" />
  <div className="card-body">
    <h5 className="card-title">{landpad.full_name}</h5>
    <p className="card-text">{landpad.details}</p>
  </div>
</div>
        </Link>
            </div>
            
        </>)}
                </div>
            </div>
        
    
    </>
  )
}


