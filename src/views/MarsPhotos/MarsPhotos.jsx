import styles from "../../styles_modules/styles.marsPhotos.module.css";
import useFetch from "../../utils/UseFetch.jsx";
import { API_KEY, MARS_PHOTOS } from "../../../src/utils/endpoint.js"
import Loading from "../../utils/Loading.jsx";
import React from "https://cdn.skypack.dev/react@^16.13.1";
import Masonry from "https://cdn.skypack.dev/react-responsive-masonry@2.1.0";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

function MarsPhotos() {
  const { data, loading, error } = useFetch(MARS_PHOTOS + API_KEY);

  if (loading) {
    return <div><Loading /></div>
  }

  if (error) {
    return <div>Error: {error.message}</div>
  }

  return (
    <div className={styles.galery}>
      <div>
        <div className={styles.header}>
          <h1 className={styles.title}>Mars Rover Photos</h1>
          <p>This API is designed to collect image data gathered by NASA's Curiosity, Opportunity, and Spirit rovers on Mars and make it more easily available to other developers, educators, and citizen scientists. This API is maintained by Chris Cerami.</p>

          <p>Each rover has its own set of photos stored in the database, which can be queried separately. There are several possible queries that can be made against the API. Photos are organized by the sol (Martian rotation or day) on which they were taken, counting up from the rover's landing date. A photo taken on Curiosity's 1000th Martian sol exploring Mars, for example, will have a sol attribute of 1000. If instead you prefer to search by the Earth date on which a photo was taken, you can do that, too.</p>

          <p>Along with querying by date, results can also be filtered by the camera with which it was taken and responses will be limited to 25 photos per call. Queries that should return more than 25 photos will be split onto several pages, which can be accessed by adding a 'page' param to the query.</p>
        </div>
        <div className={styles.container}>
          <Masonry columnsCount={3} gutter={4}>
            {data.photos.map((obj) => {

              return (
                <div key={obj.id}>
                  <Card sx={{ Width: 320 }}>
                    <CardMedia
                      sx={{ height: 340 }}
                      image={obj.img_src}
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        photo date: {obj.rover.id}
                        <br />
                        Name: {obj.rover.name}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        fecha terrestre: {obj.earth_date}
                      </Typography>
                    </CardContent>
                  </Card>
                </div>

              )
            })}
          </Masonry>
        </div>
      </div>

    </div>
  )
}

export default MarsPhotos;