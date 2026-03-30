import { useQuery } from '@apollo/client/react'
import React from 'react'
import { GET_LOCATIONS, TEST_QUERY } from '../queries'

function GraphQl() {
    const { data, loading, error } = useQuery(TEST_QUERY)

    console.log(data);

    return (
        <div>{
            loading ? 'loading...' : data?.locations?.map(el => {
                return (
                    <p>{el?.name || ''}</p>
                )
            })
        }</div>
    )
}

export default GraphQl