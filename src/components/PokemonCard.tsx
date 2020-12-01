import React from 'react'
import {
  Grid,
  makeStyles,
  Typography,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Button,
} from '@material-ui/core'

import { useHistory } from 'react-router'
import useFetch from '../hooks/useFetch'

import Skeleton from '@material-ui/lab/Skeleton'
import useToUpperCaseFirstLetter from '../hooks/useToUpperCaseFirstLetter'

const useStyles = makeStyles({
  imageStyles: {
    height: 200,
    objectFit: 'contain',
  },
  elementalTypesButton: {
    margin: '20px 0',
  },
})

interface FetchData {
  name: string
  sprites: {
    other: {
      'official-artwork': {
        front_default: string
      }
    }
  }
  types: [
    {
      type: {
        name: string
      }
    }
  ]
  id: number
}

interface Props {
  data: {
    url: string
  }
}

const PokemonCard: React.FC<Props> = ({ data }) => {
  const classes = useStyles()
  const { push } = useHistory()

  const { data: fetchedData, isLoading, error } = useFetch<FetchData>(data.url)

  const upperCaseFirstLetter = useToUpperCaseFirstLetter()

  if (error) {
    return (
      <Grid xs={12} sm={5} lg={3} item>
        <Card>
          <CardContent>
            <Typography variant='h5'>Error during loading Pokemon, Try Again!</Typography>
          </CardContent>
        </Card>
      </Grid>
    )
  }

  return (
    <Grid item xs={12} sm={5} lg={3}>
      {isLoading ? (
        <div>
          <Skeleton variant='text' />
          <Skeleton variant='circle' width={40} height={40} />
          <Skeleton variant='rect' width={210} height={118} />
        </div>
      ) : (
        fetchedData !== null && (
          <Card>
            <CardActionArea onClick={() => push(`/pokemon/${fetchedData.id}`)}>
              <CardMedia
                className={classes.imageStyles}
                component='img'
                image={fetchedData.sprites.other['official-artwork'].front_default}
                title={upperCaseFirstLetter(fetchedData.name)}
              />
              <CardContent>
                <Grid container justify='space-around'>
                  <Typography gutterBottom variant='h5' component='h2'>
                    {upperCaseFirstLetter(fetchedData.name)}
                  </Typography>
                  <Typography gutterBottom variant='h5' component='h2'>
                    #{fetchedData.id}
                  </Typography>
                </Grid>
              </CardContent>
            </CardActionArea>

            <Grid justify='space-around' container>
              {fetchedData.types.map((item) => (
                <Button
                  className={classes.elementalTypesButton}
                  variant='contained'
                  color='secondary'
                  key={item.type.name}
                >
                  {item.type.name}
                </Button>
              ))}
            </Grid>
          </Card>
        )
      )}
    </Grid>
  )
}

export default PokemonCard
