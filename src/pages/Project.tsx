import React from 'react';
import { Container, CircularProgress, Box, Typography, Stack, Grid } from '@mui/material';
import axios from 'axios';
import MediaCard, { IMediaCard } from '../components/Card';

const test =
  'https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/';

const apiKey = 'RZ3WBMKU5BFXC8R6VENHXF7JK';

const q = ['Ho Chi Minh', 'London', 'New York', 'Da Nang'];

interface ICurrentConditions {
  temp: number;
}

interface IData {
  address: string;
  currentConditions: ICurrentConditions;
}

// https://music-app-tuan.netlify.app/
const cards: IMediaCard[] = [
  {
    name: 'Custom-avatar',
    linkDemo: 'https://custom-avatar.netlify.app/',
    linkRepo: 'https://github.com/tuan-dd/avatar-creator',
    context: 'Custom beautiful avatar ',
  },
  {
    name: 'cinematrek',
    linkDemo: 'https://cinematrek.netlify.app/',
    linkRepo: 'https://github.com/tuan-dd/movie-web-final-project',
    context:
      'Developed a Netflix-inspired website using : React,Material-UI,React-router,Firebase,React Hook Form,',
  },
  {
    name: 'BUZZNET',
    linkDemo: 'https://buzznet.netlify.app/',
    linkRepo: 'https://github.com/tuan-dd/redux',
    context:
      'As website social media using : React,Material-UI,Redux,React-router,React Hook Form,cloudinary',
  },
  {
    name: 'coder Management',
    linkDemo: '',
    linkRepo: 'https://github.com/tuan-dd/coder-Management',
    context:
      'The backend of the HR management system is a RESTful API that includes full functionality of GET, POST, PUT, and DELETE methods. Certain APIs mandate authorized access through an access token.',
  },
  {
    name: 'Stay mate',
    linkDemo: 'Coming soon',
    linkRepo: 'https://github.com/tuan-dd/Stay-Mate',
    context:
      'The backend of Web book hotel using : nodejs, expressjs, redis, bullmq, mongodb, typescript.This includes booking, payment, create hotel, search, admin, membership, send email, limit auth code,auto soft delete ',
  },
];

function Project() {
  const [data, setData] = React.useState<null | IData>(null);

  const getData = React.useCallback(async () => {
    try {
      const city = Math.floor(Math.random() * 4);
      const response = await axios.get<IData>(`${test}${q[city]}?key=${apiKey}`);
      setData(response.data);
    } catch (error) {
      setData(null);
    }
  }, []);

  React.useEffect(() => {
    getData();
  }, []);

  // console.log(data);
  return (
    <>
      <Container maxWidth='lg' sx={{ mt: 2 }}>
        <Box position='absolute' sx={{ top: 120, right: 30 }}>
          {data ? (
            <Typography color='primary.main'>
              {data.address}: {data.currentConditions.temp} F
            </Typography>
          ) : (
            <Box>
              <CircularProgress color='secondary' />
            </Box>
          )}
        </Box>
        <Stack mt={3} spacing={2}>
          <Typography variant='h4' color='primary.main'>
            Don’t cry over the past, it’s gone. Don’t stress about the future, it hasn’t
            arrived. Live in the present and make it beautiful
          </Typography>
          <Box sx={{ width: '100%' }}>
            <Grid container spacing={2}>
              {cards.map((card) => (
                <Grid key={card.name} xs={6} sm={4} lg={4} item>
                  <MediaCard {...card} sx={{ height: 240 }} />
                </Grid>
              ))}
            </Grid>
          </Box>
        </Stack>
      </Container>
    </>
  );
}

export default Project;
