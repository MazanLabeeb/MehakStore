import { useParams } from "react-router-dom";

const AllProducts = () => {
    const {categoryName} = useParams();

    return (
        <div >
            <h1>{categoryName}</h1>
        </div>
    )
}

export default AllProducts;



