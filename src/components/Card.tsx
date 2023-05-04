import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import { Typography, Link, SxProps } from '@mui/material';
import { styled } from '@mui/system';

export interface IMediaCard {
  name: string;
  linkDemo: string;
  linkRepo: string;
  context: string;
  sx?: SxProps;
}
const CardContentStyle = styled(Typography)(({ theme }) => ({
  [theme.breakpoints.down('lg')]: {
    fontSize: '12px',
  },
}));
const CardTitleStyle = styled(Typography)(({ theme }) => ({
  [theme.breakpoints.down('lg')]: {
    fontSize: '18px',
  },
}));

export default function MediaCard({ name, linkDemo, linkRepo, context, sx }: IMediaCard) {
  return (
    <Card
      sx={{
        display: 'flex',
        flexDirection: 'column',
        maxWidth: 500,
        maxHeight: 600,
        ...sx,
      }}>
      <CardContent sx={{ flexGrow: 1 }}>
        <CardTitleStyle variant='h5' textAlign='center' textTransform='capitalize'>
          {name}
        </CardTitleStyle>
        <CardContentStyle variant='body2' color='primary.main'>
          {context}
        </CardContentStyle>
      </CardContent>
      <CardActions sx={{ flexGrow: 0 }}>
        <Link target='_blank' href={linkDemo === 'Coming soon' ? '#' : linkDemo}>
          <Button size='small'>
            {' '}
            {linkDemo === 'Coming soon' ? 'Coming soon' : 'Demo'}
          </Button>
        </Link>
        <Link target='_blank' href={linkRepo}>
          <Button size='small'>Repo</Button>
        </Link>
      </CardActions>
    </Card>
  );
}
