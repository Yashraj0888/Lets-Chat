import { useEffect, useState } from "react"
import "./chatList.css"
import AddUser from "./add_user/AddUser"
import { useUserStore } from "../../../lib/useStore"
import { doc, getDoc, onSnapshot } from "firebase/firestore"
import { db } from "../../../lib/firebase"
import Chat from "../../chat/Chat"
const Chatlist=()=>{

    const [chats,setChats]=useState([])
    const [addMode,setAddMode]=useState(false)
    const {currentUser}=useUserStore()

    useEffect(()=>{
        const unSub=onSnapshot(doc(db,"userChats",currentUser.id),async(res)=>{
            const items=res.data().chats;
            const promises=items.map(async(item)=>{
                const userDocRef =doc(db,"users",item.receiverId)
                const useDocSnap=await getDoc(userDocRef)

                return {...item,user};

            })

            const chatData=await Promise.all(promises)
            setChats(chatData.sort((a,b)=>b.updatedAt-a.updatedAt))

        })
        return ()=>{
            unSub()
        }
    },[currentUser.id])


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
            {chats.map((chat)=>
            <div className="item" key={chat.chatId}>
                <img src="./avatar.png" alt="" />
                <div className="texts">
                    <span>Yash</span>
                    <p>chat.lastMessage</p>
                </div>
            </div> )}   
              
               
            {addMode && <AddUser/>}
        </div>
    )
}

export default Chatlist