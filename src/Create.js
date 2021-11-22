import { useState } from 'react'
import { useHistory } from 'react-router-dom'
const Create = function () {
    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')
    const [author, setAuthor] = useState('santosh')
    const history = useHistory()
    const handleSubmit = function (e) {
        e.preventDefault()
        const blog = { title, body, author }
        console.log(blog)
        fetch('http://localhost:8000/blogs', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(blog)
        }).then(function () {
            history.push('/')
        })

    }
    return (
        <div className="create">
            <form onSubmit={handleSubmit}>
                <label>Blog Title:</label>
                <input
                    type="text"
                    required
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <label>Blog body:</label>
                <textarea
                    required
                    value={body}
                    onChange={(e) => setBody(e.target.value)}
                ></textarea>
                <label >Blog Author:</label>
                <select
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}
                >
                    <option value="santosh">Santosh</option>
                    <option value="ram">Ram</option>
                </select>
                <button>Add Blogs</button>
            </form>
        </div>
    )
}
export default Create