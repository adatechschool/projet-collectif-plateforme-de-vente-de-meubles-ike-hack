import { useNavigate } from 'react-router-dom';


function Furniture({ data }){
    const navigate = useNavigate();
    const handleClick = () => {
      navigate('/Furniture?'+data.id); // Navigue vers la page "/about"
    };
  return (
    <div className="card">
      <div className='img_container'>
        <img src={data.pictures}/>
      </div>
      <h1>{data.name}</h1>
      <p>{data.type}</p>
      <p>{data.price}€</p>
      <button onClick={handleClick}>Buy</button>
    </div>
  )
  }

  export default Furniture