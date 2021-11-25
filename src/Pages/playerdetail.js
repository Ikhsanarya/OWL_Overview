import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import './playerdetail.css'

export default function Playerdetail() {
    const [data, setData] = useState()

    const {itemId} = useParams()

    useEffect(() => {
        fetch(`https://my-json-server.typicode.com/Ikhsanarya/overwatchdb/player/${itemId}`, {
        })
          .then((res) => res.json())
          .then((cats) => {
            setData(cats)
          })
          .catch((error) => {
            console.log(error)
          })
      }, [itemId])

    return (
        <div>
            {data === undefined ? 'Loading...': (
            <div className = 'detail'>
              <img className = ""
                  src={data.image === undefined || null ? 'https://asset.kompas.com/crops/DN9E0eZyfpbXdkcjNDc4EhXytvc=/65x0:1043x652/750x500/data/photo/2019/12/04/5de7377fa911a.jpg' : data.image}
                  alt="img not found"
                />
                <p> {data.name} </p>
                <p> {data.Role} </p>
                <p> {data.Team} </p>
                <p> {data.Hometown} </p>
            </div>
            ) }
        </div>
    )
}
