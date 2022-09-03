import "./category-item.style.scss";

const CategoryItem = ({ category }) => {
    const { title, imageUrl } = category;
    return (
        <div className="category-container" >
            <div className="bg">
                <img src={imageUrl} alt={`Product ${title}`} />
            </div>

            <div className="category-container-body">
                <h2>{title}</h2>
                <p>Shop Now</p>
            </div>
        </div>
    );
}

export default CategoryItem;