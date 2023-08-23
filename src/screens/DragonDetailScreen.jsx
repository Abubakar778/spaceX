import React,{useState,useEffect} from 'react';
import { useParams,useNavigate } from 'react-router-dom'
import Loader from '../components/Loader';
import Message from '../components/Message';

const DragonDetailScreen = () => {
    const [dragon, setDragon] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null)
    const navigate = useNavigate();
    const goToBackPage = () =>{
        navigate(-1)
    }
  const {id} = useParams();
  useEffect(() => {
    fetch(`https://api.spacexdata.com/v4/dragons/${id}`)
    .then((res)=>res.json())
    .then((data)=> setDragon([data]))
    .catch((err)=>setError(err.message))
    .finally(()=>setLoading(false));
  
  }, [id]);

  return(
    <>
    <div className="row">
        <div className="col">
            <button className="btn btn-primary" onClick={goToBackPage}>Back</button>
        </div>
    </div>
    {loading && <Loader />}
    {error && <Message/>}
    <>
          <div  className=" mt-5">
            <div className=" card-height row">

          {dragon.map((dragon) => (
            
            
            <div key={dragon.id} >
                <div className="d-flex flex-row align-items-center">
                <div className="col-md-5 d-inline-block ">
                  <img src={dragon.flickr_images[0]} alt="source img" className='w-100 h-100 ' />
                </div>
                <div className="col-md-6  d-inline-block  ">
                  <div className=" ps-5">

                  <h2>{dragon.name}</h2>
                  <h5>Height: {dragon.height_w_trunk.meters} meters</h5>
                  <h5>Weight: {dragon.dry_mass_kg} kg</h5>
                  <h5>Diameter: {dragon.diameter.feet} feet</h5>
                  <h5>First Flight: {dragon.first_flight}</h5>
                  <p>{dragon.description}</p>
                  <a href={dragon.wikipedia}>
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
  
}

export default DragonDetailScreen