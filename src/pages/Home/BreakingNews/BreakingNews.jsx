import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

const BreakingNews = () => {
    return (
        <div className="bg-[#F3F3F3]">
            <div className="flex items-center">
                <button className="btn btn-primary bg-pink-700 text-white hover:bg-pink-300">BreakingNews</button>
                <Marquee pauseOnHover={true} speed={100}>
                    <Link className="mr-12" to="/">I can be a React component, multiple React components, or just some text.</Link>
                    <Link className="mr-12" to="/">I can be a React component, multiple React components, or just some text.</Link>
                    <Link to="/">I can be a React component, multiple React components, or just some text.</Link>
                </Marquee>
            </div>
        </div>
    );
};

export default BreakingNews;