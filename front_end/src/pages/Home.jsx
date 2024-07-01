import furnituresData from '../assets/IkeHack.json'
import Furniture from '../components/Furniture.jsx'

function Home() {
  return (
    <div className="grid">
    {furnituresData.map((furniture, index) => (
      <Furniture key={index} data={furniture} />
    ))}
  </div>
)
}


export default Home
