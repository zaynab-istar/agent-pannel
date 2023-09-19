import React, { useState } from 'react';
import { DataGrid,GridToolbar } from '@mui/x-data-grid';
import { tokens } from '../../theme';
import { mockDataContacts } from "../../data/mockData";
import { Box, useTheme} from '@mui/material';
import Header from '../../components/Header';





function Contact() {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    const columns = [
        {
            field: 'id',
            headerName: 'ID',
            flex:0.5
        },
        {
            field: 'registeredId',
            headerName: 'Registered ID',
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
            field:'address',
            headerName:'Address',
            flex:2,
        },
        {
            field:'city',
            headerName:'City',
            flex:1,
        },
        {
            field:'zipCode',
            headerName:'Zip Code',
            flex:1,
        },
        
        
    ];
   

    return (
        <Box m="20px">
            <Header title="CONTACT" subtitle="Find all informations about your Customers Here." />
        
            <Box 
            sx={{ height:'75vh', 
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
            "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
                color: `${colors.grey[100]} !important`,
              },
         }}
            
            >
                <DataGrid
                      rows={mockDataContacts}
                      columns={columns}
                      components={{ Toolbar: GridToolbar }}
        
                />
            </Box>
        </Box>
    );
}

export default Contact;
