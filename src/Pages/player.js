import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import './player.css'

function Player(props) {
  const [data, setData] = useState()
  const {history} = props

  useEffect(() => {
    fetch('https://my-json-server.typicode.com/Ikhsanarya/overwatchdb/player', {
    })
      .then((res) => res.json())
      .then((cats) => {
        setData(cats)
      })
      .catch((error) => {
        console.log(error)
      })
  }, [])
  console.log(data)

  return (
    <div className = "player-list">
        <h3> Top Player </h3>
      {data === undefined
        ? 'Loading....'
        : data.map((item) => {
            return (
              <div key={item.id}>
                <NavLink to = {`/player/${item.id}`} onClick ={()=>history.push(`/player/${item.id}`)}>
                <img className = "player"
                  src={item.image === undefined || null ? 'https://asset.kompas.com/crops/DN9E0eZyfpbXdkcjNDc4EhXytvc=/65x0:1043x652/750x500/data/photo/2019/12/04/5de7377fa911a.jpg' : item.image}
                  alt="img not found"
                />
                <p className = "player">{item.name}</p>
                </NavLink>
              </div>
            )
          })}
    </div>
  )
}

export default Player;