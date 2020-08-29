
import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MailIcon from '@material-ui/icons/Mail';
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import './Home.css';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import EventNoteSharpIcon from '@material-ui/icons/EventNoteSharp';
import EventAvailableSharpIcon from '@material-ui/icons/EventAvailableSharp';
import FlipCameraAndroidSharpIcon from '@material-ui/icons/FlipCameraAndroidSharp';

export default function Home(props) {
  const { window } = props;
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const bull = <span className="bullet">•</span>;

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <div className="toolbar" />
      <Divider />
      <List>
        {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {['All mail', 'Trash', 'Spam'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;
 
  return (
    <div className="dashboard">
      <CssBaseline />
      <nav className="drawer" aria-label="mailbox folders">
        <Hidden smUp implementation="css">
          <Drawer
            container={container}
            variant="temporary"
            anchor={theme.direction === 'rtl' ? 'right' : 'left'}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper:"drawerPaper",
            }}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>
        <Hidden xsDown implementation="css">
          <Drawer
            classes={{
              paper: "drawerPaper",
            }}
            variant="permanent"
            open
          >
            {drawer}
          </Drawer>
        </Hidden>
      </nav>
      <main className="content">
        <div className="toolbar" />
        <div className="root">
      <Card className= "root">
        <CardContent>
          <Typography className="title" color="primary" gutterBottom>
            Juliana Garzon Duque
          </Typography>
          <Typography variant="h5" component="h2">
                 {bull}Implement Login View
          </Typography>
          <Typography className="pos" color="error" variant="overline">
            In progress
          </Typography>

          <Typography variant="body2" component="p">
          <EventNoteSharpIcon></EventNoteSharpIcon>
           
          </Typography>
        </CardContent>
      </Card>
      <br>
      </br>
      <Card className= "root">
        <CardContent>
          <Typography className="title" color="primary" gutterBottom>
            Juliana Garzon Duque
          </Typography>
          <Typography variant="h5" component="h2">
          {bull}Implement Login Controller
          </Typography>
          <Typography className="pos" color="error" variant="overline">
            Finished
          </Typography>
          <Typography variant="body2" component="p">
          
          <EventAvailableSharpIcon></EventAvailableSharpIcon>
           
          </Typography>
        </CardContent>
        
      </Card>
      <br>
      </br>

      <Card className= "root">
        <CardContent>
          <Typography className="title" color="primary" gutterBottom>
            Juliana Garzon Duque
          </Typography>
          <Typography variant="h5" component="h2">
          {bull} Implement Tool Bar 
          </Typography>
          <Typography className="pos" color="secondary" variant="overline">
            In progress
          </Typography>
          <Typography variant="body2" component="p">
          
          <EventNoteSharpIcon></EventNoteSharpIcon>
           
          </Typography>
        </CardContent>
        
      </Card>
      <br>
      </br>

      <Card className= "root">
        <CardContent>
          <Typography className="title" color="primary" gutterBottom>
            Juliana Garzon Duque
          </Typography>
          <Typography variant="h5" component="h2">
          {bull}Implement Register View
          </Typography>
          <Typography className="pos" color="initial" variant="overline">
            To do
          </Typography>
          <Typography variant="body2" component="p">
          
            <FlipCameraAndroidSharpIcon></FlipCameraAndroidSharpIcon>
           
          </Typography>
        </CardContent>
        
      </Card>
      <br>
      </br>
      
      <Card className= "root">
        <CardContent>
          <Typography className="title" color="primary" gutterBottom>
            Juliana Garzon Duque
          </Typography>
          <Typography variant="h5" component="h2">
          {bull}  Implement Dashboard View
          </Typography>
          <Typography className="pos" color="error" variant="overline">
           Finished
          </Typography>
         
          <Typography variant="body2" component="p">
          
          <EventAvailableSharpIcon></EventAvailableSharpIcon>
           
          </Typography>
        </CardContent>
        
      </Card>
      </div>
        
      </main>
    </div>
  );
}

Home.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};


