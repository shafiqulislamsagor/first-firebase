import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";


const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Home</title>
            </Helmet>
            <Link to='/'>Home</Link>
            <Link to='/log-in'>Log In</Link>
        </div>
    );
};

export default Home;