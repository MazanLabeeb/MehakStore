import SHOP_DATA from "../../shop-data.json";

const Shop = () => {
    return (
        SHOP_DATA.map(({name}) => {
            return (
                <div>{name}</div>
            );
        } )
    );

}

export default Shop;