import React from 'react'
import useFetch from "../../utils/UseFetch.jsx";
import { API_KEY, MARS_PHOTOS } from "../../../src/utils/endpoint.js";
import Loading from "../../utils/Loading.jsx";
import styles from "../../styles_modules/styles.exoplanet.module.css";

function Exoplanet() {
  return (
    <div className={styles.body}>Exoplanet</div>
  )
}

export default Exoplanet