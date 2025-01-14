import React, { useState } from 'react';
import { Card, CardActions, Typography, } from '@mui/material';
import EliminarVideo from '../EliminarVideo/EliminarVideo';
import FormEdicion from '../FormEdicion/FormEdicion';

const VideoCard = ({ video, onClick, categoryColor = '#FFFFFF' }) => {
  const [show, setShow] = useState(true);

  const handleDelete = () => {
    setShow(false);
  };

  return (

      <Card 
        className='card'
        key={video.id}
        sx={{ 
          width: "calc(33.33% - 40px)", 
          Width: "100%",
          flex: "0 0 auto",
          height:"100%",
          backgroundColor: '#000', 
          borderRadius: '10px',
          cursor: "pointer",
          boxSizing: "border-box",
          transition: "transform .5s ease, box-shadow .5s ease",
          '&:hover': {
            transform: "scale(1.04)",
            boxShadow: `0 0 20px 5px ${categoryColor}`,
          }
        }}
      >
        <div
          style={{ position: 'relative', paddingTop: '56.25%', cursor: 'pointer' }}
          onClick={onClick}
        >
          <iframe
            src={video.url}
            title={video.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              borderRadius: '10px',
              pointerEvents: 'none',
            }}
          />
        </div>
        <div>
          <Typography
            sx={{
              color: '#FFF',
              textAlign: 'center',
              paddingTop: '15px',
              fontWeight: 'bold',
              fontSize: '24px',
              borderBottom: '1px solid #FFF',
            }}
          >
            {video.title}
          </Typography>
        </div>
        <CardActions sx={{ justifyContent: 'space-evenly' }}>
          <EliminarVideo video={video} onDelete={handleDelete} />
          <FormEdicion video={video} />
        </CardActions>
      </Card>

  );
};

export default VideoCard;
