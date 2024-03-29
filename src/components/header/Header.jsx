import { Link } from "react-router-dom";


const Header = () => {
    return (
        <div>
            <h2>this is header components</h2>
            <Link to='/'>Home</Link><br />
            <Link>Log in</Link>
        </div>
    );
};

export default Header;