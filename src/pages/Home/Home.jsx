import LeftSideNav from "../shared/LeftSideNav/LeftSideNav";
import Header from "../shared/header/Header";
import Navbar from "../shared/navbar/Navbar";
import RightSideNav from "../shared/rightSideNav/RightSideNav";
import BreakingNews from "./BreakingNews/BreakingNews";
import { useLoaderData } from "react-router-dom";
import NewsCard from "./BreakingNews/NewsCard";
const Home = () => {
    const news = useLoaderData();
    console.log(news);
    return (
        <div className="max-w-6xl mx-auto">
            <Header></Header>
            <BreakingNews></BreakingNews>
            <Navbar></Navbar>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 justify-center">
                <div className="">
                    <LeftSideNav></LeftSideNav>
                </div>
                <div className="md:col-span-2">
                    <h2 className="text-3xl">Dragon News Home</h2>
                    {/* news container */}
                    <div>
                        {
                            news.map(newsSolo => <NewsCard key={newsSolo._id} news={newsSolo}></NewsCard>)
                        }
                    </div>
                </div>
                <div>
                    <RightSideNav></RightSideNav>
                </div>
            </div>
        </div>
    );
};

export default Home;