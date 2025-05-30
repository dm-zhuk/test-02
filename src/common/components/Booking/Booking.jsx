import { useState } from 'react';
import toast from 'react-hot-toast';
import { validateForm } from '~/utils/validator';
import { Input } from '../UI/Input/Input';
import { Textarea } from '../UI/Textarea/Textarea';
import Button from '../Buttons/Button';
import styles from './index.module.css';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const Booking = () => {
  const [errors, setErrors] = useState({});
  const [startDate, setStartDate] = useState(null);
  const [data, setData] = useState({
    name: '',
    email: '',
    date: null,
    comment: '',
  });

  const handleChange = e => {
    const { name, value } = e.target;
    setData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleDateChange = date => {
    setStartDate(date);
    setData(prev => ({
      ...prev,
      date: date,
    }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    const validationErrors = validateForm(data);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      toast.success(
        `You have successfully booked a camper for ${data.date}. We'll contact you soon.`,
        {
          position: 'bottom-right',
          reverseOrder: false,
          duration: 3600,
        }
      );

      setData({
        name: '',
        email: '',
        date: null,
        comment: '',
      });
      setStartDate(null);
    }
  };

  return (
    <div className={styles.booking}>
      <div className={styles.bookingHeader}>
        <h3>Book your campervan now</h3>
        <span className={styles.slogan}>
          Stay connected! We are always ready to help you.
        </span>
      </div>
      <form className={styles.form} onSubmit={handleSubmit}>
        <Input
          type="text"
          name="name"
          value={data.name}
          placeholder="Name*"
          onChange={handleChange}
        />
        {errors.name && <span className={styles.error}>{errors.name}</span>}

        <Input
          type="email"
          name="email"
          value={data.email}
          placeholder="Email*"
          onChange={handleChange}
        />
        {errors.email && <span className={styles.error}>{errors.email}</span>}

        <DatePicker
          selected={startDate}
          onChange={handleDateChange}
          placeholderText="Booking date*"
          calendarStartDay={1}
          minDate={new Date()}
        />
        {errors.date && <span className={styles.error}>{errors.date}</span>}

        <Textarea
          name="comment"
          placeholder="Comment"
          value={data.comment}
          onChange={handleChange}
          rows={4}
        />

        <Button text="Send" type="submit" style={{ marginTop: '10px' }} />
      </form>
    </div>
  );
};

export default Booking;
