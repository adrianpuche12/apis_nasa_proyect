import React from 'react'
import styles from "../../styles_modules/styles.neows.module.css"
import { API_KEY, URL_NEW_ES } from "../../../src/utils/endpoint.js"
import useFetch from "../../utils/UseFetch.jsx";
import Loading from "../../utils/Loading.jsx";

function NeoWs() {

  const { data, loading, error } = useFetch(URL_NEW_ES + API_KEY);
  console.log(data)

  if (loading) {
    return <div><Loading /></div>
  }

  if (error) {
    return <div>Error: {error.message}</div>
  }


  return (
    <div className={styles.title}>New-es</div>
  )

}

export default NeoWs;