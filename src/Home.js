import React, { Component, Fragment } from 'react';
import {Container} from 'reactstrap';
import Navbar from '../components/Navbar';

class Post extends Component{
    render(){
        const{title}=this.props 
        return <h5>{title}</h5>
    }
}

class Home extends Component{
    state = {posts: [] }
    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/todos')
        .then(response=>response.json())
        .then(result=>{this.setState({posts: result})
        })
    }
    render(){
        const { posts } = this.state
        return(
            <Fragment>
                <Navbar/>
                <Container className="p-4">
                    {posts.map(i=> <Post title={i.title} />)}
                </Container>
            </Fragment>
        )
    }
}
export default Home