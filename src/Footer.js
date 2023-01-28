import './App.css';
export default function Footer(){
    return(
        <div className='row'>
            <div className='column'>
                <a href="/" className="site-title">My-Project</a>
                <p>Thank you for visting my website.</p>
                <p>This is First React Project</p>
            </div>
            <div className='column'>
                <h3>Quick Link</h3>
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
            </div>
            <div className='column'>
                <h3>Contact Us</h3>
                <ul>
                    <li>
                        <i class="fa-brands fa-github"></i>
                    </li>
                    <li>
                        <i class="fa-brands fa-facebook"></i>
                    </li>

                </ul>
            </div>
        </div>
    );
}