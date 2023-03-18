import { Link } from "react-router-dom";

const Takis = () => {
    return (
        <div>
            <h1>Takis</h1>
            <img src="https://www.meijer.com/content/dam/meijer/product/0757/52/8008/68/0757528008680_0_A1C1_0600.jpg" alt="" />
            <p>
                <Link to="/">Go Back</Link>
            </p>
        </div>
    )
}

export default Takis