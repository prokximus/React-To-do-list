import React from 'react'
import TodoItem from './TodoItem'

export default function Todos(props,) {
    return (
        <div>
            <div classNameName="overflow-x-auto shadow-md">
                <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="px-6 py-3">
                                SrNo.
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Task title
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Description
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Date
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Time
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Action<span className="sr-only">Edit</span>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
            {props.toDos.map((iteration) => {
                return <TodoItem todo={iteration} index={props.toDos.indexOf(iteration)} key={1} onDelete={()=> {props.onDelete(iteration.title)}} />
            })}
                    </tbody>
                </table>
            </div>
        </div>
    )
}
