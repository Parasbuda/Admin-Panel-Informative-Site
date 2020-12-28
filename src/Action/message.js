import  {CREATE_MESSAGE} from "./types"

//CREATE MESSAGE FOR ALERT

export const createMessage=msg=>{
    return{
        type:CREATE_MESSAGE,
        payload:msg
    }
}