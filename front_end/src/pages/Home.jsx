import furnituresData from '../assets/IkeHack.json'
import Furniture from '../components/Furniture.jsx'
import FetchApi from '../components/Fetch.jsx'

function Home() {
  return (
    <div className="grid">
    {furnituresData.map((furniture, index) => (
      <Furniture key={index} data={furniture} />
    ))}
  </div>
)
}

<div>{FetchApi}</div>

export default Home
