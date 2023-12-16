import styles from "../../styles_modules/styles.apod.module.css";
import useFetch from "../../utils/UseFetch.jsx";
import { API_KEY, URL_APOD } from "../../../src/utils/endpoint.js"
import Loading from "../../utils/Loading.jsx";
import Form from "./Form.jsx";

const Apod = () => {
  const { data, loading, error } = useFetch(URL_APOD + API_KEY);

  if (loading) {
    return <div><Loading /></div>
  }

  if (error) {
    return <div>Error: {error.message}</div>
  }

  return (
    <div className={styles.content}>
      <h1 className={styles.title}>Astronomy Picture of the Day</h1>
      <div className={styles.row}>
        <img className={styles.img} src={data.hdurl} alt="" />
        <div className={styles.colum}>
          <p className={styles.explanation}> <h3>Image description</h3>{data.explanation}<p><strong>{data.date}</strong></p></p>
          <div className={styles.apod}>
            <hr />
            <h3>APOD</h3>
            <p>One of the most popular websites at NASA is the Astronomy Picture of the Day. In fact, this website is one of the most popular websites across all federal agencies. It has the popular appeal of a Justin Bieber video. This endpoint structures the APOD imagery and associated metadata so that it can be repurposed for other applications. In addition, if the concept_tags parameter is set to True, then keywords derived from the image explanation are returned. These keywords could be used as auto-generated hashtags for twitter or instagram feeds; but generally help with discoverability of relevant imagery.</p>
            <p>The full documentation for this API can be found in the APOD API Github repository.</p>
            <hr />
            <Form />
            <hr />
          </div>
        </div>
      </div>
    </div>
  )
};


export default Apod;