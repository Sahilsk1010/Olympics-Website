import React,{useEffect,useState} from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useSelector } from "react-redux";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import upload from '../img/upload.jpg'
import { Height } from "@material-ui/icons";


const Post = () => {
  const navigate=useNavigate();
  const {email}=useSelector((state)=>state.custom);
  const [file, setfile] = useState(" ");
  const [tab,settab]=useState(true);
  const [disimg,setdisimg]=useState([]);


  useEffect( ()=>{
    async function fetchData() {
      console.log("YEYEYEYEYEYEYEYE");
      try{
        const token=localStorage.getItem('token');

        const res=await fetch('http://localhost:8000/protected',{
          method:"GET",
          headers:{
              Accept:'application/json',                  //While taking cookies
              Authorization:token,
              "Content-Type":'application/json'
          },
          credentials:"include"                   //While taking JWT Token
      })
        console.log(res);
        console.log("ata pa")
        if(res.status===401){
          throw new Error("Login first bro");
        }
      }
      catch(err){
        toast("Please login first");
        console.log("HI")
        console.log(err);
        navigate('/login');
      }
    }
    fetchData();
  },[])

  const uploadPhotos=(e)=>{
    e.preventDefault();
    console.log(file);
    const formdata =new FormData();
    formdata.append('file',file);
    
    // axios.post(`http://localhost:8000/upload/${email}`,formdata)
    axios.post(`http://localhost:8000/upload?email=${email}`,formdata)
    .then(res=>console.log(res))
    .catch(err=>console.log(err));
  }

  const seePhotos=async ()=>{
    try{
      const email=localStorage.getItem('Email');
      console.log(email);
      console.log(`http://localhost:8000/getimage/user?email=${email}`)
      const res=await axios.get(`http://localhost:8000/getimages?email=${email}`);
      // const res=await axios.get(`http://localhost:8000/getimages`);
      console.log(res.data[0].images);
      setdisimg(res.data[0].images)
      console.log(disimg);
    }
    catch(err){
      console.log(err);
    }
  }

  return (
    <>

    {/* <form>
      <div class="max-w-[1400px] mx-auto my-6 border-1 pt-4 pb-3 border-yellow-100 rounded-lg bg-gradient-to-r from-blue-100 to-green-100 dark:bg-gray-700 dark:border-gray-600">
        <div class="px-6 py-2 rounded-xl mb-2">
          <div class="text-2xl font-bold tracking-wider text-center text-gray-900 mb-3">
            Your new post
          </div>
          <div class="flex justify-center">
            <label for="myTextArea" class="sr-only">
              Text Area
            </label>
            <textarea
              id="myTextArea"
              rows="10"
              style={styles}
              class="w-4/5 p-4 text-lg rounded-lg text-gray-900 tracking-wider bg-white border-0"
              placeholder="Write a post..."
              required
            ></textarea>
          </div>
        </div>

        <div class="flex items-center justify-around px-2 py-3 border-t dark:border-gray-600">
          <button
            type="button"
            id="clearButton"
            class="py-2.5 px-6 text-md font-bold text-center text-white tracking-wider bg-red-500 rounded-lg hover:bg-red-600 "
            onClick={onClear}
          >
            Clear
          </button>
          <button
            type="submit"
            id="submitButton"
            class="py-2.5 px-4 text-md font-bold text-center text-white tracking-wider bg-primary-500 rounded-lg hover:bg-green-500"
          >
            Publish post
          </button>
        </div>

        <p class="ml-6 mt-3 text-sm text-gray-500 dark:text-gray-400 ">
          Remember, posts should follow our{" "}
          <a
            href="#"
            class="text-primary-600 dark:text-primary-500 hover:underline hover:text-indigo-900"
          >
            Community Guidelines
          </a>
        </p>
      </div>{" "}
    </form> */}

    <form className="flex" style={{height:"32rem"}}>
      <div className="w-1/2 text-center text-4xl border-2 border-red-500">        
        <div className="border-b border-gray-200 dark:border-gray-700">
            <ul className="flex justify-evenly flex-wrap -mb-px text-sm font-medium text-center text-gray-500 dark:text-gray-400">
                <li className="mr-2">
                    <button onClick={(e)=>{e.preventDefault()
                                          settab(false)
                                          seePhotos()
                                          }}
                        className={(tab?"inline-flex items-center justify-center p-4 text-blue-600 rounded-t-lg  dark:text-blue-500 dark:border-blue-500 group":"active inline-flex items-center justify-center p-4 text-blue-600 border-b-2 border-blue-600 rounded-t-lg dark:text-blue-500 dark:border-blue-500 group")}
                        >
                        <svg className="w-4 h-4 mr-2 text-gray-400 group-hover:text-gray-500 dark:text-gray-500 dark:group-hover:text-gray-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z"/>
                        </svg>Profile
                    </button>
                </li>
                <li className="mr-2">
                    <button onClick={(e)=>{e.preventDefault()
                                          settab(true)}} 
                        className={(tab?"active inline-flex items-center justify-center p-4 text-blue-600 border-b-2 border-blue-600 rounded-t-lg dark:text-blue-500 dark:border-blue-500 group":"inline-flex items-center justify-center p-4 text-blue-600 rounded-t-lg dark:text-blue-500 dark:border-blue-500 group")} aria-current="page"
                        >
                        <svg className="w-4 h-4 mr-2 text-blue-600 dark:text-blue-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 18">
                            <path d="M6.143 0H1.857A1.857 1.857 0 0 0 0 1.857v4.286C0 7.169.831 8 1.857 8h4.286A1.857 1.857 0 0 0 8 6.143V1.857A1.857 1.857 0 0 0 6.143 0Zm10 0h-4.286A1.857 1.857 0 0 0 10 1.857v4.286C10 7.169 10.831 8 11.857 8h4.286A1.857 1.857 0 0 0 18 6.143V1.857A1.857 1.857 0 0 0 16.143 0Zm-10 10H1.857A1.857 1.857 0 0 0 0 11.857v4.286C0 17.169.831 18 1.857 18h4.286A1.857 1.857 0 0 0 8 16.143v-4.286A1.857 1.857 0 0 0 6.143 10Zm10 0h-4.286A1.857 1.857 0 0 0 10 11.857v4.286c0 1.026.831 1.857 1.857 1.857h4.286A1.857 1.857 0 0 0 18 16.143v-4.286A1.857 1.857 0 0 0 16.143 10Z"/>
                        </svg>Post
                    </button>
                </li>
            </ul>
        </div>

        {
          tab?(
            <div className="h-5/6 flex flex-col justify-end">
              <input type="file" name='uploadImg' onChange={e=>{setfile(e.target.files[0])}} className='h-80 w-80 mx-auto m-4 text-center bg-cover bg-no-repeat border-2 border-black rounded-xl' style={{
              backgroundImage:`url(${upload})`,
              backgroundRepeat:'cover'
              }}></input>
              <button type="submit" onClick={uploadPhotos} className="border-2 block w-full text-center">Upload Photo</button>
            </div>
          ):
          <div className="h-5/6 overflow-y-scroll">
              {
                disimg.map((ele)=>{
                  return(
                    <img src={ele.img} key={ele._id} className="p-5 mx-auto h-72"></img>
                  )
                })
              }
          </div>
        }

        
      </div>
      <div  className="w-1/2 flex justify-evenly text-4xl border-2 border-red-500">
        <h1>Followings</h1>
        <h1>Followers</h1>
      </div>
        
    </form>
    <ToastContainer
      position="bottom-center"
      autoClose={2000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="dark"
      />    
      </>
  );
};

export default Post;
