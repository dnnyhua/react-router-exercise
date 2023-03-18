import { Link } from "react-router-dom";

const HotCheetos = () => {
    return (
        <div>
            <h1>Hot Cheetos</h1>
            <img src="https://thehustle.co/wp-content/uploads/2017/11/header-1-1.gif" alt="" />
            <p>
                <Link to="/">Go Back</Link>
            </p>
        </div>
    );
}

export default HotCheetos;