import { useState } from "react";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import Button from "../button/button.component";
import { useSelector } from "react-redux";
import { cartSelector } from "../../store/cart/cart.selector";
import { currentUserSelector } from "../../store/user/user.selector";




const PaymentForm = () => {
    const stripe = useStripe();
    const elements = useElements();

    const [isProcessingPayment, setIsProcessingPayment] = useState(false);

    const cartItems = useSelector(cartSelector);
    const totalPrice = cartItems.reduce((total, cartItem) => {
        return total + cartItem.quantity * cartItem.price;
    }, 0);

    const user = useSelector(currentUserSelector);

    const paymentHandler = async (e) => {
        e.preventDefault();

        if (!stripe || !elements) { return; }
        setIsProcessingPayment(true);
        const response = await fetch('/.netlify/functions/create-payment-intent', {
            method: 'post',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ amount: totalPrice*100 }),
        }).then(res => res.json());

        const { paymentIntent: { client_secret } } = response;

        const paymentResult = await stripe.confirmCardPayment(client_secret, {
            payment_method: {
                card: elements.getElement(CardElement),
                billing_details: {
                    name: user.displayName?user.displayName:"Guest"
                }
            }
        });

        setIsProcessingPayment(false);


        if (paymentResult.error) {
            if (paymentResult.error.code === "card_declined") {
                alert("Payment was not successful! Card declined");
            }else if(paymentResult.error.code === "incomplete_zip"){
                alert("Payment was not successful! Please enter the ZIP code.");
            } else {
                alert("Payment was not successful due to an unknown error!");
            }
            console.log("Debug",paymentResult.error);


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
            <Button disabled={isProcessingPayment} className={"btn btn-primary text-align-right"}>Pay Now</Button>
            <br />
            <br />

        </div>
    );
}

export default PaymentForm;