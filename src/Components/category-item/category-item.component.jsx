import { useNavigate } from "react-router-dom";
import "./category-item.style.scss";


const CategoryItem = ({ category }) => {
    const { title, imageUrl } = category;

    const navigate = useNavigate();
    const navigateHandler = () => {
        navigate(`/shop/${title}`);
    }

    return (
        <div className="category-container" onClick={navigateHandler}  >
            <div className="bg">
                <img src={imageUrl} alt={`Product ${title}`} />
            </div>

            <div className="category-container-body">
                <h2 className="text-gradient">{title}</h2>
                <p className="text-gradient">Shop Now</p>
            </div>
        </div>
    );
}

export default CategoryItem;