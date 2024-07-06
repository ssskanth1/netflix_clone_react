import React, { useEffect, useState } from 'react'
import './Banner.css'
import axios from '../axios.js'
import { API_KEY, imageUrl } from '../constant'
import { Skeleton } from '@mui/material';


function Banner() {
    const [movie, setMovie] = useState()
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        axios.get(`trending/all/week?api_key=${API_KEY}&language=en-US`).then((response) => {
            setMovie(response.data.results[2])
            setLoading(false)
        })
    }, [])

    return (

            <div className='banner' style={{ backgroundImage: `url(${imageUrl + movie?.backdrop_path})` }}>
                <div className="content">
                    <h1 className="title">{!loading ? (movie?.title) : <Skeleton animation="wave" variant='text' width={350} style={{ backgroundColor: "#464646" }} />}</h1><br />
                    {loading ? <> <Skeleton animation="wave" variant="rectangle" width={140} height={35} style={{ backgroundColor: "#464646", float: "left", marginLeft: "10px", borderRadius: "5px" }} />
                        <Skeleton animation="wave" variant="rectangle" width={140} height={35} style={{ backgroundColor: "#464646", float: "left", marginLeft: "10px", borderRadius: "5px" }} /> </>
                        :
                        <div className="bannerButtons">
                            <button className="button">Play</button>
                            <button className="button">My list</button>
                        </div>}
                    <h1 className="description"> {!loading ? movie?.overview :
                        <><br /><br />
                            <Skeleton variant='text' height={25} style={{ backgroundColor: "#464646" }} />
                            <Skeleton variant='text' height={25} style={{ backgroundColor: "#464646" }} />
                            <Skeleton variant='text' height={25} style={{ backgroundColor: "#464646" }} />
                        </>
                    }</h1>
                </div>
                <div className="fadeBottom"></div>
            </div>

    )
}

export default Banner
