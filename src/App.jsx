import React from 'react'
import { useState, useEffect } from 'react'
import './index.css'
import axios  from 'axios'

const App = () => {

  const [columns, setColumns] = useState([]);
  const [post, setPost] = useState([]);

  useEffect(() =>{
    axios.get('/post')
    .then(response =>{
      setColumns(Object.keys(response.data[0]))
      setPost(response.data)
    })
  }, [])

  return (
    <div className='container mt-20 mx-auto px-6 sm:w-2/4' >
      <div className='flex mb-4 sm:gap-4'>
        <h2 className='font-bold text-lg'>Notifications</h2>
        <p className='ml-auto flex text-blue-500 font-bold'><span><img src="./src/images/blue-double-check-icon.png
        " className='w-6'/></span>Mark as read</p>
      </div>
      {
        post.map((person) =>{
          return (
            <li role='list' key={person.id} className='py-6 divide-y divide-slate-200 flex hover:bg-slate-200 hover:rounded'>
              <div className='flex'>
                <img src="./src/images/blue-dot-icon.png" className='w-4 h-4 mt-1' />
                <div className='px-2'>
                  <p className='text-lg hover:text-blue-500'>{person.message}</p>
                  <p>{person.datetime}</p>
                </div>
              </div>
              <img src="./src/images/face-pic.jpg" alt="profile image" className='w-12 h-12 rounded-full ml-auto mr-4' />
            </li>
          )
        })
      }
      <p className='divide-y mt-6 text-blue-500 font-bold'>View all notifications</p>
    </div>
  )
}

export default App
