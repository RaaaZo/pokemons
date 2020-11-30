import React from 'react'

import { Drawer as MUIDrawer } from '@material-ui/core'
import Divider from '@material-ui/core/Divider'
import ChevronRightIcon from '@material-ui/icons/ChevronRight'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import { IconButton, makeStyles } from '@material-ui/core'
import { useHistory } from 'react-router-dom'

const drawerWidth = 250

const useStyles = makeStyles((theme) => ({
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
    backgroundColor: '#f3f3f3',
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    ...theme.mixins.toolbar,
    justifyContent: 'space-between',
  },
  listItemStyles: {
    padding: '30px',
    margin: 'auto',
    justifyContent: 'center',
    fontWeight: 'bold',
  },
}))

interface Props {
  open: boolean
  drawerHandler(): void
}

const Drawer: React.FC<Props> = ({ open, drawerHandler }) => {
  const classes = useStyles()
  const { push } = useHistory()

  return (
    <MUIDrawer
      className={classes.drawer}
      variant='persistent'
      anchor='right'
      open={open}
      classes={{
        paper: classes.drawerPaper,
      }}
    >
      <div className={classes.drawerHeader}>
        <IconButton onClick={drawerHandler}>
          <ChevronRightIcon fontSize='large' />
        </IconButton>
      </div>
      <Divider />

      <List>
        {[
          { name: 'Home', url: '/' },
          { name: 'Pokemons', url: '/pokemons' },
          { name: 'Evolutions', url: '/evolutions' },
          { name: 'Locations', url: '/locations' },
        ].map((item, index) => (
          <ListItem
            key={index}
            className={classes.listItemStyles}
            button
            divider
            onClick={() => push(item.url)}
          >
            {item.name}
          </ListItem>
        ))}
      </List>
    </MUIDrawer>
  )
}

export default Drawer
