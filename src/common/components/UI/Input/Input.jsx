import React from 'react';
import style from './Input.module.scss';

export const Input = ({
  type,
  name,
  placeholder = '',
  pattern,
  onChange,
  error,
}) => {
  return (
    <div className={style.wrapper}>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        onChange={onChange}
        pattern={pattern}
      />
      {error && <span className={style.error}>{error}</span>}
    </div>
  );
};
