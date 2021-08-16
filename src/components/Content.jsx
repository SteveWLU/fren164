import React from "react";
import FilmCard from "./FilmCard";
import { Grid } from "@material-ui/core";
import Cleo from "../images/cleo.jpg"

const Content = () => {
    return(
        <Grid container spacing={4}>
            <Grid item xs={12} sm={4}>
                <FilmCard 
                title="Cléo de 5 à 7" 
                subtitle="Un film d'Agnès Varda (1966)"
                imgSrc={Cleo} />
            </Grid>
        </Grid>
    )
};

export default Content;