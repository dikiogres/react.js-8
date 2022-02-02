import React, { Component } from 'react'

class Submit extends Component {
    state = { value: '' }

    handleChange = e =>{
        this.setState({value: e.target.value}); 
    }

    handleSubmit= e =>{
        alert('Nama yang dimasukkan:' + this.state.value); 
        //Untuk mencegah default behaviour dijalankan.
        e.preventDefault(); 
    }
    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <label>
                    Name: <input type="text" value={this.state.value} onChange={this.handleChange}/>
                </label>
                <input type="submit" value="Submit" />
            </form>
        );
    }
}

export default Submit;