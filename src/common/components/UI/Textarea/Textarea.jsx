import React from 'react';
import style from './Textarea.module.scss';

export const Textarea = ({
  rows,
  name,
  placeholder = '',
  pattern,
  onChange,
  error,
}) => {
  return (
    <div className={style.wrapper}>
      <textarea
        rows={rows}
        name={name}
        placeholder={placeholder}
        onChange={onChange}
        pattern={pattern}
      />
      {error && <span className={style.error}>{error}</span>}
    </div>
  );
};
