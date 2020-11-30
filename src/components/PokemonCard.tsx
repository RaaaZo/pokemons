import React, { useEffect, useState } from 'react'
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
import Axios from 'axios'
import Skeleton from '@material-ui/lab/Skeleton'

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

  const [fetchData, setFetchData] = useState<FetchData>({
    name: '',
    sprites: {
      other: {
        'official-artwork': {
          front_default: '',
        },
      },
    },
    types: [
      {
        type: {
          name: '',
        },
      },
    ],
    id: 1,
  })
  const [error, setError] = useState<string>()
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    let isMounted = true
    const fetchData = async () => {
      try {
        const { data: fetchData } = await Axios.get(data.url)
        if (isMounted) {
          setIsLoading(false)
          setFetchData(fetchData)
        }
      } catch (err) {
        setIsLoading(false)
        setError(err.response.data)
      }
    }

    fetchData()

    return () => {
      isMounted = false
    }
  }, [data.url])

  const upperCaseFirstLetter = (): string => {
    if (fetchData.name.length > 0) {
      const splittedName = fetchData.name.split('')
      const upperCaseLetter = splittedName[0].toUpperCase()
      splittedName[0] = upperCaseLetter
      return splittedName.join('')
    }
    return fetchData.name
  }

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
        <Card>
          <CardActionArea>
            <CardMedia
              className={classes.imageStyles}
              component='img'
              image={fetchData.sprites.other['official-artwork'].front_default}
              title={upperCaseFirstLetter()}
            />
            <CardContent>
              <Grid container justify='space-around'>
                <Typography gutterBottom variant='h5' component='h2'>
                  {upperCaseFirstLetter()}
                </Typography>
                <Typography gutterBottom variant='h5' component='h2'>
                  #{fetchData.id}
                </Typography>
              </Grid>
            </CardContent>
          </CardActionArea>

          <Grid justify='space-around' container>
            {fetchData.types.map((item) => (
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
      )}
    </Grid>
  )
}

export default PokemonCard
