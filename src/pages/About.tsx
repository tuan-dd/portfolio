import { Avatar, Stack, Typography } from '@mui/material';

function About() {
  return (
    <>
      <Stack padding={10} spacing={4} justifyContent='center' alignItems='center'>
        <Avatar sx={{ height: 200, width: 200 }} alt='Tuan' src='/avatar.jpg' />
        <Typography variant='body1' color='primary.main'>
          Hello and welcome! My name is Huynh Van Anh Tuan, and I am a full-stack
          developer with a passion for coding and a focus on backend development. While I
          initially studied auto engineering, my love for computers eventually led me to
          pursue a career in software development. I have extensive experience and
          knowledge in various programming languages including Java, Python, and
          JavaScript, as well as frameworks such as Node.js, React, and Angular. I always
          strive to stay up to date with the latest coding trends and technologies, and I
          am constantly seeking new challenges and opportunities to expand my skills.
          Throughout my career, I have worked on projects ranging from small-scale web
          applications to large enterprise solutions. I pride myself on my attention to
          detail, problem-solving abilities, and the ability to work well under pressure.
          In summary, I am an enthusiastic and driven full-stack developer with a
          particular passion for backend development. I look forward to working on
          challenging and innovative projects that push the boundaries of what's possible
          in the world of software development.
        </Typography>
      </Stack>
    </>
  );
}

export default About;
