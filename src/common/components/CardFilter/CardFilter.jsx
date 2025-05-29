import { useContext } from 'react';
import toast from 'react-hot-toast';
import Pagination from '~/utils/context';
import Button from '../Buttons/Button';
import RadioButton from '../Buttons/RadioButton';
import Checkbox from '../Buttons/Checkbox';
import { filterData } from '~/utils/filterData';
import { getFilterParams } from '~/utils/filterParams';
import { vehicleEquipment, vehicleType } from '~/utils/filterIcons';
import { Location } from '../icons/iconsIndex';
import styles from './index.module.css';

const CardFilter = ({ cards, setFilteredCards }) => {
  const { resetPage } = useContext(Pagination);

  const handleSubmit = e => {
    e.preventDefault();
    const filterParams = getFilterParams(e.target);
    let filteredData = filterData(cards, filterParams);

    resetPage();

    setFilteredCards(filteredData);

    const matchesCount = filteredData.length;
    if (matchesCount > 0) {
      toast.success(
        `${matchesCount} match${
          matchesCount > 1 ? 'es' : ''
        } found for your selection`
      );
    } else {
      toast.error('No matches for your selection');
    }

    resetFilterParams(e.target);
  };

  const resetFilterParams = form => {
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
              className={styles.cityInput}
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
            <h3 className={styles.h3Filter}>Vehicle equipment</h3>
            <div className={styles.btnsWrapper}>
              {vehicleEquipment.map(({ name, label, icon }) => (
                <Checkbox key={label} name={name} label={label} icon={icon} />
              ))}
            </div>
            <h3 className={styles.h3Filter}>Vehicle Type</h3>
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
