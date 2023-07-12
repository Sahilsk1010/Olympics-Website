import React from 'react';
import { useNavigate } from 'react-router-dom';

const SignerType = () => {
  const navigate = useNavigate();


  const handleSelect=(e)=>{
    if(e.target.name==='fan'){
      navigate('/fansignin');
    }
    else{
      navigate('/orgsignin');
    }
  }

  return (
    <>
      <div className='w-1/2 mx-auto flex flex-col bg-green-100 my-5'>
        <div className='text-center text-2xl my-3'>Register As</div>
        <button className="w-1/2 mx-auto my-5 text-xl font-serif flex sm:inline-flex justify-center items-center bg-gradient-to-tr from-indigo-500 to-purple-400 hover:from-indigo-600 hover:to-purple-500 active:from-indigo-700 active:to-purple-600 focus-visible:ring ring-indigo-300 text-white font-semibold text-center rounded-md outline-none transition duration-100 px-5 py-4" name="manager"  onClick={handleSelect}>Event Manager</button>
        <button className="w-1/2 mx-auto my-5 text-xl font-serif flex sm:inline-flex justify-center items-center bg-gradient-to-tr from-indigo-500 to-purple-400 hover:from-indigo-600 hover:to-purple-500 active:from-indigo-700 active:to-purple-600 focus-visible:ring ring-indigo-300 text-white font-semibold text-center rounded-md outline-none transition duration-100 px-5 py-4" name="coach" onClick={handleSelect}>Coach</button>
        <button className="w-1/2 mx-auto my-5 text-xl font-serif flex sm:inline-flex justify-center items-center bg-gradient-to-tr from-indigo-500 to-purple-400 hover:from-indigo-600 hover:to-purple-500 active:from-indigo-700 active:to-purple-600 focus-visible:ring ring-indigo-300 text-white font-semibold text-center rounded-md outline-none transition duration-100 px-5 py-4" name="athelete" onClick={handleSelect}>Athelete</button>
        <button className="w-1/2 mx-auto my-5 text-xl font-serif flex sm:inline-flex justify-center items-center bg-gradient-to-tr from-indigo-500 to-purple-400 hover:from-indigo-600 hover:to-purple-500 active:from-indigo-700 active:to-purple-600 focus-visible:ring ring-indigo-300 text-white font-semibold text-center rounded-md outline-none transition duration-100 px-5 py-4" name="fan" onClick={handleSelect}>Fan</button>
      </div>
    </>
  )
}

export default SignerType;