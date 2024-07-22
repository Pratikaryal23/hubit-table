import {useState, useEffect} from "react"
import axios from "axios";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Table = () => {

const [Search, setSearch] = useState('')
const Navigation=useNavigate()
const[data,setData]=useState([])
const getData=()=>{
    try {
        axios
        .get('https://hubmainback.hubit.com.np/courses')
        .then((res)=>{
console.log("pratik",res)
setData([...res.data.result])
        })
        .catch((err)=>{
            console.log(err)
        })
    } catch (error) {
        console.log(error)
        
    }
}
useEffect(()=>{
    getData();
},[])

const filter=(options)=>{
    return options.filter(x=>x['title'].toLowerCase().indexOf(Search.toLowerCase())>-1)
}
    return ( 
        <>
        <Link to={'/Blog'} className="w-full text-3xl   bg-black text-white"> WELCOME TO HUBIT</Link>
<div className="flex justify-between mx-2">
        <button className="text-black    bg-green-400 px-2 py-2  rounded-md w-44  mt-20" 
        onClick={()=>{
            Navigation('/Form_g')
        }}>ADD</button>
        <input onChange={(e)=>{
            setSearch(e.target.value)
        }} className="text-black    bg-green-400 px-2 py-2  rounded-md w-44  mt-20 outline-none" type="search" name="search" placeholder="Search"/>
        </div>
<div className="grid grid-cols-4 gap-3 p-6 shadow-slate-600 shadow-lg-? "> 
        {filter(data).map((val,i)=>{
    let images=`https://hubmainback.hubit.com.np/public/${val.image}`
    return(
        <>
        <div className="w-full ">
        <Link key={i} to={`/Blog?id=${val.id}`}>
        <div className="w-fit  h-full shadow-lg text-xl text-black bg-purple-200" >{val.title}
        <img  className='h-56 w-100 object-cover'src={images} /> 
       
        <div dangerouslySetInnerHTML={{__html:val.description}}className="line-clamp-3" />
          <div className="line-clamp-3 px-7 border-t-2 border-gray-700 text-blue-400 mt-8">
          {val.duration}
          </div>
         

    
         </div> 
    </Link> 
        </div>
        </>
        
   
    )
})
        }
        </div>

{/* 
        <div className=" grid grid-cols-4 gap-10">
            {Data.map((vla,i) =>{
                return(
                    <div className="w-60 h-60 bg-black text-white">{vla.title} </div>

                )
            })}
        </div> */}




        {/* <table className="bg-purple-500 w-full">
<thead>
<tr>
<th  className="border-4 px-2 py-5 border-black">company</th>
<th  className="border-4 px-2 py-5 border-black">contact</th>
<th  className="border-4 px-2 py-5 border-black">country</th>
    </tr>
</thead>
   <tbody>
    {
        arrayone.map((val,i)=>{
            return(
                <tr>
                <td className="border-4 px-2 py-5 border-black" >popopo popopo</td>
                <td className="border-4 px-2 py-5 border-black">sopopo sopopo </td>
                <td className="border-4 px-2 py-5 border-black" >Germany     </td>
            </tr>
            )
        })
    }
   </tbody>
 
</table> */}
        </>
     );

}
export default Table;