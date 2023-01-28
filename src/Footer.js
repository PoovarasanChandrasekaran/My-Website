import './App.css';
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
export default function Footer() {
    return (
        <div className='row'>
            <div className='column'>
                <a href="/" className="site-title">My-Project</a>
                <p>Thank you for visting my website.</p>
                <p>This is First React Project</p>
            </div>
            <div className='column'>
                <h3 className='space'>Quick Link</h3>
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
                <h3 className='space'>Contact Us</h3>
                <ul>
                    <li className='size'>
                        <a href='https://www.google.com/' target="_blank"><FaFacebook /></a>
                    </li>
                    <li className='size'>
                        <a href='https://www.google.com/' target="_blank"><FaInstagram /></a>
                    </li>

                </ul>
            </div>
            <div>
                <hr></hr>
            </div>

            <div>
                <div className='text-size'>© 2022 Developed By Poovarasan</div>
            </div>
        </div>
    );
}