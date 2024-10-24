import style from './RadioButton.module.scss';

export const RadioButton = ({ label, icon, value }) => {
  return (
    <div className={style.container}>
      <input
        className={style.hidden}
        type="radio"
        id={label}
        name="form"
        value={value}
      />
      <label htmlFor={label} className={style.label}>
        {icon}
        {label}
      </label>
    </div>
  );
};
