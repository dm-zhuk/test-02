import React, { useContext } from "react";
import toast from "react-hot-toast";
import Pagination from "../UI/Pagination";
import Button from "../UI/Button";
import { Checkbox } from "components/UI/Checkbox/Checkbox";
import { RadioButton } from "components/UI/RadioButton/RadioButton";
import { Location } from "../icons/icons";
import { vehicleEquipment, vehicleType } from "./helper";
import { getFilterParams } from "utils/filterParams";
import { filterData } from "utils/filterAdverts";
import style from "./index.module.css";

export const VanFilters = ({ adverts, setFilteredAdverts }) => {
  const { resetPage } = useContext(Pagination);

  const handleSubmit = (e) => {
    e.preventDefault();
    const filterParams = getFilterParams(e.target);
    let filteredData = filterData(adverts, filterParams);
    resetPage();

    setFilteredAdverts(filteredData);
    toast.success("Filtered successfully");
    resetFilterParams(e.target);
  };

  const resetFilterParams = (form) => {
    form.reset();
  };

  return (
    <div className={style.filtersWrapper}>
      <form onSubmit={handleSubmit}>
        <div className={style.location}>
          <label htmlFor="location">Location</label>
          <input type="text" name="location" />
          <Location />
        </div>
        <div className={style.filterSection}>
          <h2>Filters</h2>
          <h3>Vehicle Equipment</h3>
          <div className={style.list}>
            {vehicleEquipment.map(({ name, label, icon }) => (
              <Checkbox key={label} name={name} label={label} icon={icon} />
            ))}
          </div>
          <h3>Vehicle Type</h3>
          <div className={style.list}>
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
        <Button type="submit" text="Search" />
      </form>
    </div>
  );
};
