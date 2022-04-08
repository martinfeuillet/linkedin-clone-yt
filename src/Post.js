import { Avatar } from "@mui/material";
import {ChatOutlined, SendOutlined, ShareOutlined, ThumbUpAltOutlined} from "@mui/icons-material";
import React from "react";
import "./Post.css";
import InputOptions from "./InputOptions";

function Post({ name, description, message, photoUrl }) {
    return (
        <div className="post">
            <div className="post__header">
                <Avatar />
                <div className="post__info">
                    <h2>{name}</h2>
                    <p>{description}</p>
                </div>
            </div>

            <div className="post__body">
                <p>{message}</p>
            </div>

            <div className="post__buttons">
                <InputOptions title="Like" Icon={ThumbUpAltOutlined} color="gray" />
                <InputOptions title="Comment" Icon={ChatOutlined} color="gray" />
                <InputOptions title="Share" Icon={ShareOutlined} color="gray" />
                <InputOptions title="Send" Icon={SendOutlined} color="gray" />
            </div>
        </div>
    );
}

export default Post;
