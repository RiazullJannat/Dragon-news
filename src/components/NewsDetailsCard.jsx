import { FaArrowLeft } from "react-icons/fa";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
const NewsDetailsCard = ({ data }) => {


    return (
        <div className=" mx-auto border rounded-lg shadow-md bg-white">
            <img
                src={data.thumbnail_url}
                alt={data.title}
                className="w-full  object-cover rounded-t-lg"
            />
            <div className="p-5">
                <h2 className="text-xl font-semibold text-gray-800 mb-3">{data.title}</h2>
                <div className="flex items-center gap-2 mb-3">
                    <img
                        src={data.author.img}
                        alt={data.author.name}
                        className="w-10 h-10 rounded-full object-cover"
                    />
                    <div>
                        <p className="text-sm font-medium text-gray-700">{data.author.name}</p>
                        <p className="text-sm text-gray-500">{data.author.published_date}</p>
                    </div>
                </div>
                <p className="text-gray-600 text-sm">{data.details}</p>
                <Link to={`/category/${data.category_id
                    }`} className="mt-5 flex items-center gap-2 text-white bg-red-500 hover:bg-red-600 px-4 py-2 rounded">
                    <FaArrowLeft />
                    All news in this category
                </Link>
            </div>
        </div>

    );
};
NewsDetailsCard.propTypes = {
    data: PropTypes.object.isRequired
}
export default NewsDetailsCard;