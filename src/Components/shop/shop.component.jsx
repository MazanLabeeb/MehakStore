import SHOP_DATA from "../../shop-data.json";

const Shop = () => {
    return (
        SHOP_DATA.map(({id, name}) => {
            return (
                <div key={id}>{name}</div>
            );
        } )
    );

}

export default Shop;