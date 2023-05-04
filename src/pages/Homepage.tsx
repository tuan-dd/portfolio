import { Avatar, Box, Chip, Stack, Typography, IconButton, Link } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import MediaCard, { IMediaCard } from '../components/Card';

const style = {
  color: '#FFF',
  fontSize: 50,
  textShadow:
    '0 0 5px #FFF, 0 0 10px #FFF, 0 0 15px #FFF, 0 0 20px #94f778, 0 0 30px #94f778, 0 0 40px #94f778, 0 0 55px #94f778, 0 0 75px #49ff18',
};
const icon = [
  { element: <GitHubIcon fontSize='large' />, link: 'https://github.com/tuan-dd' },
  { element: <EmailIcon fontSize='large' />, link: 'mailto:tuandd.310797@gmail.com' },
  {
    element: <LinkedInIcon fontSize='large' />,
    link: 'https://www.linkedin.com/in/anh-tu%E1%BA%A5n-hu%E1%BB%B3nh-v%C4%83n-86a79821b/',
  },
];

const cards: IMediaCard[] = [
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

function Homepage() {
  return (
    <>
      <Stack
        sx={{ position: 'relative', bgcolor: 'background.default' }}
        p={12}
        spacing={8}>
        <Avatar
          sx={{ height: 100, width: 100, m: 'auto', mb: 4 }}
          alt='Tuan'
          src='src/avatar.jpg'
        />
        <Typography
          sx={{
            ...style,
            fontSize: '40px',
            fontWeight: 800,
          }}
          fontFamily='monospace'>
          Hi Im Huynh Van Anh Tuan, a special human with some ability to love learning
          code and working on teamwork.
        </Typography>
        <Stack flexDirection='row' columnGap={3} id='me'>
          <Stack sx={{ paddingRight: 10 }}>
            <Typography variant='h5' color='primary.main'>
              What I do
            </Typography>
            <Typography variant='body1' color='primary.main'>
              I am a <Chip label='Full-stack developer' color='success' /> . I can build
              the Web frontend according to the client's wishes, design the Backend
              according to the project's functions, maintain and clean the code.
            </Typography>
          </Stack>
          <Stack sx={{ width: 300 }}>
            <Typography variant='h5' color='primary.main'>
              Lets connect
            </Typography>
            <Box>
              {icon.map((e, i) => (
                <Link href={e.link} key={i} target='_blank'>
                  <IconButton>{e.element}</IconButton>
                </Link>
              ))}
            </Box>
          </Stack>
        </Stack>
        <Stack id='Featured Project' spacing={3}>
          <Typography variant='h4' color='primary.main'>
            Featured Project
          </Typography>
          {cards.map((card) => (
            <MediaCard key={card.name} {...card} />
          ))}
        </Stack>
      </Stack>
    </>
  );
}

export default Homepage;
