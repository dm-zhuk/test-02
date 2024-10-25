import { useState } from "react";
import toast from "react-hot-toast";
import { validateForm } from "./helper";
import { Input } from "../UI/Input/Input";
import { Textarea } from "../UI/Textarea/Textarea";
import Button from "../Buttons/Button";
import styles from "./index.module.css";

const Booking = () => {
  const [errors, setErrors] = useState({});
  const [data, setData] = useState({
    name: "",
    email: "",
    date: null,
    comment: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm(data);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      toast.success("Your request has been sent");
      window.location.reload();
    }
  };

  return (
    <div className={styles.Booking}>
      <h3 className={styles.formTitle}>Book your campervan now</h3>
      <span className={styles.slogan}>
        Stay connected! We are always ready to help you.
      </span>
      <form className={styles.form} onSubmit={handleSubmit}>
        <Input
          type="text"
          name="name"
          placeholder="Name*"
          onChange={handleChange}
          pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          error={errors.name}
        />
        <Input
          type="email"
          name="email"
          placeholder="Email*"
          onChange={handleChange}
          pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
          error={errors.email}
        />
        <Input
          type="date"
          name="date"
          placeholder="Booking date*"
          onChange={handleChange}
          error={errors.date}
        />

        <Textarea
          name="comment"
          placeholder="Comment"
          onChange={handleChange}
          rows="4"
          pattern="/^[a-zA-Z0-9\s.,!?']*$/"
          error={errors.comment}
        />
        <Button text="Send" type="submit" />
      </form>
    </div>
  );
};

export default Booking;
