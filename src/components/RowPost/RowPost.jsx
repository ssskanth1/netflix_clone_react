import React, { useEffect, useState } from 'react'
import './RowPost.css'
import YouTube from "react-youtube";
import axios from '../axios'
import { API_KEY, imageUrl } from '../constant'
import { Skeleton } from '@mui/material';


function RowPost({ title, isLarge, url }) {
    const [posters, setPosters] = useState([{ backdrop_path: "" }])
    const [urlId, setUrlId] = useState()
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        axios.get(url).then((response) => {
            setPosters(response.data.results)
            setLoading(false)
        })
    }, [url])

    const opts = { height: "400", width: "98%", playerVars: { autoplay: 1 } }
    const getMovieId = (id) => {
        axios.get(`/movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then((response) => {
            console.log("start /...", response.data)
            if (response.data.results[0]) {
                setUrlId(response.data.results[0].key)
            }
            setLoading(false)
        }).catch((err)=>{
            console.error(err);
        })
    }
    const skeltonMap = isLarge ? [null, null, null] : [null,null,null,null,null,null]

    return (

        <div className='row'>
            <h2>{loading ? <Skeleton className='textSkelton' animation="wave" width={150} height={50} style={{ backgroundColor: "#454545" }} /> : title}</h2>
            {!loading ? <div className="posters">
                {posters.map((item) => {
                    return (
                        <img onClick={() => getMovieId(item.id)} className={isLarge ? 'poster' : 'smallPoster'} src={`${imageUrl + item.backdrop_path}`} alt="" />
                    )
                })
                }
            </div>
                : <div className='posters'>
                    {skeltonMap.map(() => {
                        return <Skeleton className='largerPosterSkelton' animation="Wave" variant='rectangular' width={isLarge ? 450 : 270} height={isLarge ? 250 : 150} style={{ backgroundColor: "#454545", float: "left" }} />
                    })
                    }

                </div>}
            {urlId && <i className='fa fa-close' onClick={() => { setUrlId(false) }}></i>}
            {urlId && <YouTube opts={opts} videoId={urlId} />}
        </div>
    )
}

export default RowPost
