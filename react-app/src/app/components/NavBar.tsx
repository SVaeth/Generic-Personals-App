import { AppBar, Button, Toolbar } from '@mui/material'
import 'react'

const NavBar = () => {

    return (
        <AppBar>
            <Toolbar>
                <Button>Home</Button>
                <Button>Browse</Button>
                <Button>Chat</Button>
            </Toolbar>
        </AppBar>

    )

}

export default NavBar;