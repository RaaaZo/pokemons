import React, { useState } from 'react'

import SearchIcon from '@material-ui/icons/Search'
import { Field, Form, Formik } from 'formik'
import {
  Grid,
  IconButton,
  LinearProgress,
  makeStyles,
  TextField,
  Typography,
} from '@material-ui/core'
import Axios from 'axios'
import { useHistory } from 'react-router'

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
  formWrapper: {
    margin: '0 20px',
  },
  fieldTextStyle: {
    width: 300,
    [theme.breakpoints.up('sm')]: {
      width: 400,
    },
  },
}))

interface Values {
  name: string
}

const SearchInput: React.FC<{}> = () => {
  const classes = useStyles()
  const { push } = useHistory()

  const [error, setError] = useState('')

  const formikSubmitHandler = async (url: string) => {
    try {
      const { data } = await Axios.get(url)
      console.log(data)
      push(`/pokemon/${data.id}`)
    } catch (error) {
      setError(error.response.data)
    }
  }

  const initialValues: Values = {
    name: '',
  }

  return (
    <Grid className={classes.formWrapper} alignItems='center' xs={12} container item>
      <Formik
        initialValues={initialValues}
        onSubmit={async (values, { setSubmitting }) => {
          console.log(values)
          await formikSubmitHandler(
            `https://pokeapi.co/api/v2/pokemon/${values.name.toLowerCase().trim()}`
          )
          setSubmitting(false)
        }}
      >
        {({ submitForm, isSubmitting, values }) => (
          <Form>
            <Field
              as={TextField}
              id='name'
              name='name'
              type='text'
              placeholder='Pokemon Name'
              variant='filled'
              color='secondary'
              label='Search for Pokemon'
              className={classes.fieldTextStyle}
            />
            <IconButton
              color='secondary'
              onClick={submitForm}
              disabled={values.name.length <= 0 || isSubmitting}
            >
              <SearchIcon fontSize='large' />
            </IconButton>

            {isSubmitting && <LinearProgress color='secondary' />}

            {error && (
              <Typography align='left' paragraph color='error'>
                Could not find this Pokemon
              </Typography>
            )}
          </Form>
        )}
      </Formik>
    </Grid>
  )
}

export default SearchInput
