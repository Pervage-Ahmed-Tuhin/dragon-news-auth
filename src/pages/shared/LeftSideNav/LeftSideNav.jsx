import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import Cards from "./Cards";

const LeftSideNav = () => {
    const [category, setCategory] = useState([]);
    
    const [newsData, setNewsData] = useState([]);


    useEffect(() => {
        fetch('categories.json')
            .then(res => res.json())
            .then(data => setCategory(data))
    }, [])
    useEffect(() => {
        fetch('news.json')
            .then(res => res.json())
            .then(data => setNewsData(data))
    }, [])
    console.log(category);
    console.log(newsData);
    return (
        <div>
            <h2 className="text-3xl">All Categories</h2>
            <ul>

                {
                    category.map(categorySolo => <Link className="block mb-5 no-underline " to={`/category/${categorySolo.id}`} key={categorySolo.id}>{categorySolo.name}</Link>)
                }


            </ul>

            <div>

                {
                    newsData.map((news,index)=><Cards news={news} key={index}></Cards>)
                }

            </div>
        </div>
    );
};

export default LeftSideNav;