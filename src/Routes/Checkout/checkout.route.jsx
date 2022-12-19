
import CheckoutTable from "../../Components/checkout-table/checkout-table.component";
import "./checkout.style.scss";

const Checkout = () => {
    return (
        <div className="checkout body-max-width">
            <h1>Checkout</h1>
            <CheckoutTable />


            <p style={{fontWeight:"bolder", textDecoration:"underline"}}>Use the following details for as a Test Payment </p>
            <p> <strong>Card number : </strong> 4242 4242 4242 4242</p>
            <p><strong>MM/YY : </strong> 04/24</p>
            <p><strong>CVC : </strong> 242 </p>
            <p><strong>ZIP : </strong> 42424 </p>
        </div>
    )

}

export default Checkout;