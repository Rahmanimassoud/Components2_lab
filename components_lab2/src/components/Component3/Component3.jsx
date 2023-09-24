import { useState } from "react";
import './index.css'

const Component3 = () => {

    const [userInputs, setUserInputs] = useState({
        userName: "",
        userImage:"",
        userBio: ""
    })

    const [userProfile, setUserProfile] = useState({
        userName: "",
        userImage: "",
        userBio: ""
    });


    const handelInputChanges = (event) => {
        setUserInputs({
            ...userInputs, [event.target.name]: event.target.value
        })
    }

    const updateUserProfile = () => {
        setUserProfile({...userInputs})
        setUserInputs({
            userBio: "",
            userImage: "",
            userName: ""
        })
    }


    return (
        <div className="user-bio">
            <label htmlFor="userName">User Name:</label>
            <input type="text" name="userName" onChange={handelInputChanges} value={userInputs.userName}/>

            <label htmlFor="userImage">User Image:</label>
            <input type="text" name="userImage" onChange={handelInputChanges} value={userInputs.userImage} />

            <label htmlFor="userBio">User Bio:</label>
            <textarea name="userBio" onChange={handelInputChanges} value={userInputs.userBio}  rows="4" cols="20">
            </textarea>

            <button onClick={updateUserProfile}>Update Profile</button>

            <h2>User Name: {userProfile.userName}</h2>
            <img src={userProfile.userImage} alt="User" style={{maxWidth: '100px'}}/>
            <p>User Bio: {userProfile.userBio}</p>
        </div>
    )

};

export default Component3;
