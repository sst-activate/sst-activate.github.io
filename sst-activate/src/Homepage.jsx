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
            <div id='introPara'>
            <h1>Hello SST!</h1>
            In this website you will find a collection of articles, list of voluntary welfare organisations and initiatives, 
            service learning projects that students embarked on in the past, as well as guides on how you may do the same.
            May these widen your horizons on what is happening in our community and world, inspire you to take action, 
            and in turn help make this place we are living in a better one (:
            </div>
        </>
    )
}

export default Homepage