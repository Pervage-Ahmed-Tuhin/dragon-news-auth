

const Cards = ({ news }) => {
    const { thumbnail_url, title } = news;
    return (

        <div>
            <div className="card  bg-base-100 shadow-xl">
                <figure className="p-4"><img className="p-1" src={thumbnail_url} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{title}</h2>

                </div>
            </div>
        </div>

    );
};

export default Cards; 