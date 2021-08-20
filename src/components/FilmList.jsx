import React from 'react'
import { Grid } from '@material-ui/core'
import Content from './Content'

export default function FilmList() {
    return (
        <div>
            <Grid container direction="column">
                <Grid item>
                </Grid>
                <Grid item container>
                <Grid xs={false} sm={2} />
                <Grid item xs={12} sm={8}>
                <Content />
                </Grid>
                <Grid xs={false} sm={2} />
                </Grid>
            </Grid>
        </div>
    )
}
