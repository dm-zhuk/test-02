"use client";
import React from "react";
import ErrorIcon from "img/ErrorIcon.svg";
import css from "./index.module.css";

function Fallback({ error, resetErrorBoundary }) {
  return (
    <div className={css.fallback}>
      <ErrorIcon className={css.imgFB} />
      <h1 className={css.h1FB}> Oops, something went wrong!</h1>
      <p className={css.pFB}></p>
      <button onClick={resetErrorBoundary} className={css.btnFB}>
        Try again
      </button>
    </div>
  );
}
export default Fallback;
