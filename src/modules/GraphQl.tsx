import { useQuery } from '@apollo/client/react'
import { TEST_QUERY } from '../queries'

function GraphQl() {
    const { data, loading } = useQuery(TEST_QUERY)

    console.log(data);

    return (
        <div>{
            loading ? 'loading...' : 'data fetched'}</div>
    )
}

export default GraphQl