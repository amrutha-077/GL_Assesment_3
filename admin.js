import { useState } from "react"
import { useDispatch,useSelector } from "react-redux"
import { add,remove } from "../slices/addslice"
import '../app.css'
const Admin=()=>{
    const {loading,Data}=useSelector((state)=>state.add.value)
    const [mName,setMName]=useState('')
    const [price,setPrice]=useState()
    const [date,setDate]=useState('')
    const dispatch=useDispatch()

    const createUser=()=>{
        dispatch(add({mName:mName,price:price,date:date}))
    }
    const handleChange=(e,key)=>{
        if(key==='uname'){
            setMName(e.target.value)
        }
        if(key==='price'){
            setPrice(e.target.value)
        }
        if(key==='date'){
            setDate(e.target.value)
        }
    }

    const handleDelete=(userid)=>{
        dispatch(remove({userid:userid}))
    }
    return(
        <div>
            <div className="form">
                Movie name:<input type='text' onChange={(e)=>handleChange(e,'uname')}></input>
                Price:<input type='text' onChange={(e)=>handleChange(e,'price')} ></input>
                Release Date:<input type='text' onChange={(e)=>handleChange(e,'date')} ></input>
                <button className="add-btn" onClick={createUser}>Add movie</button>
            </div>

            <div>
            <div className="container">
                <div className="row">
            {
                Data.map((item)=>(
                    <div className="card">
                        <img src={item.image}></img>
                        <h3>{item.mName}</h3>
                        <p>{item.price}</p>
                        <p>{item.date}</p>
                        <button  className="del-btn" onClick={()=>handleDelete(item.id)}>delete</button>
                    </div>
                ))
            }
            </div>
            </div>
        </div>
            
        </div>
    )
}
export default Admin