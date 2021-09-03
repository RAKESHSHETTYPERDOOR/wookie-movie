import { useSelector } from "react-redux"
import { action } from "../actions/getActions"

const Actions= ()=>{


    const mystyle ={
        display:'grid',
        gridTemplateColumns:'30% 30% 30%',
        gridGap:'20px',
        marginTop:'20px',
        
    }   


const actions =useSelector((state)=>{
    return state.data.filter((ele)=>{
        return (ele.genres.includes('Action'))
    })
})




    return (
        <div>
           <h1>Action Movie-{actions.length}</h1> <hr/>
           <div style={mystyle}>
            {
                actions.map((ele,i)=>{
                    return (
                        <div key={i} style={{background:'white',border:'2px solid black'}}>
                           <img src={ele.backdrop} style={{width:'350px',margin:'30px'}}/>
                           <h4 style={{fontStyle:'bold',margin:'30px'}}> {ele.title}</h4>
                           <p style={{fontStyle:'bold',margin:'30px'}}><b>Length-</b>{ele.length}</p>
                           <p style={{fontStyle:'bold',margin:'30px'}}><b>Cast-</b>{ele.cast}</p>
                      </div>
                    )        
                })
            }
            </div>
        </div>
    )
}
export default Actions