import {Box ,IconButton, useTheme, InputBase} from '@mui/material';
import {useContext} from 'react';
import {ColorModeContext, tokens} from '../../theme';
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import SearchIcon from '@mui/icons-material/Search';

const Topbar = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const colorMode = useContext(ColorModeContext);
    return (
           <Box display="flex" justifyContent="space-between" sx={{p:3}} >
            {/*Search Box*/}
            <Box display="flex" backgroundColor={colors.primary[400]} borderRadius="3px">
             <InputBase placeholder="Search" sx={{ml:2 , flex:1}}/>
             <IconButton type='button' >
                    <SearchIcon/>        
               </IconButton>
            </Box>
            {/*Icons*/}
            <Box display="flex">
               <IconButton onClick={colorMode.toggleColorMode}>
                {theme.palette.mode === 'dark' ?(
                    <DarkModeOutlinedIcon/>
                ):(
                    <LightModeOutlinedIcon/>
                )}
                 

                </IconButton>
                <IconButton>
                  <NotificationsNoneOutlinedIcon/>
                </IconButton>
                <IconButton>
                    <SettingsOutlinedIcon/>
                </IconButton>
                <IconButton>
                    <PersonOutlineOutlinedIcon/>
                </IconButton>
            </Box>

           </Box>
    );
};

export default Topbar;