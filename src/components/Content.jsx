import React from "react";
import FilmCard from "./FilmCard";
import { Grid } from "@material-ui/core";
import { FilmList } from "../data/FilmList"

const Content = () => {

    const getFilmCard = (FilmListObj) => {
        return(
            <Grid item xs={12} sm={4}>
                <FilmCard {...FilmListObj} />
            </Grid>
        )
    }
    return(
        <Grid container spacing={4}>
            {FilmList.map(FilmListObj => getFilmCard(FilmListObj))}
        </Grid>
    )
};

export default Content;