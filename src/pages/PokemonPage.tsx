import React, { useState } from 'react'

import useFetch from '../hooks/useFetch'

import PokemonCard from '../components/PokemonCard'
import { Button, Grid, IconButton, makeStyles, Typography } from '@material-ui/core'
import MUIBackdrop from '../components/MUIBackdrop'
import SearchInput from '../components/SearchInput'

import ChevronLeftIcon from '@material-ui/icons/ChevronLeft'
import ChevronRightIcon from '@material-ui/icons/ChevronRight'

const useStyles = makeStyles((theme) => ({
  wrapperContainer: {
    marginTop: 20,
    padding: 20,
  },
  pageContainerStyles: {
    margin: '20px auto',
    padding: '0 20px',
    textAlign: 'center',
  },
  buttonMargin: {
    marginRight: 20,
    [theme.breakpoints.down('sm')]: {
      marginTop: 20,
      justifyContent: 'flex-start',
    },
  },
}))

interface FetchData {
  results: Array<{
    name: string
    url: string
  }>

  next: string
  previous: string
}

const PokemonPage: React.FC<{}> = () => {
  const classes = useStyles()

  const [url, setUrl] = useState(`https://pokeapi.co/api/v2/pokemon/?limit=12&offset=0`)

  const { data, isLoading, error } = useFetch<FetchData>(url)

  const nextPageHandler = () => {
    if (data !== null) {
      setUrl(data.next)
    }
  }

  const previousPageHandler = () => {
    if (data !== null) {
      setUrl(data.previous)
    }
  }

  return (
    <Grid className={classes.pageContainerStyles} container>
      {isLoading && <MUIBackdrop open={isLoading} />}
      {error && (
        <Grid justify='center' container>
          <Typography variant='h3'>Error during loading Pokemon</Typography>
        </Grid>
      )}

      <Grid container justify='space-between'>
        <SearchInput />

        {data !== null && (
          <Grid className={classes.buttonMargin} container item xs={12} justify='flex-end'>
            <IconButton
              color='secondary'
              disabled={data.previous === null}
              onClick={previousPageHandler}
            >
              <ChevronLeftIcon />
            </IconButton>
            <IconButton color='secondary' disabled={data.next === null} onClick={nextPageHandler}>
              <ChevronRightIcon />
            </IconButton>
          </Grid>
        )}
      </Grid>

      <Grid className={classes.wrapperContainer} container spacing={1} justify='center'>
        {!isLoading &&
          data !== null &&
          data.results.map((item) => <PokemonCard data={item} key={item.name} />)}
      </Grid>

      {data !== null && (
        <Grid container justify='space-around'>
          <Button
            variant='outlined'
            color='secondary'
            disabled={data.previous === null}
            onClick={previousPageHandler}
          >
            Previous Page
          </Button>
          <Button
            variant='outlined'
            color='secondary'
            disabled={data.next === null}
            onClick={nextPageHandler}
          >
            Next Page
          </Button>
        </Grid>
      )}
    </Grid>
  )
}

export default PokemonPage
