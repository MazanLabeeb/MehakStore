
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import Button from "../button/button.component";

const PaymentForm = () => {
    const stripe = useStripe();
    const elements = useElements();

    const paymentHandler = async (e) => {
        e.preventDefault();

        if (!stripe || !elements) { return; }
        const response = await fetch('/.netlify/functions/create-payment-intent', {
        }).then(res => res.json());

        const {paymentIntent:{client_secret}} = response;
        console.log(client_secret);

        const paymentResult = await stripe.confirmCardPayment(client_secret, {
            payment_method:{
                card: elements.getElement(CardElement),
                billing_details: {
                    name: 'Mazan Labeeb'
                }
            }
        });

        if(paymentResult.error){
            alert(paymentResult.error);

        }else{
            if(paymentResult.paymentIntent.status === "succeeded"){
                alert("payment successful");
            }
        }


    }




    return (
        <div onClick={paymentHandler}>
            <CardElement>
                {/* <Button className={"btn btn-primary"}>Pay Now</Button> */}
            </CardElement>
                <button>Pay Now</button>
        </div>
    );
}

export default PaymentForm;