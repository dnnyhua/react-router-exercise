import { Link } from "react-router-dom";

const CheezeIt = () => {
    return (
        <div>
            <h1>Cheeze-It</h1>
            <img src="https://images.squarespace-cdn.com/content/v1/54042b0fe4b086132f5df80b/1581102754601-PLIKKFANNNIMGRXZEJE6/Cheez-It.gif?format=800w" alt="Cheeze-It gif" />
            <p>
                <Link to="/">Go Back</Link>
            </p>

        </div>
    )
}

export default CheezeIt