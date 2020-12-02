import React from 'react'
import { Grid, makeStyles, Typography, Button } from '@material-ui/core'

import useFetch from '../hooks/useFetch'

import PokemonCard from '../components/PokemonCard'
import MUIBackdrop from '../components/MUIBackdrop'
import { useHistory } from 'react-router'

const useStyles = makeStyles({
  typographyStyles: {
    marginTop: '30px',
  },
  pokemonCardStyles: {
    marginTop: '20px',
    padding: '20px',
  },
  pageContainerStyles: {
    margin: '20px auto',
    padding: '0 20px',
    textAlign: 'center',
  },
})

interface FetchData {
  results: [
    {
      name: string
      url: string
    }
  ]
}

const HomePage = () => {
  const classes = useStyles()
  const { push } = useHistory()

  const { data, isLoading, error } = useFetch<FetchData>(
    `https://pokeapi.co/api/v2/pokemon/?limit=8`
  )

  return (
    <>
      <Grid className={classes.pageContainerStyles} justify='center' container>
        <Grid item>
          <Typography color='secondary' className={classes.typographyStyles} variant='h3'>
            Lorem ipsum dolor sit amet.
          </Typography>
        </Grid>

        <Grid item>
          <Typography className={classes.typographyStyles} paragraph>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusantium dolorem rem
            officiis totam perferendis beatae, tempore explicabo quisquam ipsa quidem sequi, eum
            numquam corporis repellat excepturi eos quasi, eligendi enim?
          </Typography>
        </Grid>

        {isLoading && <MUIBackdrop open={isLoading} />}

        {error && (
          <Grid justify='center' container>
            <Typography variant='h3'>Error during loading Pokemons</Typography>
          </Grid>
        )}

        <Grid className={classes.pokemonCardStyles} spacing={1} justify='center' container>
          {!isLoading &&
            data !== null &&
            data.results.map((item) => <PokemonCard data={item} key={item.name} />)}
        </Grid>

        <Button variant='outlined' color='secondary' onClick={() => push('/pokemon')} size='large'>
          Search for Pokemon
        </Button>
      </Grid>
    </>
  )
}

export default HomePage
