import React, { Component, Fragment } from 'react'
import { withRouter } from 'react-router'
import { Redirect } from 'react-router-dom'
import { Button, Container } from 'reactstrap'
import Navbar from '../components/Navbar'

class About extends Component {
    state = { isAuthenticated: false }
    componentWillMount(){ this.checkUser() }

    //ini nanti harusnya request beneran ke server 
    checkUser = () => {
        const token = localStorage.getItem('token')
        if(!!token){
            //Cek token valid ke server 
            return this.setState({ isAuthenticated: true })
        }
    }
        handleLogout = () => {
            const { history } = this.props
            localStorage.removeItem('token')
            history.push('/login')
        }
        render(){
            const { isAuthenticated } = this.state
            if (!isAuthenticated) return <Redirect to="/login"/>
            return(
                <Fragment>
                    <Navbar/>
                    <Container className="p-4">
                        <h1>Ini halaman About</h1> <Button color="danger">Logout</Button>
                    </Container>
                </Fragment>
            )
        }
}

export default withRouter(About)