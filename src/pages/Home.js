import '../pages/Home.css';
import Img from'../Image/img.1.png';
export default function Home() {
    return (
        <div>
            <div className='landing-page'>
                <div className='row'>
                    <div className='column-1'>
                        <h6>Hi There!👋</h6>
                        <h3>I'm Poovarasan</h3>
                        <h5>My Skills : <span></span></h5>
                        <button className='style'> <a href="/contact" target='_blank'>Contact</a></button>
                        <button className='style-1'><a href="/about" target='_blank'>Learn More</a></button>
                    </div>
                    <div className='column-1'>
                    <img src={Img} />
                    </div>
                </div>

            </div>
            <div>
                <div className='row-1'>
                    <div className='column-2'>
                        
                    </div>
                    <div className='column-2'>
                        
                     </div>
                     <div className='column-2'>
                        
                    </div>

                </div>
            </div>

        </div>
    );
}