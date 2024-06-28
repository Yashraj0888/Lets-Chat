
import { auth } from "../../lib/firebase"
import "./detail.css"
const Detail=()=>{
    return (
        <div className="detail">
            <div className="user">
                <img src="./avatar.png" alt="" />
                <h2>Yash</h2>
                <p>Lorem ipsum dolor sit amet.</p>

            </div>
            <div className="info">
                <div className="option">
                    <div className="title">
                        <span>Chat Settings</span>
                        <img src="./arrowUp.png" alt="" />
                    </div>
                </div>
                <div className="option">
                    <div className="title">
                        <span>Privacy and Help</span>
                        <img src="./arrowUp.png" alt="" />
                    </div>
                </div>
                <div className="option">
                    <div className="title">
                        <span>Media</span>
                        <img src="./arrowDown.png" alt="" />
                    </div>
                
                    <div className="photos">
                        <div className="photoItem">
                            <div className="photoDetail">
                                <img src="https://cdn.pixabay.com/photo/2024/01/15/11/36/batman-8510022_640.png" alt="" />
                                <span>photo_2024_2.png</span>
                            </div>
                        <img src="./download.png" alt="" />

                        </div>
                        <div className="photoItem">
                            <div className="photoDetail">
                                <img src="https://cdn.pixabay.com/photo/2024/01/15/11/36/batman-8510022_640.png" alt="" />
                                <span>photo_2024_2.png</span>
                            </div>
                        <img src="./download.png" alt="" />

                        </div>
                        <div className="photoItem">
                            <div className="photoDetail">
                                <img src="https://cdn.pixabay.com/photo/2024/01/15/11/36/batman-8510022_640.png" alt="" />
                                <span>photo_2024_2.png</span>
                            </div>
                        <img src="./download.png" alt="" />

                        </div>
                        <div className="photoItem">
                            <div className="photoDetail">
                                <img src="https://cdn.pixabay.com/photo/2024/01/15/11/36/batman-8510022_640.png" alt="" />
                                <span>photo_2024_2.png</span>
                            </div>
                        <img src="./download.png" alt="" />

                        </div>
                        <div className="photoItem">
                            <div className="photoDetail">
                                <img src="https://cdn.pixabay.com/photo/2024/01/15/11/36/batman-8510022_640.png" alt="" />
                                <span>photo_2024_2.png</span>
                            </div>
                        <img src="./download.png" alt="" />

                        </div>
                        <div className="photoItem">
                            <div className="photoDetail">
                                <img src="https://cdn.pixabay.com/photo/2024/01/15/11/36/batman-8510022_640.png" alt="" />
                                <span>photo_2024_2.png</span>
                            </div>
                        <img src="./download.png" alt="" />

                        </div>
                        
                    </div>
                </div>
                <div className="option">
                    <div className="title">
                        <span>Files</span>
                        <img src="./arrowUp.png" alt="" />
                    </div>
                </div>

                <button>Block User</button>

                <button className="logOut" onClick={()=>auth.signOut()}>Log out</button>
                
            </div>
        </div>
        
    )
}

export default Detail