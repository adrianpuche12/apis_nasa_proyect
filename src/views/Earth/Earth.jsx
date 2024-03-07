import React from 'react'
import useFetch from "../../utils/UseFetch.jsx";
import { API_KEY, EARTH } from "../../../src/utils/endpoint.js"
import Loading from "../../utils/Loading.jsx";
import styles from "../../styles_modules/styles.earth.module.css"


function Earth() {

  const { data, loading, error } = useFetch(EARTH + API_KEY);
  console.log(data)

  if (loading) {
    return <div><Loading /></div>
  }

  if (error) {
    return <div>Error: {error.message}</div>
  }

  return (
    <div className={styles.body}>Earth</div>
  )
}

export default Earth


//EARTH