import React, { useEffect, useRef, useState } from 'react'
import { Grid, makeStyles, Typography, CircularProgress } from '@material-ui/core'

import Axios from 'axios'
import PokemonCard from '../components/PokemonCard'

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
  name: string
  url: string
}

const HomePage = () => {
  const classes = useStyles()

  const [data, setData] = useState<FetchData[]>([
    {
      name: '',
      url: '',
    },
  ])

  const [error, setError] = useState<string>()
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const {
          data: { results },
        } = await Axios.get('https://pokeapi.co/api/v2/pokemon/?limit=8')

        setIsLoading(false)
        setData(results)
      } catch (err) {
        setIsLoading(false)
        setError(err.response.data)
      }
    }

    fetchData()
  }, [])

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

        {isLoading && (
          <Grid justify='center' container>
            <CircularProgress />
          </Grid>
        )}

        {error && (
          <Grid justify='center' container>
            <Typography variant='h3'>Error during loading Pokemons</Typography>
          </Grid>
        )}

        <Grid className={classes.pokemonCardStyles} spacing={1} justify='center' container>
          {!isLoading && data.map((item) => <PokemonCard data={item} key={item.name} />)}
        </Grid>
      </Grid>
    </>
  )
}

export default HomePage
