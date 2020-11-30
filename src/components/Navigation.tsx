import React from 'react'

import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Button from '@material-ui/core/Button'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import { makeStyles } from '@material-ui/core/styles'

import Drawer from './Drawer'
import { Typography } from '@material-ui/core'

const useStyles = makeStyles({
  logoStyles: {
    fontWeight: 'bold',
    cursor: 'pointer',
  },
  toolbarStyles: {
    justifyContent: 'space-between',
    minHeight: '100px',
  },
  menuIconStyles: {
    width: '50px',
    height: '50px',
  },
})

const Navigation = () => {
  const classes = useStyles()
  const [open, setOpen] = React.useState(false)

  const menuHandler = (): void => {
    setOpen((prevState) => !prevState)
  }

  return (
    <>
      <AppBar color='secondary' position='static'>
        <Toolbar className={classes.toolbarStyles}>
          <Typography className={classes.logoStyles} variant='h4' color='inherit'>
            PokeDex
          </Typography>

          <IconButton edge='start' color='inherit' aria-label='menu' onClick={menuHandler}>
            <MenuIcon className={classes.menuIconStyles} />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Drawer open={open} drawerHandler={menuHandler} />
    </>
  )
}

export default Navigation
