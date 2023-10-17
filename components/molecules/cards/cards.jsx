import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';

import Link from 'next/link';
import styles from './cards.module.css'

export default function MediaCard({img, title, description, color, link, linkWeb}) {
  return (
    <Card  style={{backgroundColor:color, color:'white', Width: '100%', borderRadius:'15px'}}>
      <CardMedia
        sx={{ height: 140 }}
        image={img}
        title={title}
        
      />
      <CardContent>
        <div style={{color:'white'}}>
          {title}
        </div>
        <div style={{color:'white'}}>
         {description}
        </div>
      </CardContent>
      <CardActions>
        <Link href={link} target="_blank"> <Button size="small" className={styles.botonGit}>GitHub</Button></Link>
        <Link href={linkWeb} target="_blank"><Button size="small" className={styles.botonWeb}>Pagina Web</Button></Link>
      </CardActions>
    </Card>
  );
}