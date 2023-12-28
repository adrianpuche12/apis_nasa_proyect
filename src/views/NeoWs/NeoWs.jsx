import React from 'react'
import styles from "../../styles_modules/styles.neows.module.css"
import { URL_NEW_ES } from "../../../src/utils/endpoint.js"
import useFetch from "../../utils/UseFetch.jsx";
import Loading from "../../utils/Loading.jsx";

function NeoWs() {

  const { data, loading, error } = useFetch(URL_NEW_ES);

  return (
    <div className={styles.title}>New-es</div>
  )

}

export default NeoWs;