import React, { useState } from 'react';
import ReactCountryFlag from 'react-country-flag';
import { Box } from '../Box';
import { Typography } from '../Typography';
import {
  Avatar,
  Divider,
  Menu,
  MenuItem,
  useTheme
} from '@mui/material';
import { DarkMode, LightMode, Logout } from '@mui/icons-material';
import { ButtonMui } from '..';
import { useDispatch } from 'react-redux';
import { ChangeThemeAction } from '../../../store/actions/themeActions';
import { useAppSelector } from '../../../store/hooks';
import { useTranslation } from '../../translation/useTranslation';
import { useNavigate } from 'react-router-dom';
import { HandleLogoutAction } from '../../../store/actions/loginActions';

export default function HeadComponent() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const openMenu = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const Theme = useTheme();
  const dispatch = useDispatch();
  const { theme } = useAppSelector((state) => state);
  const t = useTranslation();
  const navigate = useNavigate();
  const [imagem, setImagem] = useState<any>('');

  return (
    <Box
      display={'grid'}
      gridTemplateColumns={'1fr 1fr 1fr'}
      padding={'5px'}
      justifyContent={'space-between'}
      alignContent={'center'}
      sx={{
        background: Theme.palette.primary.main,
        color: Theme.palette.common.white
      }}
    >
      <Box display={'flex'} justifyContent={'flex-start'}>
        <ButtonMui
          variant="text"
          sx={{ color: Theme.palette.common.white }}
          onClick={handleClick}
        >
          <Avatar
            sx={{
              background: Theme.palette.common.white,
              color: Theme.palette.primary.main,
              border: '2px solid white',
              height: '44px',
              width: '44px'
            }}
            src={imagem}
          >
            <img
              src={'/png/azul.png'}
              style={{ height: '46px', width: '46px' }}
            />
          </Avatar>
        </ButtonMui>
      </Box>
      <Menu
        open={openMenu}
        anchorEl={anchorEl}
        onClose={handleClose}
        PaperProps={{
          sx: { margin: '10px', color: Theme.palette.secondary.contrastText }
        }}
      >
        <Typography sx={{ margin: '0 10px' }}>
          {t.getString(t.keys.$language)}
        </Typography>
        <MenuItem
          onClick={() => {
            t.changeLanguage('pt-br');
            handleClose();
          }}
        >
          <Box display="flex" gap="10px">
            <ReactCountryFlag style={{ fontSize: 24 }} svg countryCode="BR" />
            <Typography>Portugues</Typography>
          </Box>
        </MenuItem>
        <MenuItem
          onClick={() => {
            t.changeLanguage('en-us');
            handleClose();
          }}
        >
          <Box display="flex" gap="10px">
            <ReactCountryFlag style={{ fontSize: 24 }} svg countryCode="US" />
            <Typography>English</Typography>
          </Box>
        </MenuItem>
        <Divider />
        <Typography sx={{ margin: '0 10px' }}>
          {t.getString(t.keys.$theme)}
          {theme}
        </Typography>
        <MenuItem
          onClick={() => {
            dispatch(ChangeThemeAction('light'));
            handleClose();
          }}
        >
          <Box display="flex" gap="10px">
            <LightMode />
            <Typography>{t.getString(t.keys.$light)}</Typography>
          </Box>
        </MenuItem>
        <MenuItem
          onClick={() => {
            dispatch(ChangeThemeAction('dark'));
            handleClose();
          }}
        >
          <Box display="flex" gap="10px">
            <DarkMode />
            <Typography>{t.getString(t.keys.$dark)}</Typography>
          </Box>
        </MenuItem>
        <Divider />
        <MenuItem onClick={() => dispatch(HandleLogoutAction())}>
          <Box display="flex" gap="10px">
            <Logout />
            <Typography>{t.getString(t.keys.$exit)}</Typography>
          </Box>
        </MenuItem>
      </Menu>
      <Box display="flex" justifyContent={'center'} gap={'2rem'}>
        <img
          src={'/png/doxfacil.png'}
          style={{ height: '45px', marginTop: '5px' }}
        />
      </Box>
      <Box display={'flex'} justifyContent={'flex-end'}></Box>
    </Box>
  );
}
