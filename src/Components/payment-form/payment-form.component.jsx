
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import Button from "../button/button.component";

const PaymentForm = () => {
    const stripe = useStripe();
    const elements = useElements();

    const paymentHandler = async (e) => {
        e.preventDefault();

        if (!stripe || !elements) { return; }
        const response = await fetch('/.netlify/functions/create-payment-intent', {
            method: 'post',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ amount: 10000 }),
        }).then(res => res.json());

        const { paymentIntent: { client_secret } } = response;
        // console.log(client_secret);

        const paymentResult = await stripe.confirmCardPayment(client_secret, {
            payment_method: {
                card: elements.getElement(CardElement),
                billing_details: {
                    name: 'Mazan Labeeb'
                }
            }
        });

        if (paymentResult.error) {
            if (paymentResult.error.code === "card_declined") {
                alert("Payment was not successful! Card declined");
            }else if(paymentResult.error.code === "incomplete_zip"){
                alert("Payment was not successful! Please enter the ZIP code.");
            } else {
                alert("Payment was not successful due to an unknown error!");
            }
            console.log(paymentResult.error);


        } else {
            if (paymentResult.paymentIntent.status === "succeeded") {
                alert("payment successful");
            }
        }


    }




    return (
        <div onClick={paymentHandler}>
            <CardElement>
            </CardElement>
            <br />
            <Button className={"btn btn-primary text-align-right"}>Pay Now</Button>
            <br />
            <br />

        </div>
    );
}

export default PaymentForm;