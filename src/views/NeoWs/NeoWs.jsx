import React from 'react'
import styles from "../../styles_modules/styles.neows.module.css"
import { URL_NEW_ES } from "../../../src/utils/endpoint.js"
import useFetch from "../../utils/UseFetch.jsx";
import Loading from "../../utils/Loading.jsx";


function NeoWs() {


  const { data, loading, error } = useFetch(URL_NEW_ES);
  const _values = Object.values(data);
  

  if (loading) {
    return <div><Loading /></div>
  }

  if (error) {
    return <div>Error: {error.message}</div>
  }

  return (
    <div>

      <div className={styles.title}>New-es........</div>
      {data.near_earth_objects.map((item) => (
        <h1>{item}</h1>
      ))}

    </div>

  )

}

export default NeoWs;