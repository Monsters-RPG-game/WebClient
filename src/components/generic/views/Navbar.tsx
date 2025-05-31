import * as hooks from '../../../redux'
import AppBar from '@mui/material/AppBar';
import { useEffect, useState } from 'react'
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import MenuIcon from '@mui/icons-material/Menu';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { InvisibleLink } from '../../customs';

const unauthorizedNav: {label: string, path: string}[] = [
  { label: 'About', path: '/about' },
];

const authorizedNav:{label: string, path: string}[] = [
  { label: 'About', path: '/about' },
];

const NavBar = () => {
  const { id } = useSelector(hooks.accountState);
  const [anchorElNav, setAnchorElNav] = useState<HTMLElement | null>(null);
  const [pages, setPages] = useState<{label: string, path: string}[]>([])
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

    useEffect(() => {
        if(id) {
            setPages(authorizedNav)
    } else {
            setPages(unauthorizedNav)
        }
    }, [id])

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed">
        <Toolbar>
          {isMobile && (
            <>
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                onClick={handleOpenNavMenu}
                sx={{ mr: 2 }}
              >
                <MenuIcon />
              </IconButton>
              <Menu
                anchorEl={anchorElNav}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
              >
                {pages.map((page) => (
                  <MenuItem
                    key={page.label}
                    component={Link}
                    to={page.path}
                    onClick={handleCloseNavMenu}
                  >
                    <Typography textAlign="center">{page.label}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </>
          )}

          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1 }}
          >
            <InvisibleLink to="/">
              Monsters
            </InvisibleLink>
          </Typography>

          {!isMobile && (
            <Box>
              {pages.map((page) => (
                <Button
                  key={page.label}
                  color="inherit"
                  component={Link}
                  to={page.path}
                >
                  {page.label}
                </Button>
              ))}
            </Box>
          )}
        </Toolbar>
      </AppBar>

      <Toolbar />
    </Box>
  );
};

export default NavBar;

