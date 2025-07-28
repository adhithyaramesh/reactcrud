import React from 'react'
import { Typography, Card, Button, Grid } from '@mui/material'
import TextField from '@mui/material/TextField';


export const Axios = () => {
    return (
        <div>
            <div>
                <Typography sx={{ textAlign: "center",fontWeight:"bold", fontSize:"20px" }}>
                    User Management
                </Typography>
                <div style={{ display: "flex", justifyContent: "space-around" }} >
                    <Card className='cardu' sx={{ width: "550px", padding: "15px", paddingTop:"1px" }}>
                        <Typography sx={{fontWeight:"bold"}}>
                            User List
                        </Typography>
                    </Card>

                    <Card className='cardu' sx={{ width: "550px", padding: "15px",paddingTop:"1px" }}>
                        <Typography sx={{fontWeight:"bold"}}>
                            Add User
                        </Typography>
                        <TextField id="outlined-basic" placeholder="Name" fullWidth sx={{ paddingBottom: "13px" }} inputProps={{
                            sx: { height: "3px" }
                        }} />
                        <TextField id="outlined-basic" placeholder="Email" fullWidth sx={{ paddingBottom: "13px" }} inputProps={{
                            sx: { height: "3px" }
                        }} />
                        <Grid container justifyContent="center">
                            <Button variant="contained">ADD USER</Button>
                        </Grid>

                        <Typography sx={{fontWeight:"bold"}}>
                            Update User
                        </Typography>
                        <TextField id="outlined-basic" placeholder="User ID" fullWidth sx={{ paddingBottom: "13px" }} inputProps={{
                            sx: { height: "3px" }
                        }} />
                        <TextField id="outlined-basic" placeholder="New Name" fullWidth sx={{ paddingBottom: "13px" }} inputProps={{
                            sx: { height: "3px" }
                        }} />
                        <TextField id="outlined-basic" placeholder="New Email" fullWidth sx={{ paddingBottom: "13px" }} inputProps={{
                            sx: { height: "3px" }
                        }} />
                        <Grid container justifyContent="center">
                            <Button variant="contained" color='secondary' sx={{ display: "flex", alignContent: "center" }}>UPDATE USER</Button>
                        </Grid>
                        <Typography sx={{fontWeight:"bold"}}>
                            Delete User
                        </Typography>
                        <TextField id="outlined-basic" placeholder="User ID" fullWidth sx={{ paddingBottom: "13px" }} inputProps={{
                            sx: { height: "3px" }
                        }} />
                        <Grid container justifyContent="center">
                            <Button variant="contained" color='error' sx={{ textAlign: "center" }}>DELETE USER</Button>
                        </Grid>


                    </Card>
                </div>


            </div>
        </div>
    )
}
