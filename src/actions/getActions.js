import axios from 'axios'

export const getdata =()=>{
   return (dispatch)=>{
    axios.get('https://wookie.codesubmit.io/movies',{
        headers:{
            Authorization:'Bearer Wookie2019'
        }
    })
    .then((response)=>{
        const data=(response.data.movies)
        dispatch(addData(data))    
    })
    .catch((err)=>{
        alert(err.message)
    })
   }
}

const addData = (data)=>{
    
    return {
        type:"GET_DATA",
        payload:data
    }
}


