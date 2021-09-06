import React from "react";
import classes from "./MyButton.module.css";

const MyInput = ({children, ...props}) => {
    return (
        <input {...props} className={classes.myBtn} />
    )
}

export default MyInput;