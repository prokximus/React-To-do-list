import React from 'react'

export default function AddTodo() {
    return (
        <div className='' id='addTodo'>
            <hr className='mt-8 h-1 bg-gray-800 dark:bg-gray-50 border-none' />
            <div className='dark:bg-gray-800 dark:text-white bg-gray-100 p-3 flex justify-center'>
                <form className='lg:w-1/3 bg-gray-700 rounded-md py-6 px-12'>
                <h1 className='font-bold text-4xl text-center mb-7'>Add the task</h1>
                    <span className='font-semibold mb-2 block text-xl'>
                    Task Title
                    </span>
                    <input type="text" className='w-full dark:bg-gray-900 rounded-md block my-2 h-8' />
                    <span className='font-semibold mb-2 block text-xl'>
                    Task Description
                    </span>
                    <input type="text" className='w-full dark:bg-gray-900 rounded-md block my-2 h-16' />
                    <button className='bg-blue-700 py-2 px-3 rounded-md font-bold hover:bg-blue-800 mt-3'>Add Task</button>
                </form>
            </div>
        </div>
    )
}
