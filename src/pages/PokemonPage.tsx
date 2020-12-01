import React from 'react'
import { useParams } from 'react-router'
import useFetch from '../hooks/useFetch'

interface Params {
  id: string
}

const PokemonPage: React.FC<{}> = () => {
  let { id } = useParams<Params>()

  const { data, isLoading, error } = useFetch(`https://pokeapi.co/api/v2/pokemon/${id}`)

  console.log(data)

  return <div>pokemon</div>
}

export default PokemonPage
