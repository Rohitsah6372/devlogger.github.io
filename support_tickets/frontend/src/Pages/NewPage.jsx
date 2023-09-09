import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { toast } from "react-toastify";
import { createTicket, reset } from "./../features/Tickets/ticketSlice";
import { useNavigate } from "react-router-dom";
import Spinner from "./../Components/Spinner";

function NewPage() {
  const { user } = useSelector((state) => state.auth);

  const { isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.tickets
  );

  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);
  const [product, setProduct] = useState("");
  const [description, setDescription] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (isError) {
      toast.error(message);
    }

    if (isSuccess) {
      dispatch(reset());
      navigate("/tickets");
    }
  }, [dispatch, isError, isSuccess, navigate, message]);

  const onSubmit = (e) => {
    e.preventDefault();
    // You can handle the form submission logic here

    dispatch(createTicket({ product, description }));
  };

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <>
      <section className="heading">
        <h1>Create New Ticket</h1>
        <p>Please Fill out the form below</p>
      </section>
      <section className="form">
        <div className="form-group">
          <label htmlFor="name">Customer Name</label>
          <input
            type="text"
            name="name"
            placeholder="name"
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Customer Email</label>
          <input
            type="email"
            name="email"
            placeholder="email"
            className="form-control"
          />
        </div>
        <form action="" onSubmit={onSubmit}>
          <div className="form-group">
            <label htmlFor="product">Product</label>
            <select
              name="product"
              id="product"
              value={product}
              className="form-control" // Add the 'form-control' class
              onChange={(e) => setProduct(e.target.value)}
            >
              <option value="iPhone">iPhone</option>
              <option value="Macbook">Macbook Pro</option>
              <option value="iPad">iPad</option>
              <option value="iMac">iMac</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="description">Description of the issue</label>
            <textarea
              name="description"
              id="description"
              className="form-control"
              placeholder="Description of the issue"
              value={description}
              cols="30"
              rows="10"
              onChange={(e) => setDescription(e.target.value)}
            ></textarea>
          </div>
          <div className="form-group">
            <button type="submit" className="btn btn-block">
              Submit
            </button>{" "}
            {/* Corrected 'buttin' to 'button' */}
          </div>
        </form>
      </section>
    </>
  );
}

export default NewPage;
