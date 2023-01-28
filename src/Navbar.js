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
        </ul>

    </nav>
}