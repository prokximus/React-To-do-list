import React from 'react'
import Todos from './Todos'

export default function TodoItem(props) {
  return (
    <>
      <tr className='bg-gray-800'>
        <td className='py-3 px-6'>{props.index + 1}</td>
        <td className='py-3 px-6'>{props.todo.title}</td>
        <td className='py-3 px-6'>{props.todo.desc}</td>
        <td className='py-3 px-6'></td>
        <td className='py-3 px-6'></td>
        <td className='py-3 px-6'><button className='text-blue-600'>Delete</button></td>
      </tr>
    </>
  )
}
