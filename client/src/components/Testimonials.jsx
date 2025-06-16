import {
  Box,
  Typography,
  Card,
  CardContent,
  Avatar,
  useMediaQuery,
  useTheme,
} from '@mui/material';

const testimonials = [
  {
    name: 'Anjali Mehta',
    company: 'Travel Blogger',
    image: '/images/anjali.jpg',
  },
  {
    name: 'Rahul Verma',
    company: 'Photographer',
    image: '/images/rahul.jpg',
  },
  {
    name: 'Priya Kapoor',
    company: 'Designer',
    image: '/images/priya.jpg',
  },
];

export default function Testimonials() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Box
      component="section"
      sx={{
        width: '100%',
        py: 6,
        px: { xs: 2, sm: 4 },
        backgroundColor: '#f9f9f9',
        overflowX: 'auto',
      }}
    >
      <Typography
        variant="h5"
        fontWeight="bold"
        textAlign="center"
        gutterBottom
        sx={{ mb: 4 }}
      >
        Testimonials
      </Typography>

      <Box
        sx={{
          display: 'flex',
          gap: 4,
          flexDirection: isMobile ? 'column' : 'row',
          justifyContent: 'center',
        }}
      >
        {testimonials.map((item, index) => (
          <Box key={index} sx={{ position: 'relative', width: isMobile ? '100%' : 300 }}>
            {/* Floating avatar */}
            <Avatar
              src={item.image}
              alt={item.name}
              sx={{
                width: 64,
                height: 64,
                position: 'absolute',
                top: -32,
                left: 24,
                border: '3px solid white',
                zIndex: 1,
              }}
            />

            {/* Testimonial Card  that is below of the aur site*/}
            <Card
              sx={{
                pt: 6,
                pb: 3,
                px: 3,
                minHeight: 220,
                boxShadow: 3,
              }}
            >
              <CardContent>
                <Typography variant="body2" color="text.secondary" mb={2}>
                  Text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.
                </Typography>
                <Typography variant="subtitle1" fontWeight="bold">
                  {item.name}
                </Typography>
                <Typography variant="caption" color="text.secondary">
                  {item.company}
                </Typography>
              </CardContent>
            </Card>
          </Box>
        ))}
      </Box>
    </Box>
  );
}
