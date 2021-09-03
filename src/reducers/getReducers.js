const initialstate =[]

export const getReducers =(state=initialstate,action)=>{
switch(action.type){
 case "GET_DATA":{
     return [...action.payload]
 }
   default:{
     return [...state]
  }
}
}