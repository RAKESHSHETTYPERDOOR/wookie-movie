import { useState } from "react"
import { useSelector,useDispatch } from "react-redux"
import { action, crime, drama, family ,all, getdata} from "../actions/getActions"
import Actions from "./Actions"
import Family from "./Family"
import Drama from "./Drama"
import Crime from "./Crime"


const MovieContainer = ()=>{
    const [search,setSearch] =useState("")
    const [category,setCategory] =useState("")

    const dispatch = useDispatch()

    const All =useSelector((state)=>{
        return state.data.filter((ele)=>{
            if(ele.title.includes(search)){
                return {...ele.title}
            }
        })
  })


   const handlechange = (e)=>{
       setSearch(e.target.value)
   }

   const mystyle ={
       display:'grid',
       gridTemplateColumns:'30% 30% 30%',
       gridGap:'20px',
       marginTop:'20px',
       
   }

    return (
        <div>
            <h1 style={{color:"blue"}}>Wookie-Movies</h1>
            <input type="text" value={search} onChange={handlechange} placeholder="search" style={{marginLeft:'1200px',alignItems:'left'}}/> <br/>
            <h1>All-Movies-{All.length}</h1>
            <div style={mystyle}>
            {
                All.map((ele,i)=>{
                    return (
                        <div key={i} style={{background:'white',border:'2px solid black'}}>
                           <img src={ele.backdrop} style={{width:'350px',margin:'30px'}}/>
                           <h4 style={{fontStyle:'bold',margin:'30px'}}> {ele.title}</h4>
                           <p style={{fontStyle:'bold',margin:'30px'}}><b>Length-</b>{ele.length}</p>
                           <p style={{fontStyle:'bold',margin:'30px'}}><b>Cast-</b>{ele.cast}</p>
                      </div>
                    )        
                })
            }<br/>
            </div>
        <Actions/>
        <Family/>
        <Drama/>
        <Crime/>
        </div>
    )
}
export default MovieContainer