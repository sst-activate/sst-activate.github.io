import './index.css';
import ACELOGO from '/ACE.png';

function Articles() {
    return (
        <>
            <div className="topNav">
                <button className="fas fa-bars" id="dropDown"></button>
                <img src={ACELOGO} id="aceLogo"></img>
                <a className='topNavButtons' href="#/">Home</a>
                <a className='topNavButtons' href="#/archive">Archive</a>
                <a className='topNavButtons-active' href="#/articles">Articles</a>
                <a className='topNavButtons' href="#/activate">ACTIVATE!</a>
            </div>

            <div>

            </div>
        </>
    )
}

export default Articles