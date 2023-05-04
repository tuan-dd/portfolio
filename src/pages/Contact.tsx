import { Card, CardHeader, List, ListItem, ListItemIcon, Link } from '@mui/material';

import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';

const icon = {
  githubLink: 'https://github.com/tuan-dd',
  linkedinLink: 'mailto:tuandd.310797@gmail.com',
  emailLink:
    'https://www.linkedin.com/in/anh-tu%E1%BA%A5n-hu%E1%BB%B3nh-v%C4%83n-86a79821b/',
  facebookLink: 'https://www.facebook.com/tuan.khome',
};

function Contact() {
  const { githubLink, linkedinLink, emailLink, facebookLink } = icon;
  return (
    <Card sx={{ p: 2, minHeight: '70vh' }}>
      <CardHeader title='Contact me' variant='h5' />
      <nav aria-label='main mailCard folders'>
        <List>
          <ListItem>
            <ListItemIcon>
              <LinkedInIcon sx={{ color: '#006097' }} />
            </ListItemIcon>
            <Link href={linkedinLink} target='_blank' noWrap>
              {linkedinLink}
            </Link>
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <GitHubIcon sx={{ color: '#dfdcf0' }} />
            </ListItemIcon>
            <Link href={githubLink} target='_blank' noWrap>
              {githubLink}
            </Link>
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <FacebookIcon sx={{ color: '#1C9CEA' }} />
            </ListItemIcon>
            <Link href={facebookLink} target='_blank' noWrap>
              {facebookLink}
            </Link>
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <EmailIcon sx={{ color: '#f2e718' }} />
            </ListItemIcon>
            <Link href={emailLink} target='_blank' noWrap>
              {emailLink}
            </Link>
          </ListItem>
        </List>
      </nav>
    </Card>
  );
}

export default Contact;
