import { FaGithub} from "react-icons/fa";
export default function Navbar(){
    const path = window.location.pathname
    return <nav className="nav">
        <a href="/" className="site-title">My-Project</a>
        <ul>
            <li>
                <a href="/">Home</a> 
            </li>
            <li>
                <a href="/about">About</a> 
            </li>
            <li>
                <a href="/contact">Contact</a> 
            </li>
            <button><a href="https://github.com/PoovarasanChandrasekaran" target='_blank'><FaGithub />&nbsp;&nbsp;Github</a></button>
        </ul>

    </nav>
}