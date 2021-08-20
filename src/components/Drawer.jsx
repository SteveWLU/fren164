import React from "react";
import {
  Drawer as MUIDrawer,
  ListItem,
  List,
  ListItemIcon,
  ListItemText
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { GiCat, GiCalendar, GiBookshelf, GiCubes } from "react-icons/gi";
import { IconContext } from 'react-icons';
import { withRouter } from "react-router-dom";

const useStyles = makeStyles({
  drawer: {
    width: "190px"
  }
});

const Drawer = props => {
  const { history } = props;
  const classes = useStyles();
  const itemsList = [
    {
      text: "Home",
      icon: <GiCat />,
      onClick: () => history.push("/")
    },
    {
      text: "Course",
      icon: <GiBookshelf />,
      onClick: () => history.push("/course")
    },
    {
      text: "Program",
      icon: <GiCalendar />,
      onClick: () => history.push("/program")
    },
    {
      text: "Assignments",
      icon: <GiCubes />,
      onClick: () => history.push("/assignments")
    }
  ];
  return (
    <MUIDrawer variant="permanent" className={classes.drawer}>
      <IconContext.Provider value={{ color: 'blue', size: '3em' }}>
      <List>
        {itemsList.map((item, index) => {
          const { text, icon, onClick } = item;
          return (
            <ListItem button key={text} onClick={onClick}>
              {icon && <ListItemIcon>{icon}</ListItemIcon>}
              <ListItemText primary={text} />
            </ListItem>
          );
        })}
      </List>
      </IconContext.Provider>
    </MUIDrawer>
  );
};

export default withRouter(Drawer);