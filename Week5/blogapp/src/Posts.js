import React, { Component } from "react";
import Post from "./Post";

class Posts extends Component {

    constructor(props) {
        super(props);

        this.state = {
            posts: []
        };
    }

    componentDidMount() {

        const posts = [
            new Post(
                1,
                "React Component Lifecycle",
                "componentDidMount() is invoked immediately after a component is mounted."
            ),
            new Post(
                2,
                "React Error Handling",
                "componentDidCatch() is used to catch JavaScript errors in child components."
            )
        ];

        this.setState({ posts });
    }

    componentDidCatch(error, info) {
        alert(error);
        console.log(info);
    }

    render() {

        return (
            <div>
                <h2>Blog Posts</h2>

                {this.state.posts.map(post => (
                    <div key={post.id}>
                        <h3>{post.title}</h3>
                        <p>{post.body}</p>
                    </div>
                ))}
            </div>
        );
    }
}

export default Posts;