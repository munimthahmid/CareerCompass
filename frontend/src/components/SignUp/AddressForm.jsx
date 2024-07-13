import React, { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
const AddressForm = () => {
  const [address, setAddress] = useState({
    street: "",
    city: "",
    zip: "",
    country: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAddress((prevAddress) => ({
      ...prevAddress,
      [name]: value,
    }));
  };

  const validate = () => {
    const newErrors = {};
    if (!address.street) newErrors.street = "Street is required";
    if (!address.city) newErrors.city = "City is required";
    if (!address.state) newErrors.state = "State is required";
    if (!address.zip) newErrors.zip = "Zip code is required";
    else if (!/^\d{5}(-\d{4})?$/.test(address.zip))
      newErrors.zip = "Zip code is invalid";
    if (!address.country) newErrors.country = "Country is required";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length === 0) {
      console.log("Address Submitted: ", address);
      // You can add further form submission logic here
    } else {
      setErrors(validationErrors);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Street:</label>
        <input
          type="text"
          name="street"
          value={address.street}
          onChange={handleChange}
        />
        {errors.street && <span>{errors.street}</span>}
      </div>
      <div>
        <label>Apartment:</label>
        <input
          type="text"
          name="apartment"
          value={address.apartment}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>City:</label>
        <input
          type="text"
          name="city"
          value={address.city}
          onChange={handleChange}
        />
        {errors.city && <span>{errors.city}</span>}
      </div>
      <div>
        <label>State:</label>
        <input
          type="text"
          name="state"
          value={address.state}
          onChange={handleChange}
        />
        {errors.state && <span>{errors.state}</span>}
      </div>
      <div>
        <label>Zip Code:</label>
        <input
          type="text"
          name="zip"
          value={address.zip}
          onChange={handleChange}
        />
        {errors.zip && <span>{errors.zip}</span>}
      </div>
      <div>
        <label>Country:</label>
        <input
          type="text"
          name="country"
          value={address.country}
          onChange={handleChange}
        />
        {errors.country && <span>{errors.country}</span>}
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default AddressForm;
