import React from 'react'
import "./styles.css"
import Form from './components/Form'
const App: React.FC = (): React.JSX.Element => {

  return (
    <>
      <div className='flex flex-nowrap mb:flex-col justify-between items-center gap-12 w-full mb:w-[95%] mb:mx-auto h-full'>
        <div className='w-1/2 mb:w-full'>
          <h1 className='font-bold text-[50px] leading-[55px] tracking-[-0.52px] text-white mb-3 mb:text-center'>Learn to code by watching others</h1>
          <p className='font-medium leading-6 text-white mb:text-center'>See how experienced developers solve problems in real-time. Watching scripted tutorials is great, but understanding how developers think is invaluable. </p>
        </div>
        <div className='w-1/2 mb:w-full'>
          <p className='text-white leading-6 tracking-[0.27px] bg-blue py-4 w-full text-center rounded-xl shadow-md mb-6'><span className='font-bold'>Try it free 7 days</span> then $20/mo. thereafter</p>
          <Form></Form>
        </div>

      </div>
    </>
  )
}

export default App
