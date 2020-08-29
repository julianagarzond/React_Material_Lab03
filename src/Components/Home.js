
 import React from 'react';
  import Card from '@material-ui/core/Card';
  import CardContent from '@material-ui/core/CardContent';
  import Typography from '@material-ui/core/Typography';
  import './Home.css';
  import EventNoteSharpIcon from '@material-ui/icons/EventNoteSharp';
  import EventAvailableSharpIcon from '@material-ui/icons/EventAvailableSharp';
  import FlipCameraAndroidSharpIcon from '@material-ui/icons/FlipCameraAndroidSharp';

const drawerWidth = 240;
  
  export default function Home(props) {
    const { window } = props;
    const [open, setOpen] = React.useState(false);
    const bull = <span className="bullet">•</span>;

    const handleDrawer= () => {
      setOpen(!open);
    };
  
    return (
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
      
    );
  }