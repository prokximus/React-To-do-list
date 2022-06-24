import React from 'react'
import TodoItem from './TodoItem'
import mtStatement from './mtStatement'

export default function Todos(props) {
    return (
        <div className='w-full mx-auto'>
            <div className=" overflow-x-auto whitespace-pre-wrap shadow-md">
                <table className=" w-full table-layout:fixed text-sm text-left text-gray-500 dark:text-gray-400">
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
            {props.toDos.length == 0? 'Add the task to the list first'
            :
            props.toDos.map((iteration) => {
                return <TodoItem todo={iteration} index={props.toDos.indexOf(iteration)} key={props.toDos.indexOf(iteration)+1} onDelete={props.onDelete} />
            })
            }
                    </tbody>
                </table>
            </div>
        </div>
    )
}
