import { useParams, useLoaderData, Link } from "react-router-dom";
import Header from "../shared/header/Header";
import Navbar from "../shared/navbar/Navbar";
import RightSideNav from "../shared/rightSideNav/RightSideNav";

const NewsDetails = () => {
    const { id } = useParams();
    const news = useLoaderData();
    const soloNews = news.find(newOne => newOne._id === id);
    console.log(soloNews);

    return (
        <div className="max-w-6xl mx-auto">
            <Header></Header>
            <Navbar></Navbar>
            <div className="grid md:grid-cols-4">
                <div className="col-span-3">
                    <div className="card bg-base-100 shadow-xl">
                        <figure><img className="w-[100%]" src={soloNews.image_url} alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">Title{soloNews.title}</h2>
                            <p>{soloNews.details}</p>
                            <p>Author:{soloNews.author.name}</p>
                            <p>Published On:{soloNews.author.published_date}</p>
                            <p>Total View:{soloNews.total_view}</p>
                            <p>Rating:{soloNews.rating.number} , Badge:{soloNews.rating.badge}</p>

                            <Link to={-1}><button className="btn btn-primary">Go Back to Home</button></Link>
                        </div>
                    </div>
                </div>
                <div>
                    <RightSideNav></RightSideNav>
                </div>
            </div>
        </div>
    );
};

export default NewsDetails;