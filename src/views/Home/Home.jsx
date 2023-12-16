import React from 'react'
import dataHome from '../../utils/api-home';
import styles from "../../styles/home.module.css"
import { Link } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

function Home() {
  return (
    <div className={styles.component}>
      <div className={styles.flex}>
        {dataHome.map((card_home) => (
          <Link key={card_home.title} to={card_home.url}>
            <Card sx={{ width: 260, height: 340, color: "white", bgcolor: "black", margin: '30px' }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="140"
                  Width="300"
                  image={card_home.image}
                  alt="img"
                />
                <CardContent sx={{ height: 140, marginTop: '22px' }}>
                  <Typography gutterBottom variant="h5" component="div">
                    {card_home.title}
                  </Typography>
                  <Typography sx={{ color: "white" }} variant="body2" color="text.secondary">
                    {card_home.description}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  )
}


export default Home;