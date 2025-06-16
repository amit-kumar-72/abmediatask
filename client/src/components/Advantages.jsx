import { Box, Typography } from '@mui/material';
import {
  FaClock,
  FaMoneyBill,
  FaNetworkWired,
  FaMapMarkedAlt,
} from 'react-icons/fa';

const advantages = [
  {
    icon: <FaClock size={36} />,
    title: 'Save Time',
    description: 'No more switching for packages or plans.',
  },
  {
    icon: <FaMoneyBill size={36} />,
    title: 'Save Money',
    description: 'Compare, negotiate, and choose the best.',
  },
  {
    icon: <FaNetworkWired size={36} />,
    title: 'Trusted Network',
    description: 'A Trusted Network of 7000+ Travel Agents.',
  },
  {
    icon: <FaMapMarkedAlt size={36} />,
    title: 'Multiple Options',
    description: 'Itineraries & Travel Tips from Trusted Agents.',
  },
];

export default function Advantages() {
  return (
    <Box
      component="section"
      sx={{
        width: '100%',
        py: 6,
        px: { xs: 2, sm: 4 },
        backgroundColor: '#57EBE1',
        m: 0,
      }}
    >
      <Typography
        variant="h5"
        fontWeight="bold"
        gutterBottom
        textAlign="center"
      >
        Our Advantages
      </Typography>

      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: 2,
          mt: 4,
        }}
      >
        {advantages.map((adv, index) => (
          <Box
            key={index}
            sx={{
              flex: '1 1 22%', 
              minWidth: 200,
              maxWidth: 250,
              backgroundColor: '#fff',
              borderRadius: 2,
              boxShadow: 3,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              textAlign: 'center',
              overflow: 'hidden',
            }}
          >
            {/* Icon with white background circle */}
            <Box
              sx={{
                backgroundColor: '#fff',
                borderRadius: '50%',
                p: 2,
                mt: 3,
                boxShadow: 1,
              }}
            >
              <Box color="primary.main">{adv.icon}</Box>
            </Box>

            {/* Text section with green background */}
            <Box
              sx={{
                // backgroundColor: '#57EBE1',
                width: '100%',
                mt: 2,
                py: 2,
                px: 1,
              }}
            >
              <Typography variant="h6" fontWeight="bold" gutterBottom>
                {adv.title}
              </Typography>
              <Typography
                variant="body2"
                color="text.primary"
              >
                {adv.description}
              </Typography>
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
}
