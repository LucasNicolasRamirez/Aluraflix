import React from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, Typography } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import ReactMarkdown from 'react-markdown';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const socialIcons = {
  github: FaGithub,
  linkedin: FaLinkedin,
  twitter: FaTwitter
};

const DialogVideo = ({ open, selectedVideo, onClose }) => {
  if (!selectedVideo || !selectedVideo.title || !selectedVideo.url) {
    return null; 
  }

  return (
    <Dialog
      open={open}
      onClose={onClose}
      fullWidth
      maxWidth="lg"
      sx={{
        '& .MuiPaper-root': {
          backgroundColor: '#262626',
          color: '#FFF',
          borderRadius: '20px',
        },
      }}
    >
      <DialogActions sx={{ justifyContent: 'space-between' }} >
        <DialogTitle>
          <Typography variant="h5" component="div" sx={{ fontWeight: 'bold' }}>
            {selectedVideo.title}
          </Typography>
        </DialogTitle>
        <Button onClick={onClose} color="primary" sx={{
          '&:hover': {
            backgroundColor: 'transparent',
            boxShadow: 'none',
          }
        }} >
          <CloseIcon sx={{ scale: 1.8 }} />
        </Button>
      </DialogActions>
      <DialogContent
        sx={{
          maxHeight: 'auto',
          overflowY: 'auto',
          '&::-webkit-scrollbar': {
            width: '8px', gap: '10px',
          },
          '&::-webkit-scrollbar-thumb': {
            backgroundColor: '#888',
            borderRadius: '10px',
          },
          '&::-webkit-scrollbar-thumb:hover': {
            backgroundColor: '#555',
          },
          '&::-webkit-scrollbar-track': {
            borderRadius: '10px',
          },
          padding: '1rem',
        }}
      >
        <div style={{ position: 'relative', width: '100%', height: 0, paddingBottom: '56.25%' }}>
          <iframe
            src={selectedVideo.url}
            title={selectedVideo.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              borderRadius: '10px',
            }}
          />
        </div>
        <Typography 
          variant="body1" 
          component="div" 
          sx={{ 
            fontWeight: '400', 
            marginTop: 2,
            '& a': {
              color: '#61dafb',
              textDecoration: 'none',
              '&:hover': {
                textDecoration: 'underline'
              }
            }
          }}
        >
          <ReactMarkdown 
            components={{
              a: ({node, ...props}) => {
                const platformMatch = props.href.match(/\/(github|linkedin|twitter)\//i);
                const platform = platformMatch ? platformMatch[1].toLowerCase() : null;
                const Icon = platform ? socialIcons[platform] : null;
                
                return Icon ? (
                  <a 
                    href={props.href} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    style={{ 
                      display: 'inline-flex', 
                      alignItems: 'center', 
                      color: '#61dafb',
                      textDecoration: 'none',
                      margin: '0 5px'
                    }}
                  >
                    <Icon style={{ marginRight: '5px' }} /> {props.children}
                  </a>
                ) : (
                  <a 
                    {...props} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    style={{ 
                      color: '#61dafb', 
                      textDecoration: 'underline' 
                    }}
                  />
                );
              },
            }}
          >
            {selectedVideo.descripcion}
          </ReactMarkdown>
        </Typography>
      </DialogContent>
    </Dialog>
  );
};

export default DialogVideo;
