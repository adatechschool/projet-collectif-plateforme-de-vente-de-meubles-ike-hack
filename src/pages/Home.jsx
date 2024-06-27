import furnituresData from '../assets/IkeHack.json'
import { useNavigate } from 'react-router-dom';

function Home() {
  return (
    <div className="grid">
    {furnituresData.map((furniture, index) => (
      <AllFurnitures key={index} data={furniture} />
    ))}
  </div>
)
}


function AllFurnitures({ data }){
  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/Furniture'); // Navigue vers la page "/about"
  };
return (
  <div className="card" onClick={handleClick}>
    <img src={data.pictures}/>
    <h1>{data.name}</h1>
    <p>{data.type}</p>
    <p>Price: {data.price}€</p>
    <button>Buy</button>
  </div>
)
}

export default Home
