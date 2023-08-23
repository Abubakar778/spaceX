import React,{useState,useEffect} from 'react';
import { Link , useNavigate} from 'react-router-dom';
import Loader from '../components/Loader';
import Message from '../components/Message';

const DragonListScreen = () => {
  const [dragon, setDragon] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigation = useNavigate();
  const goToBackPage = () =>{
    navigation(-1);
  }
  useEffect(() => {
   fetch('https://api.spacexdata.com/v4/dragons')
   .then((res)=>res.json())
   .then((data)=>{setDragon(data)})
   .catch((err)=>{setError(err.message)})
   .finally(()=>{setLoading(false)})
  }, [])

  return(
    <>
    <div className="row">
      <div className="col">
      <button className="btn btn-primary" onClick={goToBackPage}>Back</button>
      </div>
      {error && <Message text = {error}/>}
      {loading && <Loader />}
      {dragon.length > 0 && (
        <>
        <div className="row">

          {dragon.map((dragon)=>{
            return(
               <div key={dragon.id} className='col-md-4 my-3'>
                <Link to={`/dragons/${dragon.id}`}>

                 <div className="card" >
     <img src={dragon.flickr_images[0]} class="card-img-top" alt="source img" />
  <div class="card-body">
    <h5 class="card-title">{dragon.name}</h5>
    <p class="card-text">{dragon.description}</p>
  
  </div>
</div> 
                </Link>
              </div>
              )
            })}
            </div>
        
        </>
      )}
    </div>
    </>
  )
  


};

export default DragonListScreen;
