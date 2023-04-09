import React from 'react'
import {AppBar, Toolbar, Typography} from '@mui/material'
import LibraryBooksOutlinedIcon from '@mui/icons-material/LibraryBooksOutlined';
function Heaader() {
  return (
    <div>
        <AppBar position="sticky">
            <Toolbar>
            <Typography>
                <LibraryBooksOutlinedIcon/>
            </Typography>
            </Toolbar>
           
        </AppBar>
    </div>
  )
}

export default Heaader