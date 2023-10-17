const express = require("express");
const router = express.Router();
const stripe = require("stripe")(
    "sk_test_51NxPV0IvSlofnRIz3AS3Ks8J30KRD3Enc4rlT4sH34uuA5h4vjTvYK60EWB0sYYhbGwKArJ14AkBRIC4sOdbXt6400Qr7NbqEn"
);

router.post("/intents", async (req, res) => {
    const amount = req.body.amount;

    try {
        const paymentIntent = await stripe.paymentIntents.create({
            amount: amount,
            currency: "zar",
            automatic_payment_methods: {
                enabled: true
            }
        })
        console.log(amount);

        res.json({ paymentIntent: paymentIntent.client_secret });
    } catch (error) {
        // console.log("Error:", error);
        res.status(400).json({
            error: error.message
        });
    }

})

module.exports = router;