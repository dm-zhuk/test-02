export const validateForm = (data) => {
  const newErrors = {};

  const namePattern =
    /^[a-zA-Zа-яА-ЯёЁіІїЇєЄґҐ]+(([' -][a-zA-Zа-яА-ЯёЁіІїЇєЄґҐ ])?[a-zA-Zа-яА-ЯёЁіІїЇєЄґҐ]*)*$/;

  const emailPattern = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/;

  if (!data.name) {
    newErrors.name = "Name is required";
  } else if (!namePattern.test(data.name)) {
    newErrors.name = "Name is invalid";
  }

  if (!data.email) {
    newErrors.email = "Email is required";
  } else if (!emailPattern.test(data.email)) {
    newErrors.email = "Email is invalid";
  }

  if (!data.date) {
    newErrors.date = "Please select a valid date";
  }

  return newErrors;
};
