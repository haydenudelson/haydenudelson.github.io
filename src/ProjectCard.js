import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const ProjectCard = ({
  name, description, link
}) => (
    <Card sx={{
      width: '100%',
      marginTop: 4,
      marginBottom: 4,
      marginRight: 2,
      backgroundColor: '#F5F6F7',
      color: '#181311'
     }}>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button sx={{margin: 'auto'}}size="small" onClick={() => window.open(link)}>Repository</Button>
      </CardActions>
    </Card>
  );

export default ProjectCard;
