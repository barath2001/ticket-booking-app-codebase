import { useState, useEffect } from 'react'
import movieData from './movie-data.json'
import showData from './show-data.json'
import userData from './user-data'
import './admin.css'

function Admin() {
    var [moviedata, setmoviedata] = useState(movieData)
    var [showdata, setshowdata] = useState(showData)
    var [userdata, setuserdata] = useState(userData)

    var [select, setselect] = useState(1)
    var deleteMovie = (delid) => {
        setmoviedata(moviedata.filter(movie => movie.id != delid))
        console.log(moviedata)
    }
    var adminContent

    if (select == 1) {
        adminContent = <>
            <div className='admin-content'>
                {
                    moviedata.map(movie =>
                        <div className="admin-movie-card" key={movie.id}>
                            <li>Id: {movie.id}              </li>
                            <li>Name: {movie.name}          </li>
                            <button key={movie.id * 100} onClick={() => { deleteMovie(movie.id) }}>delete</button>

                        </div>
                    )
                }
            </div>
            <div class="auth--container" id="auth--container">
                <form>
                    <h1>Add movie</h1>
                    <input
                        type="number"
                        placeholder="Id"
                    />
                    <input
                        type="text"
                        placeholder="Name"
                    />
                    <input
                        type="text"
                        placeholder="Genre"
                    />
                    <input
                        type="number"
                        placeholder="Poster Image URL"
                    />
                    <input
                        type="text"
                        placeholder="BG Image URL"
                    />
                    <input
                        type="textarea"
                        placeholder="Description"
                    />
                    <input
                        type="text"
                        placeholder="Censor"
                    />
                    <input
                        type="text"
                        placeholder="Director"
                    />
                    <input
                        type="text"
                        placeholder="Cast"
                    />
                    <button type="submit">Submit</button>
                </form>
            </div>
        </>
    }
    else if (select == 2) {
        adminContent = <>
            <div className='admin-content'>
                {
                    showdata.map(show =>
                        <div className="admin-movie-card" key={show.show_id}>
                            <li>Id: {show.show_id}              </li>
                            <li>Date: {show.date}          </li>
                            <button>delete</button>
                        </div>
                    )
                }
            </div>
            <div class="auth--container" id="auth--container">
                <form>
                    <h1>Add Shows</h1>
                    <input
                        type="number"
                        placeholder="Show_Id"
                    />
                    <input
                        type="text"
                        placeholder="Movie_Id"
                    />
                    <input
                        type="date"
                        placeholder="Date"
                    />
                    <input
                        type="time"
                        placeholder="Time"
                    />
                    <input
                        type="number"
                        placeholder="Duration"
                    />
                    <button type="submit">Submit</button>
                </form>
            </div>
        </>
    }
    else {
        adminContent = <>
            <div className='admin-content'>
                {
                    userdata.map(user =>
                        <div className="admin-movie-card">
                            <li>Email: {user.email}              </li>
                            <li>Name: {user.name}          </li>
                            <button>delete</button>

                        </div>
                    )
                }
            </div>
            <div class="auth--container" id="auth--container">
                <form>
                    <h1>Add User</h1>
                    <input
                        type="text"
                        placeholder="name"
                    />
                    <input
                        type="text"
                        placeholder="email"
                    />
                    <input
                        type="password"
                        placeholder="password"
                    />
                    <button type="submit">Submit</button>
                </form>
            </div>
        </>
    }

    return (
        <>
            <div className='admin-container'>
                <div className='admin-nav'>
                    <hr />
                    <h3>Tables</h3>
                    <li onClick={() => { setselect(1) }}>Movies</li>
                    <li onClick={() => { setselect(2) }}>Shows</li>
                    <li onClick={() => { setselect(3) }}>Users</li>
                    <hr />
                </div>
                {adminContent}
            </div>


        </>
    )
}

export default Admin