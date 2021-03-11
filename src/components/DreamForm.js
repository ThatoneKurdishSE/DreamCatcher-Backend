import React, { Component } from 'react';

const initialState = {
    title: "",
    content: "",
    date: Date()
}

export default class DreamForm extends Component{

    state = initialState

    handleSubmit = (event) => {
        event.preventDefault()
        this.props.addDream(this.state)
        this.setState(initialState)
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }    

    render(){
        return (
            <form className="dream-form" onSubmit={this.handleSubmit}>
                <h2> Track a dream </h2>
                <label>Title</label>
                <input onChange={this.handleChange} type="text" name="title" value={this.state.title}/>
                <label>Content</label>
                <input onChange={this.handleChange} type="text" name="content" value={this.state.content}/>
                <label>Date</label>
                <input onChange={this.handleChange} type="date" name="date" value={this.state.date}/>
                <input type="submit"/>
            </form>
        )
    }
}