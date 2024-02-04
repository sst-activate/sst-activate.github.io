import "./index.css";
import ACELOGO from '/ACE.png';

function Archive(){
    return(
        <>
            <div className="topNav">
                <img src={ACELOGO} id="aceLogo"></img>
                <a className='topNavButtons' href="#/">Home</a>
                <a className='topNavButtons-active' href="#/archive">Archive</a>
                <a className='topNavButtons' href="#/articles">Articles</a>
                <a className='topNavButtons' href="#/activate">ACTIVATE!</a>
            </div>
        </>
    )


}

export default Archive