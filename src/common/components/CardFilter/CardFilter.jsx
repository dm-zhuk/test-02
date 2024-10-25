import React, { useContext } from "react";
import toast from "react-hot-toast";
import Pagination from "../UI/Pagination";
import Button from "../Buttons/Button";
import RadioButton from "../Buttons/RadioButton";
import Checkbox from "../Buttons/Checkbox";
import { Location } from "../icons/icons";
import { vehicleEquipment, vehicleType } from "../../../utils/filterIcons";
import { getFilterParams } from "../../../utils/filterParams";
import { filterData } from "../../../utils/filterData";
import styles from "./index.module.css";

const CardFilter = ({ cards, setFilteredCards }) => {
  const { resetPage } = useContext(Pagination);

  const handleSubmit = (e) => {
    e.preventDefault();
    const filterParams = getFilterParams(e.target);
    let filteredData = filterData(cards, filterParams);
    resetPage();

    setFilteredCards(filteredData);
    toast.success("Your selection applied ✔︎");
    resetFilterParams(e.target);
  };

  const resetFilterParams = (form) => {
    form.reset();
  };

  return (
    <div className={styles.inputForm}>
      <form onSubmit={handleSubmit}>
        <div className={styles.inputContainer}>
          <label className={styles.label} htmlFor="location">
            Location
          </label>
          <div className={styles.inputBar}>
            <Location className={styles.locationIcon} />
            <input
              type="text"
              id="location"
              autoComplete="off"
              placeholder="City"
            />
          </div>
        </div>
        <div className={styles.filterSection}>
          <div className={styles.filterTitle}>
            <p>Filters</p>
          </div>
          <div className={styles.checkBoxContainer}>
            <div className="bottomLine">
              <h3>Vehicle equipment</h3>
            </div>
            <div className={styles.btnsWrapper}>
              {vehicleEquipment.map(({ name, label, icon }) => (
                <Checkbox key={label} name={name} label={label} icon={icon} />
              ))}
            </div>
            <div className="bottomLine">
              <h3>Vehicle Type</h3>
            </div>
            <div className={styles.btnsWrapper}>
              {vehicleType.map(({ value, label, icon }) => (
                <RadioButton
                  key={label}
                  value={value}
                  label={label}
                  icon={icon}
                />
              ))}
            </div>
          </div>
        </div>
        <Button type="submit" text="Search" />
      </form>
    </div>
  );
};

export default CardFilter;
