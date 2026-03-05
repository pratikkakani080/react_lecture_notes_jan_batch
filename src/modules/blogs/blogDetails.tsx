import { useParams, useSearchParams } from "react-router"
import { blogs } from "../../data";

export default function BlogDetails() {
    const params = useParams()

    const [searchParams] = useSearchParams();
    const slug = searchParams.get('slug')
    const color = searchParams.get('color')
    console.log(slug, color, params);
    

    return (
        <div>
            <h2>
                {blogs.find(el => el.id === params.id)?.title}
            </h2>
            <p>
                {blogs.find(el => el.id === params.id)?.content}
            </p>
        </div>
    )
}