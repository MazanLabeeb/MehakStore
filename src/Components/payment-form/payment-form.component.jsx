
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import Button from "../button/button.component";

const PaymentForm = () => {
    const PaymentForm = () => {
        const stripe = useStripe();
        const elements = useElements();

        const paymentHandler = async (e) => {
            e.preventDefault();
    
            if (!stripe || !elements){ return;}
        }
        
    }
    

    return (
        <div>
            <CardElement>
            {/* <Button className={"btn btn-primary"}>Pay Now</Button> */}
                <button>Pay Now</button>
            </CardElement>
        </div>
    );
}

export default PaymentForm;