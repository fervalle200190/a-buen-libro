import React from 'react'
import { useParams } from 'react-router'

export default function Book () {
    const {name} = useParams()

    return (
        <div>
            Libro: {name}
        </div>
    )
}