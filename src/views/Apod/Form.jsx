import React, { useState } from "react";
import { Button } from "@mui/material";
import styles from "../../styles_modules/styles.form_apod.module.css";

const Form = () => {

    let defaultDate = new Date()
    defaultDate.setDate(defaultDate.getDate())
    const [date, setDate] = useState(defaultDate)

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(date)
    }

    return (
        <div>
            <p>Here you can search the picture than you want to see</p>
            <form action="" className={styles.form} onSubmit={handleSubmit}>
                <label htmlFor="">Choose Date</label>
                <input className={styles.calendar} type="date"
                    onChange={(e) => setDate(e.target.value)} />
                <br />
                <Button variant="contained" type="submit" >Send</Button>
            </form>
        </div>
    )
};


export default Form;