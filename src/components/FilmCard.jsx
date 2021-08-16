import React from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import ShareIcon from "@material-ui/icons/Share";
import Typography from '@material-ui/core/Typography';
import { Avatar, CardHeader, IconButton, CardMedia } from '@material-ui/core';

export default function FilmCard(props) {
  const { avatarSrc, title, subtitle, imgSrc, description } = props;

  return (
    <Card>
        <CardHeader
            avatar={
            <Avatar src={avatarSrc} />
            }
            action={
            <IconButton aria-label="settings">
                <ShareIcon />
            </IconButton>
            }
            title={title}
            subheader={subtitle}
        />
        <CardMedia
          style={{height: "200px"}}
          image={imgSrc}
        />
        <CardContent>
            <Typography variant="body2" component="p">
            {description}
            </Typography>
        </CardContent>
        <CardActions>
            <Button size="small">Regarder</Button>
            <Button size="small">Devoirs</Button>
        </CardActions>
    </Card>
  );
}
