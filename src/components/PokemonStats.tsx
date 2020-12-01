import { Grid, makeStyles, Typography } from '@material-ui/core'
import React from 'react'
import useToUpperCaseFirstLetter from '../hooks/useToUpperCaseFirstLetter'

const useStyles = makeStyles((theme) => ({
  componentWrapper: {
    maxHeight: 300,
    backgroundColor: theme.palette.primary.main,
    padding: 20,
    borderRadius: 15,
  },
  headerStyles: {
    color: '#f3f3f3',
  },
}))

interface Props {
  height: number
  weight: number
  abilities: string
  habitat: {
    name: string
  }
}

const PokemonStats: React.FC<Props> = ({ height, weight, abilities, habitat }) => {
  const data = [
    {
      name: 'Height',
      value: height,
    },
    {
      name: 'Weight',
      value: weight,
    },
    {
      name: 'Ability',
      value: abilities,
    },
    {
      name: 'Habitat',
      value: habitat.name,
    },
  ]

  const classes = useStyles()

  const upperCaseFirstLetter = useToUpperCaseFirstLetter()

  return (
    <Grid className={classes.componentWrapper} sm={10} md={12} item container>
      {data.map(({ name, value }) => (
        <Grid key={name} xs={6} item>
          <Typography className={classes.headerStyles} align='center' variant='h6'>
            {name}
          </Typography>
          <Typography align='center' variant='h6'>
            {typeof value === 'string' ? upperCaseFirstLetter(value) : value}
          </Typography>
        </Grid>
      ))}
    </Grid>
  )
}

export default PokemonStats
