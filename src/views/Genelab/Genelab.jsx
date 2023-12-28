import React from 'react'
import useFetch from "../../utils/UseFetch.jsx";
import { API_KEY, MARS_PHOTOS } from "../../../src/utils/endpoint.js";
import Loading from "../../utils/Loading.jsx";
import styles from "../../styles_modules/styles.genelab.module.css";

function Genelab() {
  return (
    <div className={styles.body}>Genelab</div>
  )
}

export default Genelab