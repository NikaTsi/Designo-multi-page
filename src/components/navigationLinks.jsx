import React from 'react'
import { Link } from 'react-router-dom'

const NavigationLinks = ({ data }) => (
    data.map(item => (
        <Link key={item.url} to={`${item.url}`} className='hover:underline cursor-pointer'>{item.title}</Link>
    ))
)

export default NavigationLinks