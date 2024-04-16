import './index.css';
import ACELOGO from '/ACE.png';

function Homepage() {
    return (
        <>
            <div className="topNav">
                <button className="fas fa-bars" id="dropDown"></button>
                <img src={ACELOGO} id="aceLogo"></img>
                <a className='topNavButtons-active' href="#/">Home</a>
                <a className='topNavButtons' href="#/archive">Archive</a>
                <a className='topNavButtons' href="#/articles">Articles</a>
                <a className='topNavButtons' href="#/activate">ACTIVATE!</a>
            </div>
            <div id='introPara'>
                <h1 className='wordHovering'>
                    <span>H</span>
                    <span >e</span>
                    <span >l</span>
                    <span >l</span>
                    <span >o</span>
                    <span > </span>
                    <span >S</span>
                    <span >S</span>
                    <span >T</span>
                    <span >!</span>
                </h1>
                <p className="firstP" style={{ margin: "1vw" }}>
                    In this website you will find a collection of articles, list of voluntary welfare organisations and initiatives,
                    service learning projects that students embarked on in the past, as well as guides on how you may do the same.
                    May these widen your horizons on what is happening in our community and world, inspire you to take action,
                    and in turn help make this place we are living in a better one (:
                </p>

            </div>
        </>
    )
}

export default Homepage