import Bloglist from './Bloglist'
import useFetch from './useFetch'
const Home = function () {
    const { data: blogs, isPending } = useFetch('http://localhost:8000/blogs')
    return (
        <div className="content">
            {isPending && <div>Loading....</div>}
            {blogs && <Bloglist blogs={blogs} />}


        </div>
    )
}
export default Home