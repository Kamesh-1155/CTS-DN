import React, { Component } from "react";
import Post from "../Models/Post";

class Posts extends Component {

    constructor(props) {
        super(props);

        this.state = {
            posts: []
        };
    }

    componentDidMount() {
        const data = [
            new Post(
                1,
                "React Basics",
                "Introduction to React Components"
            ),
            new Post(
                2,
                "React Lifecycle",
                "Understanding componentDidMount()"
            ),
            new Post(
                3,
                "React Hooks",
                "Introduction to Hooks"
            )
        ];

        this.setState({
            posts: data
        });
    }

    componentDidCatch(error) {
        alert(error);
    }

    render() {
        return (
            <div style={{ padding: "20px" }}>
                <h2>Blog Posts</h2>

                {
                    this.state.posts.map(post => (
                        <div key={post.id}>
                            <h3>{post.title}</h3>
                            <p>{post.body}</p>
                            <hr />
                        </div>
                    ))
                }
            </div>
        );
    }
}

export default Posts;