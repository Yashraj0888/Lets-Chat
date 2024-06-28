import "./addUser.css" ;
const AddUser=()=>{
    return (
        <div className="addUser">
            <form>
                <input type="text" placeholder="UserName" name="username" />
                <button>Search</button>
            </form>
            <div className="user">
                <div className="detail">
                    <img src="./avatar.png" alt="" />
                    <span>Yash</span>
                </div>
                <button><span>Add User</span></button>
            </div>
        </div>
    )
}
export default AddUser