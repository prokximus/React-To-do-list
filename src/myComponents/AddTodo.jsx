import React, { useState } from 'react'

export default function AddTodo(props) {
    const [Title, setTitle] = useState("");
    const [Desc, setDesc] = useState("");
    
    const submit = (e) => {
        e.preventDefault();
        if(!Title || !Desc){
            alert('Title and Description of the task can not be empty!')
        }
        else{
            props.addTodo(Title,Desc);
        }
    }
    return (
        <div className='' id='addTodo'>
            <hr className='mt-8 h-1 bg-gray-500 dark:bg-gray-50 border-none' />
            <div className='dark:text-white p-3 flex justify-center'>
                <form className='lg:w-[45%] rounded-md py-6 px-12 bg-gray-200 dark:bg-gray-700' onSubmit={submit}>
                <h1 className='font-bold text-4xl text-center mb-7'>Add the task</h1>
                    <span className='font-semibold mb-2 block text-xl'>
                    Task Title
                    </span>
                    <input type="text" className='w-full dark:bg-gray-900 rounded-md block my-2 h-8 px-1 focus:' value={Title} onChange={(e)=>{setTitle(e.target.value)}} />
                    <span className='font-semibold mb-2 block text-xl'>
                    Task Description
                    </span>
                    <textarea value={Desc} type="text" className='w-full dark:bg-gray-900 rounded-md block my-2 h-20 px-1'onChange={(e)=>{setDesc(e.target.value)}} />
                    <button className='text-white bg-blue-700 py-2 px-3 rounded-md font-bold hover:bg-blue-800 mt-3' type='submit'>Add Task</button>
                </form>
            </div>
        </div>
    )
}
