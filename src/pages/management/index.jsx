import React, { useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { tokens } from '../../theme';
import { mockDataTeam } from "../../data/mockData";
import { Box, TextField, useTheme } from '@mui/material';
import AdminPanelSettingsOutlinedIcon from '@mui/icons-material/AdminPanelSettingsOutlined';
import LockOpenOutlinedIcon from '@mui/icons-material/LockOpenOutlined';
import SecurityOutlinedIcon from '@mui/icons-material/SecurityOutlined';
import Header from '../../components/Header';
import SearchIcon from '@mui/icons-material/Search';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';

const HEADER_HEIGHT = 56; // typical height for the DataGrid header
const ROW_HEIGHT = 52; // typical height for a row in DataGrid

function Management() {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const [searchTerm, setSearchTerm] = useState("");
    const [rows, setRows] = useState([]);
    const [hasSearched, setHasSearched] = useState(false);

    const handleSearch = (e) => {
        if (e.key === "Enter") {
            setHasSearched(true);
            const filteredRows = mockDataTeam.filter(
                (row) =>
                    row.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                    row.id.toString().includes(searchTerm)
            );
            setRows(filteredRows);
        }
    };

    const columns = [
        {
            field: 'id',
            headerName: 'ID',
        },
        {
            field: 'name',
            headerName: 'Name',
            flex: 1,
            cellClassName: "name-column--cell",
        },
        {
            field: 'email',
            headerName: 'Email',
            flex: 1,
        },
        {
            field: 'age',
            headerName: 'Age',
            type: 'number',
        },
        {
            field: 'phone',
            headerName: 'Phone Number',
            flex: 1,
        },
        {
            field: 'access',
            headerName: 'Access Level',
            flex: 1,
            renderCell: ({ row: { access } }) => {
                return (
                    <Box
                        width="60%"
                        m="0 auto"
                        p="5px"
                        display="flex"
                        justifyContent="center"
                        backgroundColor={
                            access === "admin"
                                ? colors.greenAccent[600]
                                : colors.greenAccent[700]
                        }
                        borderRadius="10px"
                    >
                        {access === "admin" && <AdminPanelSettingsOutlinedIcon />}
                        {access === "manager" && <SecurityOutlinedIcon />}
                        {access === "user" && <LockOpenOutlinedIcon />}
                    </Box>
                );
            },
        },
    ];
    const gridHeight = Math.min(rows.length * ROW_HEIGHT + HEADER_HEIGHT, 400); // Max height of 400 for this example

    return (
        <Box m="20px">
            <Header title="Management" subtitle="Manage your codes here." />
            <Box 
            display={'flex'}
            backgroundColor={colors.primary[400]}
            borderRadius="3px" 
            width={'18%'} 
            mb={'40px'}>
             <InputBase 
              placeholder="Search" 
              sx={{ml:2 , flex: 1}}
              variant="outlined"
              label="Search"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              onKeyPress={handleSearch}
              InputProps={{
              startAdornment: <SearchIcon />,
              }}
             />
             <IconButton type='button' >
                    <SearchIcon/>        
               </IconButton>
            </Box>
            <Box 
            sx={{ height: `${gridHeight}px`, 
            width: '100%',
            '& .MuiDataGrid-root': {
                border: 'none !important',
            },
            '& .MuiDataGrid-cell': {
                borderBottom:'none !important',
            },
            '& .name-column--cell': {
                color:colors.greenAccent[300],
            },
            '& .MuiDataGrid-columnHeaders': {
                backgroundColor: colors.blueAccent[700],
                borderBottom: 'none !important',
            },
            '& .MuiDataGrid-virtualScroller': {
                backgroundColor: colors.primary[400],
            },
            '& .MuiDataGrid-footerContainer': {
                borderTop: 'none !important',
                backgroundColor:colors.blueAccent[700],
            },
         }}
            
            >
                <DataGrid
                    rows={hasSearched ? rows : []}
                    columns={columns}
                    pageSize={5}
                    autoHeight
                />
            </Box>
        </Box>
    );
}

export default Management;
