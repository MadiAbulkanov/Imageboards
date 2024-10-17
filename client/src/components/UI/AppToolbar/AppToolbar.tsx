import { AppBar, Box, styled, Toolbar, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

const AppToolbar = () => {

  const StyledLink = styled(Link)(() => ({
    color: 'inherit',
    textDecoration: 'none',
    ['&:hover']: {
      color: 'inherit',
    },
  }));

  return (
    <>
      <AppBar position="fixed">
        <Toolbar>
          <Typography component={StyledLink} to={'/'}>
            Imageboard
          </Typography>
        </Toolbar>
      </AppBar>
      <Box component={Toolbar} marginBottom={2} />
    </>
  );
};

export default AppToolbar;
