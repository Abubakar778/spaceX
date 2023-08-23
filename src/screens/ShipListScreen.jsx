import React,{useState,useEffect} from 'react'
import { useNavigate,Link } from 'react-router-dom';
import Loader from '../components/Loader';
import Message from '../components/Message';

export const ShipListScreen = () => {
    const [landpad, setlandpad] = useState([]);
    const [loading, setloading] = useState(true);
    const [error, seterror] = useState(null);
    const navigate = useNavigate();
    const goToBackPage = () =>{
        navigate(-1)
    }

    useEffect(() => {
      
    fetch('https://api.spacexdata.com/v4/ships')
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
        {landpad.image && (

            <div key={landpad.id} className="col-md-4 my-3 ">
          <Link to={`/ships/${landpad.id}`}>

          <div className=" position-relative text-center img-height overflow-hidden">
           <img src={landpad.image} alt="Source" className='bg-img w-100 h-100 opacity-75 ' />
            <div className='position-absolute top-50 start-50 translate-middle h2 fst-italic fw-semibold'>{landpad.name}</div>
          </div>
          </Link>
        </div>
            
                )}
        </>)}
                </div>
            </div>
        
    
    </>
  )
}


