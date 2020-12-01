import React from 'react'
import { Backdrop, CircularProgress, makeStyles } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  backdrop: {
    zIndex: 999,
  },
}))

const MUIBackdrop: React.FC<{ open: boolean }> = ({ open }) => {
  const classes = useStyles()

  return (
    <Backdrop className={classes.backdrop} open={open}>
      <CircularProgress color='secondary' />
    </Backdrop>
  )
}

export default MUIBackdrop
