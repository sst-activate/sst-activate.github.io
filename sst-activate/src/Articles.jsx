import './index.css';
import ACELOGO from '/ACE.png';
import KennethBVYN from '/BVYNKenneth.png';
import HealthierBVYN from '/HealthierBVYN.png';
import BVYNCCS from '/BVYNCCS.png';

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
            <h2 style={{ marginTop: "7vw" }}>Featuring SST students!</h2>
            <h3>Kenneth Koh
                <div className='showcaseDisplay'>
                    <div className='pictureGroup'>
                        <img src={KennethBVYN} className='pictureDisplay'></img>
                        <div className="pictureGroupDobbleganger" style={{ textAlign: "center" }}>
                            <img src={HealthierBVYN} className='secondPic'></img>
                            <img src={BVYNCCS} className='secondPic'></img>
                        </div>
                    </div>
                    <p style={{ fontSize: "2.5vw", textAlign: "justify", padding: "3vw" }}>
                        Kenneth Koh was the Chaiperson of the Active Citizenship Board in 2022.
                        Despite being the inaugaral batch of Executive committee, he was
                        able to set the standards of Leadership for the board for years to come,
                        establishing connections in projects such as ACE Food Drive, and Python
                        coding workshops, he was able to make lasting impacts in not just the
                        community, but also in leadership as he inspires many more leaders to
                        do the same.
                    </p>
                </div>
            </h3>
        </>
    )
}

export default Articles