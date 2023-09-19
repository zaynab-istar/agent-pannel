import { Box, useTheme } from "@mui/material";
import ChoroplethChart from "../../components/ChoroplethChart";
import Header from "../../components/Header";
import { tokens } from "../../theme";

const Choropleth = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box m="20px">
      <Header title="Geography" subtitle="Simple Geography Chart" />

      <Box
        height="75vh"
        border={`1px solid ${colors.grey[100]}`}
        borderRadius="4px"
      >
        <ChoroplethChart />
      </Box>
    </Box>
  );
};

export default Choropleth;