import './index.css';
import ACELOGO from '/ACE.png';

function Activate() {
    return (
        <>
            <div className='topNav'>
                <button className="fas fa-bars" id="dropDown"></button>
                <img src={ACELOGO} id="aceLogo"></img>
                <a className='topNavButtons' href="#/">Home</a>
                <a className='topNavButtons' href="#/archive">Archive</a>
                <a className='topNavButtons' href="#/articles">Articles</a>
                <a className='topNavButtons-active' href="#/activate">ACTIVATE!</a>
            </div>

            <div>

            </div>
        </>
    )
}

export default Activate