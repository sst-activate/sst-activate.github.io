import "./index.css";
import ACELOGO from '/ACE.png';
import Pawsome2022 from '/Pawsome2022.png';
import PawsomeCats2022 from '/PawsomeCats2022.png';
import Bookject2022 from '/Bookject2022.png';
import SAORSA2019 from '/SAOROSA2019.png';
import HENDERSONS2019 from '/HENDERSONS2019.png';
import HENDERSONSLB2019 from '/HENDERSONSLB2019.png';
import Weed2022 from '/WeedWeeding2022.png';
import Beaches6C from '/6CBeaches2022.png';
import SCS2021 from '/RAC FINAL v6.webm';
import DFS2022 from '/DesignForSociety.png';
import SCS2023 from '/SCS2023.JPG?url';
import HRHS2024Leaders from '/HRHS2024_Leader.jpeg';
import HRHS2024_303 from '/HRHS2024_303_2.jpeg';
import HRHS2024_301 from '/HRHS2024_301.jpeg';
import HealthierBVYN from '/HealthierBVYN.png';
import FoodDrive2022 from '/SSTFOODDRIVE2022.png';

function Archive() {
    return (
        <>
            <div className="topNav">
                <button className="fas fa-bars" id="dropDown"></button>
                <img src={ACELOGO} id="aceLogo"></img>
                <a className='topNavButtons' href="#/">Home</a>
                <a className='topNavButtons-active' href="#/archive">Archive</a>
                <a className='topNavButtons' href="#/articles">Articles</a>
                <a className='topNavButtons' href="#/activate">ACTIVATE!</a>
            </div>

            <div>
                <h2 style={{ marginTop: "7vw" }}>Projects on Animal Welfare!</h2>
                <div className="showcaseDisplay">
                    <h3>Project Pawsome 2022!
                        <p>
                            A service learning project by S4-05 seeking to raise awareness about the dangers
                            of irresponsible animal adoption, as well as educate the SST community about
                            how pets can be cared for in a responsible manner.
                        </p>
                    </h3>
                    <img className="pictureDisplay" src={Pawsome2022} ></img>
                </div>
                <div className="showcaseDisplay">
                    <img className="pictureDisplay" src={PawsomeCats2022} ></img>
                    <h3>Pawsome Cats 2022!
                        <p>
                            A service learning project by S4-07 aiming to raise funds for Cat Welfare Society,
                            as well as raise awareness on the mistreatment and abuse of cats.
                            This is so that cats have a safe and caring society to live in.
                        </p>
                    </h3>
                </div>
                <h2 style={{ marginTop: "7vw" }}>Projects on Children and Youth!</h2>
                <div className="showcaseDisplay">
                    <h3>
                        Bookject@SST 2022!
                        <p>
                            A service learning project by S4-08 aiming to serve and support underprivileged
                            primary school children. The class organised a book donation drive in SST to
                            collect textbooks and story books, then donated them to the beneficiaries
                            from six primary schools.
                        </p>
                    </h3>
                    <img className="pictureDisplay" src={Bookject2022} ></img>
                </div>
                <div className="showcaseDisplay">
                    <img className="pictureDisplay" src={SAORSA2019} ></img>
                    <h3>
                        Project SAORSA 2019!
                        <p>
                            A student-initiated project seeking to teach children from low-income families
                            how to express their emotions through drama. Together with Children's Wishing Well,
                            a group of SST students conducted a two-day life-skills workshop where they interacted
                            with children, taught the latter elements of drama as well as guided them to prepare a skit.
                        </p>
                    </h3>
                </div>
                <h2>Elderly Welfare!</h2>
                <div className="showcaseDisplay">
                    <h3>
                        Interactions@Hendersons 2019!
                        <p>
                            A service learning project initiated by ACE leaders to interact and spend time with residents
                            living in Henderson, most of whom were the elderly. Some events they organised were a
                            lantern-making workshop and a jewellery-making workshop. One of the pioneer batches of the
                            interactions@Hednersons we know and love today!
                        </p>
                    </h3>
                    <img className="pictureDisplay" src={HENDERSONS2019} ></img>
                </div>
                <div className="showcaseDisplay">
                    <img className="pictureDisplay" src={HENDERSONSLB2019} ></img>
                    <h3>
                        Interactions@LB 2019!
                        <p>
                            A service learning project initiated by ACE leaders to interact and spend time with
                            the elderly living in Lengkok Bahru. This was done in order to support the latter's
                            mental health and well-being. The ACE leaders also brought bags of food to distribute
                            to the seniors.
                        </p>
                    </h3>
                </div>
                <h2>Projects on the Environment!</h2>
                <div className="showcaseDisplay">
                    <h3>Weed Weeding 2022
                        <p>
                            A service learning project by S4-02 that sought to educate the SST community about
                            Invasive Alien Species (IAS) and the latter's detrimental impact on our environment.
                            The class also partnered with NParks and volunteered to help them in the removal of
                            invasive plants at Bukit Timah Nature Reserve.
                        </p>
                    </h3>
                    <img className="pictureDisplay" src={Weed2022}></img>
                </div>
                <div className="showcaseDisplay">
                    <img className="pictureDisplay" src={Beaches6C}></img>
                    <h3>6C Beaches 2022!
                        <p>
                            A service learning project by S4-06 aiming to raise awareness on the pollution of
                            beaches and the sea. The students also engaged in a clean-up of Changi Beach.
                        </p>
                    </h3>
                </div>
                <h2>Projects on Health!</h2>
                <div className="showcaseDisplay">
                    <img className="pictureDisplay" src={SCS2023}></img>
                    <h3>
                        SCS 2023
                        <p>
                            An update on the SCS project, our ACE leaders have brought it forward and started to incorporate booths and
                            campaigns to SST and spread awareness about cancer in Singapore and hopes more people like you can participate
                            more in programmes like Race Against Cancer!
                        </p>
                    </h3>
                </div>
                <div className="showcaseDisplay">
                    <h3>
                        SCS 2021
                        <p>
                            A service learning project led by ACE leaders in collaboration with the Singapore Cancer Society (SCS).
                            The ACE leaders appealed to the SST student population to participate in Race Against Cancer,
                            a race that aims to raise funds for cancer treatment subsidies, welfare assistance, cancer rehabilitation,
                            cancer screenings, research, public education and cancer support group initiatives.
                        </p>
                    </h3>
                    <video className="pictureDisplay" src={SCS2021} controls></video>
                </div>
                <div className="showcaseDisplay">
                    <img className="pictureDisplay" src={DFS2022}></img>
                    <h3>
                        Design For Society 2022
                        <p>
                            A service learning project led by ACE leaders in collaboration with the Singapore Cancer Society (SCS).
                            The ACE leaders carried out an advocacy campaign to rally for members of the SST population to design
                            outreach posters to promote the virtual event “Singtel - Singapore Cancer Society Race Against Cancer (RAC).
                            ” RAC aims to raise funds for cancer treatment subsidies, welfare assistance, cancer rehabilitation, hospice care,
                            free cancer screenings and public education initiatives.
                        </p>
                    </h3>
                </div>
                <h2>Food Drives!</h2>
                <div className="showcaseDisplay">
                    <h3>好人好事 hao ren hao shi 2024
                        <p>
                            Organised by Hao Ren Hao Shi, it prompted SST students in 2024 to take up arms and help out at a mobile charity to
                            provide basic necessities like food and household supplies to beneficiaries, along with that SST students also help
                            to organise their own booth at the side to add their little spin to the project!
                            It is still ongoing throughout the year

                        </p>
                    </h3>
                    <div className="pictureGroup">
                        <img src={HRHS2024Leaders} className="pictureDisplay" />
                        <div className="pictureDoppleganger" style={{ textAlign: "center" }}>
                            <img src={HRHS2024_303} className="secondPic" />
                            <img src={HRHS2024_301} className="secondPic" />
                        </div>
                    </div>
                </div>
                <div className="showcaseDisplay">
                    <img src={HealthierBVYN} className="pictureDisplay"></img>
                    <h3>Food Drive 2023
                        <p>
                            For the year of 2023, SST Food Drive included a collaboration with Buona Vista Youth Network and other schools brought
                            smiles to the faces of beneficiaries in the area with a HealthierBVYN talk and food packs given to beneficiaries!
                        </p>
                    </h3>
                </div>
                <div className="showcaseDisplay">
                    <h3>Food Drive 2022
                        <p>
                            A service learning project by S4-04 seeking to educate the SST community on food waste and food insecurity in Singapore.
                            In collaboration with Food From The Heart, Singapore, they conducted a food drive whereby donated food items were distributed
                            to the beneficiaries of the charity organisation.
                        </p>
                    </h3>
                    <img src={FoodDrive2022} className="pictureDisplay"></img>
                </div>
            </div>
        </>
    )


}

export default Archive