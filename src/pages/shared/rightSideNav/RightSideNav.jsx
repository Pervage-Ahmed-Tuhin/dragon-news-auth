import { FaGoogle, FaGithub, FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

import qZone1 from '../../../assets/qZone1.png';
import qZone2 from '../../../assets/qZone2.png';
import qZone3 from '../../../assets/qZone3.png';
const RightSideNav = () => {
    return (
        <div>
            <div className="p-4">
                <h1>Log in With</h1>

                <button className="btn btn-outline w-full">
                    <FaGoogle></FaGoogle>
                    Google
                </button>

                <button className="btn btn-outline w-full mt-6">
                    <FaGithub></FaGithub>
                    GitHub
                </button>

            </div>
            <div className="p-4">
                <h1>Find Us</h1>

                <a className="p-4 border rounded-t-lg flex items-center underline-none outline-none gap-5" href="">
                    <FaFacebook className="text-xl "></FaFacebook>
                    FaceBook
                </a>
                <a className="p-4 border rounded-t-lg flex items-center underline-none outline-none gap-5" href="">
                    <FaInstagram className="text-xl "></FaInstagram>
                    Instagram
                </a>
                <a className="p-4 border rounded-t-lg flex items-center underline-none outline-none gap-5" href="">
                    <FaTwitter className="text-xl "></FaTwitter>
                    Twitter
                </a>

            </div>
            <div>
                <h1>Q zone</h1>
                <img src={qZone1} alt="" />
                <img src={qZone2} alt="" />
                <img src={qZone3} alt="" />
            </div>
        </div>
    );
};

export default RightSideNav;