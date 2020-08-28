
  import React from 'react';
  import Card from '@material-ui/core/Card';
  import CardActions from '@material-ui/core/CardActions';
  import CardContent from '@material-ui/core/CardContent';
  import Button from '@material-ui/core/Button';
  import Typography from '@material-ui/core/Typography';
  import './Home.css';

  
 
  
  export default function Home() {
    
    const bull = <span className="bullet">•</span>;
  
    return (
      <Card className= "root">
        <CardContent>
          <Typography className="title" color="textSecondary" gutterBottom>
            Word of the Day
          </Typography>
          <Typography variant="h5" component="h2">
            be{bull}nev{bull}o{bull}lent
          </Typography>
          <Typography className="pos" color="textSecondary">
            adjective
          </Typography>
          <Typography variant="body2" component="p">
            well meaning and kindly.
            <br />
            {'"a benevolent smile"'}
          </Typography>
        </CardContent>
      </Card>
    );
  }