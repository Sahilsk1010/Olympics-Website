import React,{useEffect,useState} from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useSelector } from "react-redux";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import upload from '../img/upload.jpg'



const Post = () => {
  const navigate=useNavigate();
  const {email}=useSelector((state)=>state.custom);
  const [file, setfile] = useState(" ");
  const [tab1,settab1]=useState(true);
  const [tab2,settab2]=useState(1);
  const [disimg,setdisimg]=useState([]);
  const [followers,setfollowers]=useState([]);
  const [followings,setfollowings]=useState([]);
  const [allOrgs,setallOrgs]=useState([]);


  useEffect( ()=>{
    async function fetchData() {
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
    const email=localStorage.getItem('Email');

    
    axios.post(`http://localhost:8000/upload?email=${email}`,formdata)
    .then(res=>console.log(res))
    .catch(err=>console.log(err));
  }

  const seePhotos=async ()=>{
    try{
      const email=localStorage.getItem('Email');
      console.log(email);
      const res=await axios.get(`http://localhost:8000/getimages?email=${email}`);
      console.log(res.data[0]);
      setdisimg(res.data[0].images)
      setfollowers(res.data[0].followers);
      setfollowings(res.data[0].followings);
    }
    catch(err){
      console.log(err);
    }
  }


  return (
    <>

    <form className="flex" style={{height:"32rem"}}>
      <div className="w-1/2 text-center border-2 border-red-500">        
        <div className="h-1/6 border-b border-gray-200 dark:border-gray-700">
            <ul className="flex justify-evenly flex-wrap -mb-px text-sm font-medium text-center text-gray-500 dark:text-gray-400">
                <li className="mr-2">
                    <button onClick={(e)=>{e.preventDefault()
                                          settab1(false)
                                          seePhotos()
                                          }}
                        className={(tab1?"inline-flex items-center justify-center p-4 text-blue-600 rounded-t-lg  dark:text-blue-500 dark:border-blue-500 group":"active inline-flex items-center justify-center p-4 text-blue-600 border-b-2 border-blue-600 rounded-t-lg dark:text-blue-500 dark:border-blue-500 group")}
                        >
                        <svg className="w-4 h-4 mr-2 text-gray-400 group-hover:text-gray-500 dark:text-gray-500 dark:group-hover:text-gray-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z"/>
                        </svg>Profile
                    </button>
                </li>
                <li className="mr-2">
                    <button onClick={(e)=>{e.preventDefault()
                                          settab1(true)}} 
                        className={(tab1?"active inline-flex items-center justify-center p-4 text-blue-600 border-b-2 border-blue-600 rounded-t-lg dark:text-blue-500 dark:border-blue-500 group":"inline-flex items-center justify-center p-4 text-blue-600 rounded-t-lg dark:text-blue-500 dark:border-blue-500 group")} aria-current="page"
                        >
                        <svg className="w-4 h-4 mr-2 text-blue-600 dark:text-blue-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 18">
                            <path d="M6.143 0H1.857A1.857 1.857 0 0 0 0 1.857v4.286C0 7.169.831 8 1.857 8h4.286A1.857 1.857 0 0 0 8 6.143V1.857A1.857 1.857 0 0 0 6.143 0Zm10 0h-4.286A1.857 1.857 0 0 0 10 1.857v4.286C10 7.169 10.831 8 11.857 8h4.286A1.857 1.857 0 0 0 18 6.143V1.857A1.857 1.857 0 0 0 16.143 0Zm-10 10H1.857A1.857 1.857 0 0 0 0 11.857v4.286C0 17.169.831 18 1.857 18h4.286A1.857 1.857 0 0 0 8 16.143v-4.286A1.857 1.857 0 0 0 6.143 10Zm10 0h-4.286A1.857 1.857 0 0 0 10 11.857v4.286c0 1.026.831 1.857 1.857 1.857h4.286A1.857 1.857 0 0 0 18 16.143v-4.286A1.857 1.857 0 0 0 16.143 10Z"/>
                        </svg>Post
                    </button>
                </li>
            </ul>
        </div>

        {
          tab1?(
            <div className="h-4/6 flex flex-col justify-end">
              <input type="file" name='uploadImg' onChange={e=>{setfile(e.target.files[0])}} className='h-80 w-80 mx-auto m-4 text-center bg-cover bg-no-repeat border-2 border-black rounded-xl' style={{
              backgroundImage:`url(${upload})`,
              backgroundRepeat:'cover'
              }}></input>
            </div>
          ):
          <div className="h-4/6 overflow-y-scroll">
              {
                disimg.map((ele)=>{
                  return(
                    <img src={ele.img} key={ele._id} className="p-5 mx-auto h-72"></img>
                  )
                })
              }
          </div>
        }

        {
          tab1?(
            <div className="h-1/6">
                <button type="submit" onClick={uploadPhotos} className="p-1 m-1 border-2 rounded-lg text-center">Upload</button>
            </div>
          ):
          <div className="h-1/6">
                <button type="submit" onClick={(e)=>{e.preventDefault()
                                                    settab1(true)}} 
                    className="p-1 m-1 border-2 rounded-lg text-center">Upload Photo</button>
          </div>
        }
      </div>

      <div  className="w-1/2 border-2 border-red-500">
        <div className="h-1/6 border-b border-gray-200 dark:border-gray-700">
            <ul className="flex justify-evenly flex-wrap -mb-px text-sm font-medium text-center text-gray-500 dark:text-gray-400">
              <li className="mr-2">
                  <button onClick={(e)=>{e.preventDefault()
                                        settab2(1)}}
                                        className={(tab2===1?"active inline-flex items-center justify-center p-4 text-blue-600 border-b-2 border-blue-600 rounded-t-lg dark:text-blue-500 dark:border-blue-500 group":"inline-flex items-center justify-center p-4 text-blue-600 rounded-t-lg dark:text-blue-500 dark:border-blue-500 group")} aria-current="page"
                      >
                      <svg className="w-4 h-4 mr-2 text-gray-400 group-hover:text-gray-500 dark:text-gray-500 dark:group-hover:text-gray-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z"/>
                      </svg>Followers
                  </button>
              </li>
              <li className="mr-2">
                  <button onClick={(e)=>{e.preventDefault()
                                        settab2(2)}}
                                        className={(tab2===2?"active inline-flex items-center justify-center p-4 text-blue-600 border-b-2 border-blue-600 rounded-t-lg dark:text-blue-500 dark:border-blue-500 group":"inline-flex items-center justify-center p-4 text-blue-600 rounded-t-lg dark:text-blue-500 dark:border-blue-500 group")} aria-current="page"
                      >
                      <svg className="w-4 h-4 mr-2 text-blue-600 dark:text-blue-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 18">
                          <path d="M6.143 0H1.857A1.857 1.857 0 0 0 0 1.857v4.286C0 7.169.831 8 1.857 8h4.286A1.857 1.857 0 0 0 8 6.143V1.857A1.857 1.857 0 0 0 6.143 0Zm10 0h-4.286A1.857 1.857 0 0 0 10 1.857v4.286C10 7.169 10.831 8 11.857 8h4.286A1.857 1.857 0 0 0 18 6.143V1.857A1.857 1.857 0 0 0 16.143 0Zm-10 10H1.857A1.857 1.857 0 0 0 0 11.857v4.286C0 17.169.831 18 1.857 18h4.286A1.857 1.857 0 0 0 8 16.143v-4.286A1.857 1.857 0 0 0 6.143 10Zm10 0h-4.286A1.857 1.857 0 0 0 10 11.857v4.286c0 1.026.831 1.857 1.857 1.857h4.286A1.857 1.857 0 0 0 18 16.143v-4.286A1.857 1.857 0 0 0 16.143 10Z"/>
                      </svg>Followings
                  </button>
              </li>
            </ul>
        </div>

        {/* {
          tab2===1?(
            <div className="h-4/6 border-2 border-green-500">
            {
              followers.map((ele)=>{
                return(
                  <p>{ele.name}</p>
                )
              })
            }
            </div>
          ):
          (tab2==2?(
            <div className="h-4/6 border-2 border-green-500">
            {
              followings.map((ele)=>{
                return(
                  <p>{ele.name}</p>
                )
              })
            }
            </div>
          ):
          <div className="h-4/6 border-2 border-green-500">
            {
              allOrgs.map((ele)=>{
                return(
                  <p>{ele.name}</p>
                )
              })
            }
            </div>
          )
        } */}


        <div className="h-1/6 text-center">
          <button onClick={(e)=>{e.preventDefault()
                                  settab2(0);
                                }
                          } className="p-1 m-1 border-2 rounded-lg">
            Follow Celebs
          </button>
        </div>
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
