import React from "react";
import { Container, Row, Col, Form, FormGroup } from "reactstrap";
import CreditCardInput from "react-credit-card-input";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/CommonSection";
import "../styles/checkout.css";
import { useSelector } from "react-redux";
import { clearCart } from "../redux/slices/cartSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Checkout = ({ item }) => {
  const totalQty = useSelector((state) => state.cart.totalQuantity);
  const totalAmount = useSelector((state) => state.cart.totalAmount);
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const handleSubmit = (item) => {
    dispatch(clearCart(item));
    toast.success("Order submitted");
    navigate("/home");
  };

  return (
    <Helmet title="Checkout">
      <CommonSection title="Checkout" />
      <section>
        <Container>
          <Row>
            <Col lg="8">
              <h6 className="mb-4 fw-bold">Billing Information</h6>
              <Form className="billing__form">
                <FormGroup className="form__group">
                  <input type="text" placeholder="Enter your name" required />
                </FormGroup>

                <FormGroup className="form__group">
                  <input type="email" placeholder="Enter your email" required />
                </FormGroup>

                <FormGroup className="form__group">
                  <input type="text" placeholder="Phone number" required />
                </FormGroup>

                <FormGroup className="form__group">
                  <input type="text" placeholder="Street address" required />
                </FormGroup>

                <FormGroup className="form__group">
                  <input type="text" placeholder="City" required />
                </FormGroup>

                <FormGroup className="form__group">
                  <input type="text" placeholder="Postal code" required />
                </FormGroup>

                <FormGroup className="form__group">
                  <input type="text" placeholder="Country" required />
                </FormGroup>
                <FormGroup className="card__input">
                  <CreditCardInput
                    fieldClassName="input"
                  />
                </FormGroup>
              </Form>
            </Col>

            <Col lg="4">
              <div className="checkout__cart">
                <h6>
                  Total Qty: <span>{totalQty} items</span>
                </h6>
                <h6>
                  Subtotal: <span>₱{totalAmount}</span>
                </h6>
                <h6>
                  <span>
                    Shipping: <br /> free shipping
                  </span>
                  <span>₱0</span>
                </h6>
                <h4>
                  Total: <span>₱{totalAmount}</span>
                </h4>
                <button
                  className="shop__btn auth__btn w-100"
                  onClick={() => handleSubmit(item)}
                >
                  Place Order
                </button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Checkout;
