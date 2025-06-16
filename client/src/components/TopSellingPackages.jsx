import { useQuery } from 'react-query';
import axios from 'axios';
import {
  Grid,
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
  Skeleton,
  Box,
} from '@mui/material';

export default function TopSellingPackages() {
  const { data, isLoading } = useQuery('topPackages', async () => {
    // data fetching from backend and show to my frontend page 
    const res = await axios.get('http://localhost:8000/api/packages/top-selling ');  
    return res.data;
  });

  const packagesToShow = isLoading ? Array.from({ length: 6 }) : data.slice(0, 6);

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
        Top Selling Tour Packages of India
      </Typography>

      <Grid container spacing={4} justifyContent="center">
        {packagesToShow.map((pkg, index) => (
          <Grid item xs={12} sm={6} md={4} key={pkg?._id || index}>
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
                    image={`http://localhost:8000/${pkg.image}`}
                    alt={`Image of ${pkg.name}`}
                    sx={{ objectFit: 'cover' }}
                  />
                  <CardContent>
                    <Typography variant="h6" fontWeight="bold" gutterBottom>
                      {pkg.name}
                    </Typography>
                    
                    <Button
                      variant="outlined"
                      size="small"
                      sx={{ mt: 2, textTransform: 'none' }}
                    >
                      View Details
                    </Button>
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
