import { Link } from "react-router-dom"
import './Home.css'

const Home = () => {
    return (
        <div className="homepage" style={{ backgroundImage: `url("https://cdn1.epicgames.com/ue/product/Screenshot/gallery01ue5-1920x1080-ce8c734b5d4e6815b347faccb5cd2ff7.png?resize=1&w=1920")` }}>
            <div className='centerMessage'>
                <h1>
                    <Link to="/hotcheetos">Hot Cheetos</Link>
                    <Link to="/cheezeit">Cheeze-It</Link>
                    <Link to="/takis">Takis</Link>
                </h1>

            </div>

        </div >
    )
}

export default Home;