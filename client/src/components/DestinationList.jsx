import { useQuery } from 'react-query';
import axios from 'axios';
import {
  Box,
  Typography,
  Grid,
  Card,
  CardMedia,
  CardContent,
  Skeleton,
} from '@mui/material';

export default function DestinationList() {
  const { data, isLoading } = useQuery('destinations', async () => {
    const res = await axios.get('http://localhost:8000/api/destinations/destinations');
    return res.data;
  });

  const itemsToShow = isLoading ? Array.from({ length: 6 }) : data.slice(0, 6);

  return (
    <Box
      component="section"
      sx={{
        width: '100%',
        backgroundColor: '#fff',
        py: 6,
        px: { xs: 2, sm: 4 },
      }}
    >
      <Typography
        variant="h5"
        fontWeight="bold"
        gutterBottom
        sx={{ textAlign: 'center', mb: 4 }}
      >
        Explore Most Popular Destinations
      </Typography>

      <Grid container spacing={4} justifyContent="center">
        {itemsToShow.map((dest, index) => (
          <Grid item xs={12} sm={6} md={4} key={dest?._id || index}>
            <Card
              sx={{
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                boxShadow: 3,
              }}
            >
              {isLoading ? (
                <>
                  <Skeleton variant="rectangular" height={180} />
                  <CardContent>
                    <Skeleton height={24} width="80%" />
                    <Skeleton height={20} width="60%" />
                  </CardContent>
                </>
              ) : (
                <>
                  <CardMedia
                    component="img"
                    height="180"
                    image={`http://localhost:8000/${dest.image}`}
                    alt={`Image of ${dest.name}`}
                    sx={{ objectFit: 'cover' }}
                  />
                  <CardContent>
                    <Typography variant="h6" fontWeight="bold" gutterBottom>
                      {dest.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Starting from ₹{dest.price}
                    </Typography>
                  </CardContent>
                </>
              )}
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
