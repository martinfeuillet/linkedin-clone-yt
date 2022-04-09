import React, { useEffect, useState } from "react";
import { ModeEditOutline, Image, Subscriptions, EventNote, CalendarViewDay } from "@mui/icons-material";
import "./Feed.css";
import InputOptions from "./InputOptions";
import Post from "./Post";
import {db} from "./firebase";
import { collection, getDocs, addDoc,query, orderBy, limit } from "firebase/firestore";

function Feed() {

    const [input, setInput] = useState("");
    const [posts, setPosts] = useState([])
    const [render, setRender] = useState(false);

    const firebasePosts = collection(db,"posts");
    
    const sendPost = (e) => {
        e.preventDefault();
        addDoc(firebasePosts, {
            name:"Martin Feuillet",
            description: 'author of the page',
            message: input,
            photoUrl: 'https://picsum.photos/200/300',
            timestamp: new Date().toLocaleString()
        })
        setInput("");
        setRender(!render);
    }

    const getPosts = async () => {
        const q=query(firebasePosts,orderBy("timestamp","desc"),limit(10));
        const data = await getDocs(q);
        setPosts(data.docs.map((doc) => ({...doc.data(), id: doc.id})))
    };

    useEffect(() => {
        getPosts();
    },[render])

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
        {posts.map(({id, name,description,message, photoUrl}) => (
            <Post key={id} name={name} description={description}  message={message} photoUrl = {photoUrl} />
        ))}
        

        </div>


        
    );
}

export default Feed;
