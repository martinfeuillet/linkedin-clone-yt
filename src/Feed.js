import React, { useEffect, useState } from "react";
import { ModeEditOutline, Image, Subscriptions, EventNote, CalendarViewDay } from "@mui/icons-material";
import "./Feed.css";
import InputOptions from "./InputOptions";
import Post from "./Post";
import {db} from "./firebase";
import { collection, getDocs, addDoc } from "firebase/firestore";

function Feed() {

    const [input, setInput] = useState("");
    const [posts, setPosts] = useState([])

    const firebasePosts = collection(db,"posts");

    const sendPost = (e) => {
        e.preventDefault();
        addDoc(firebasePosts, {
            name:"John Doe",
            description : 'I am a software developer',
            'message ' : input,
        })
    }

    const getPosts = async () => {
        const data = await getDocs(firebasePosts);
        setPosts(data.docs.map((doc) => ({...doc.data(), id: doc.id})))
    };

    useEffect(() => {
        // collection(db,"posts").onSnapshot((snapshot) => (
        //     setPosts(snapshot.docs.map((doc) => ({
        //         id: doc.id,
        //         data : doc.data(),
        //     })))
        // ))
        getPosts();
    },[])
    console.log(posts);
    return (
        <div className="feed">
            <div className="feed__inputContainer">
                <div className="feed__input">
                    <ModeEditOutline />
                    <form>
                        <input type="text" value={input} onChange={e => setInput(e.target.value)} />
                        <button onClick={sendPost} type="submit">Envoyer</button>
                    </form>
                </div>
                <div className="feed__inputOptions">
                    <InputOptions title="Photo" Icon={Image} color="#70B5F9" />
                    <InputOptions title="Video" Icon={Subscriptions} color="#E7A33E" />
                    <InputOptions title="Event" Icon={EventNote} color="#C0CBCD" />
                    <InputOptions title="Write article" Icon={CalendarViewDay} color="#7DC15E" />
                </div>
            </div>

        {/* Post */}
        {posts.map(post => (
            <Post message={post.data} />
        ))}
        <Post 
        name = "Martin Feuillet"
        descrition="this is a test"
        message="let's go"
         />

        </div>


        
    );
}

export default Feed;
