import React from "react";
import { api } from "../../api/index";

const Pricing = () => {
  const createCheckoutSession = async (lookupKey) => {
    const sessionRes = await api.post(
      "http://localhost:5000/create-checkout-session",
      {
        lookup_key: lookupKey,
      }
    );

    const body = await sessionRes.data;
    console.log(sessionRes);
    window.location.href = body.url;
  };
  
  return (
    <>
      <section>
        <div className="product">
          {/* <Logo /> */}
          <div className="description">
            <h3>Starter plan</h3>
            <h5>$9.99 / month</h5>
          </div>
          <div>
            <button
              id="checkout-and-portal-button"
              onClick={() => createCheckoutSession("strtpln")}
            >
              Checkout
            </button>
          </div>
        </div>
      </section>
      <section>
        <div className="product">
          {/* <Logo /> */}
          <div className="description">
            <h3>Business plan</h3>
            <h5>$49.99 / month</h5>
          </div>
          <div>
            <button
              id="checkout-and-portal-button"
              onClick={() => createCheckoutSession("bsnspln")}
            >
              Checkout
            </button>
          </div>
        </div>
      </section>
      <section>
        <div className="product">
          {/* <Logo /> */}
          <div className="description">
            <h3>Enterprise plan</h3>
            <h5>$499.99 / month</h5>
          </div>
          <div>
            <button
              id="checkout-and-portal-button"
              onClick={() => createCheckoutSession("entrpln")}
            >
              Checkout
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Pricing;
