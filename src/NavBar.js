import { Link } from 'react-router-dom';
import './App.css';




function NavBar() {
    return (
        <nav>
            <Link to='/'>Home</Link>
            <Link to='/About'>About</Link>
            <Link to='/Login'>LogIn</Link>
        </nav>
    )


}

export default NavBar;
