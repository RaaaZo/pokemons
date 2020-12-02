import React from 'react'
import { useHistory, useParams } from 'react-router'

import useFetch from '../hooks/useFetch'

import Image from 'material-ui-image'
import { Button, Grid, makeStyles, Typography } from '@material-ui/core'
import Chart from '../components/Chart'
import PokemonStats from '../components/PokemonStats'
import useToUpperCaseFirstLetter from '../hooks/useToUpperCaseFirstLetter'
import MUIBackdrop from '../components/MUIBackdrop'

const useStyles = makeStyles((theme) => ({
  pageWrapperStyles: {
    maxWidth: 1360,
    padding: '0 30px',
    [theme.breakpoints.up('md')]: {},
  },
  imageStyles: {
    width: 300,
    height: 300,
    margin: '30px auto',
  },
  marginTop: {
    marginTop: 30,
  },
  marginBottom: {
    marginBottom: 30,
  },
  buttonStyles: {
    padding: 20,
    marginTop: 30,
  },
}))

interface Params {
  id: string
}

interface FetchData {
  name: string
  sprites: {
    other: {
      'official-artwork': {
        front_default: string
      }
    }
  }
  types: Array<{
    type: {
      name: string
    }
  }>
  stats: [{ base_stat: number }]
  id: number
  height: number
  weight: number
  abilities: Array<{
    ability: {
      name: string
    }
  }>
}

interface FetchSpeciesData {
  flavor_text_entries: Array<{
    flavor_text: string
  }>
  habitat: {
    name: string
  }
}

const SinglePokemonPage: React.FC<{}> = () => {
  const classes = useStyles()
  let { id } = useParams<Params>()

  const { push } = useHistory()

  const upperCaseFirstLetter = useToUpperCaseFirstLetter()

  const { data, isLoading, error } = useFetch<FetchData>(`https://pokeapi.co/api/v2/pokemon/${id}`)
  const { data: speciesData } = useFetch<FetchSpeciesData>(
    `https://pokeapi.co/api/v2/pokemon-species/${id}`
  )

  return (
    <Grid direction='column' alignItems='center' className={classes.pageWrapperStyles} container>
      {isLoading && <MUIBackdrop open={isLoading} />}

      {error && (
        <Grid item justify='center' alignItems='center'>
          <Typography variant='h4'>{error}</Typography>
        </Grid>
      )}

      {data !== null && speciesData !== null && !isLoading && (
        <>
          <Typography className={classes.marginTop} gutterBottom align='center' variant='h4'>
            {upperCaseFirstLetter(data.name)}
          </Typography>
          <Typography gutterBottom align='center' variant='body1' color='textSecondary'>
            #{data.id}
          </Typography>

          <Grid container item justify='center'>
            <Grid container item md={6} direction='column'>
              <Grid className={classes.imageStyles} container>
                <Image
                  src={data.sprites.other['official-artwork'].front_default}
                  imageStyle={{
                    width: 300,
                    height: 300,
                  }}
                />
              </Grid>
              <Grid className={classes.marginBottom} justify='center' container>
                <Chart stats={data.stats} />
              </Grid>
            </Grid>

            <Grid
              className={classes.marginTop}
              container
              item
              sm={10}
              md={6}
              direction='column'
              alignItems='center'
            >
              <Typography gutterBottom variant='h6'>
                {speciesData.flavor_text_entries[3].flavor_text}
              </Typography>

              <PokemonStats
                height={data.height}
                weight={data.weight}
                abilities={data.abilities[0].ability.name}
                habitat={speciesData.habitat}
              />

              <Button
                className={classes.buttonStyles}
                variant='outlined'
                color='secondary'
                size='large'
                onClick={() => push('/pokemon')}
              >
                Search for another Pokemon
              </Button>
            </Grid>
          </Grid>
        </>
      )}
    </Grid>
  )
}

export default SinglePokemonPage
