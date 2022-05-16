import { useState, useEffect } from 'react'
import data from './db.json'

function Admin() {
    var [postdata, setpostdata] = useState(data.posts)
    var deleteRecord = (delid) => {
        setpostdata(postdata.filter(post => post.id != delid))
        console.log(postdata)
    }
    return (
        <>
            <div className='admin-container'>
                <div className='admin-nav'>
                    <h3>Tables</h3>
                    <li>Movies</li>
                    <li>Shows</li>
                    <li>Users</li>
                </div>
                {
                postdata.map(post => 
                    <div key = {post.id}>
                        <h2 key = {post.id*10}>{post.title}</h2>
                        <button key = {post.id*100} onClick = {()=>{deleteRecord(post.id)}}>delete</button>
                
                    </div>
                )
                }
            </div>

            
        </>
    )
}

export default Admin