import { Typography, Box,useTheme } from "@mui/material";
import { tokens } from "../theme";

const Header = ({title , subtitle}) => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    return <Box mb="30px">
<Typography variant="h2" sx={{color:colors.grey[100] , mb:"5px" , fontWeight:"bold"}}>{title}</Typography>
<Typography variant="h5" sx={{color:colors.greenAccent[400] }} >{subtitle}</Typography>
 </Box>

};
export default Header;