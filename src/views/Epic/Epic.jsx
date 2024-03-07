import React from 'react'
import useFetch from "../../utils/UseFetch.jsx";
import { API_KEY, EPIC } from "../../../src/utils/endpoint.js";
import Loading from "../../utils/Loading.jsx";
import styles from "../../styles_modules/styles.epic.module.css";

function Epic() {

  const { data, loading, error } = useFetch(EPIC + API_KEY);
  console.log(data)

  if (loading) {
    return <div><Loading /></div>
  }

  if (error) {
    return <div>Error: {error.message}</div>
  }

  return (
    <div className={styles.body}>Epic</div>
  )
}

export default Epic