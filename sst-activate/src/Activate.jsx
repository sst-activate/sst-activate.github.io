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

            <div style={{ marginTop: "10vw" }}>
                <p className='firstP'>This website has mainly three portions, Archive, Articles and ACTIVATE.
                    <br />Firstly, Archive contains most of our past projects, and are all
                    showcases of previous batches hard work and effort in serving the community,
                    along with some of our ACE leaders and SSTudents reflections, giving you inspiration
                    to start your own service learning projects to help the community!
                    <br />Secondly, Articles contains some articles on various topics and issues in the
                    community, giving more insights and information to kickstart your service-learning
                    journeys in these areas.
                    <br />Finally, ACTIVATE is where you begin you passionate project! It contains a
                    proposal template hand-crafted by our very own ACE leaders, and some examples of
                    previous project proposals we have written, along with other documents that you may find
                    useful. Now what are you waiting for? Go forth and be stewards and stewardesses of <span style={{ fontSize: 2 + 'vw', color: "red" }}>service-learning</span>!

                </p>
            </div>
        </>
    )
}

export default Activate