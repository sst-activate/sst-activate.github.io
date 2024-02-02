import './index.css';
import ACELOGO from '/ACE.png';

function Homepage(){
    return(
        <>
            <div className="topNav">
                <img src={ACELOGO} id="aceLogo"></img>
                <div className='topNavButtons'>Home</div>
                <div className='topNavButtons'>Organisations</div>
                <div className='topNavButtons'>Past Projects</div>
            </div>
        </>
    )
}

export default Homepage