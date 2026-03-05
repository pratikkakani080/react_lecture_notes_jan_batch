import { useEffect } from "react";
import { Link } from "react-router";

export function Card({ b, setDatToUplift, funcToUplift }: any) {
    let vedika = 'nthi samajti'

    useEffect(() => {
        // this effect I'm using to uplift data
        // aa effect data ne uplift karva mate chhe
        setDatToUplift(vedika)
        funcToUplift(vedika)
    }, [])

    return (
        <div style={{ border: '1px solid' }}>
            <h3>{b.title || 'title'}</h3>
            <p>{b.content || 'content'}</p>
            <Link to={`/blog-details/${b.id}?slug=${b.title}&color=blue`}>View</Link>
        </div>
    )
}