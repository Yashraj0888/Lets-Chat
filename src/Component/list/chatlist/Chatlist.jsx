import { useState } from "react"
import "./chatList.css"
import AddUser from "./add_user/AddUser"
const Chatlist=()=>{

    const [addMode,setAddMode]=useState(false)
    return (
        <div className="chatList">
            <div className="search">
                <div className="searchBar">
                    <img className="searchBarImage" src="/search.png" alt="" />
                    <input type="text" placeholder="Search" />
                </div>
                <img src={addMode ?"./minus.png":"./plus.png"}
                onClick={()=>setAddMode((prev)=>!prev)}
                className="add" alt="" />
            </div>

            <div className="item">
                <img src="./avatar.png" alt="" />
                <div className="texts">
                    <span>Yash</span>
                    <p>Hello</p>
                </div>
            </div>    
            <div className="item">
                <img src="./avatar.png" alt="" />
                <div className="texts">
                    <span>Yash</span>
                    <p>Hello</p>
                </div>
            </div>    
            <div className="item">
                <img src="./avatar.png" alt="" />
                <div className="texts">
                    <span>Yash</span>
                    <p>Hello</p>
                </div>
            </div>    
            <div className="item">
                <img src="./avatar.png" alt="" />
                <div className="texts">
                    <span>Yash</span>
                    <p>Hello</p>
                </div>
            </div>    
            <div className="item">
                <img src="./avatar.png" alt="" />
                <div className="texts">
                    <span>Yash</span>
                    <p>Hello</p>
                </div>
            </div>    
            {addMode && <AddUser/>}
        </div>
    )
}

export default Chatlist