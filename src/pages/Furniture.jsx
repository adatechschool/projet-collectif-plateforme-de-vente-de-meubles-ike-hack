import furnituresData from '../assets/IkeHack.json'

function Furniture({ data }){
    return (
        <div className='container'>
            <div className='carousel'>
                <img src="" alt="" />
            </div>
            <div className='furniture_infos'>
                <h1>data.name</h1>
                <h2>data.type, data.price</h2>
                <p>data.type data.couleur de data.dimentions en data.matière</p>
                <button>BUY</button>
            </div>
        </div>
    )
}

export default Furniture