import { Box, Typography, Button } from '@mui/material';

export default function Hero() {
  return (
    <Box
      sx={{
        width: '100vw',
        height: '100vh',
        margin: 0,
        padding: 0,
        overflow: 'hidden',
        backgroundImage: `url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1470&q=80')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        display: 'flex',
        alignItems: 'center',
        pl: { xs: 3, md: 10 },
        boxSizing: 'border-box',
        color: '#fff'
      }}
    >
      <Box>
        <Typography variant="h3" fontWeight="bold" gutterBottom>
          Discover Your Next Adventure
        </Typography>
        <Typography variant="h6" gutterBottom>
          Choose from our curated experiences
        </Typography>
        <Button variant="contained"   sx={{
    backgroundColor: '#f39c12',
    color: '#000',
    textTransform: 'none',
    '&:hover': {
      backgroundColor: '#d48806', 
    },
  }}>
          Book Now
        </Button>
      </Box>
    </Box>
  );
}
