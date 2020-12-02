import React from 'react'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts'

interface Props {
  stats: Array<{
    base_stat: number
  }>
}

const Chart: React.FC<Props> = ({ stats }) => {
  const data = [
    {
      name: 'HP',
      data: stats[0].base_stat,
    },
    {
      name: 'Attack',
      data: stats[1].base_stat,
    },
    {
      name: 'Defense',
      data: stats[2].base_stat,
    },
    {
      name: 'Sp. Att.',
      data: stats[3].base_stat,
    },
    {
      name: 'Sp. Def.',
      data: stats[4].base_stat,
    },
    {
      name: 'Speed',
      data: stats[5].base_stat,
    },
  ]

  return (
    <>
      <BarChart
        width={400}
        height={300}
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 0,
          bottom: 5,
        }}
        barSize={20}
      >
        <XAxis dataKey='name' scale='point' padding={{ left: 20, right: 20 }} />
        <YAxis />
        <Tooltip />

        <CartesianGrid strokeDasharray='3 3' />
        <Bar dataKey='data' fill='#3f51b5' background={{ fill: '#f3f3f3' }} />
      </BarChart>
    </>
  )
}

export default Chart
