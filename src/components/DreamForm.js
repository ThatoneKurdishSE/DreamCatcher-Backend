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
                <h2 className="new-dream">【﻿Ｔｅｌｌ　ｍｅ　ｗｈａｔ　ｈａｐｐｅｎｅｄ】</h2>
                <div class="form__group field">
                <div className="title-label">
                    <label>Ｔｉｔｌｅ　ａｓ　: </label>
                    <input className="title-input" onChange={this.handleChange} type="text" name="title" value={this.state.title}/>
                </div>
                </div>
                <div className="content-input">
                    <label>【﻿Ｒｅｖｅ】</label>
                    <input className="input-paragraph" onChange={this.handleChange} type="text" name="content" value={this.state.content}/>
                    <label>【﻿Ｊｏｕｒ】</label>
                <input onChange={this.handleChange} type="date" name="date" value={this.state.date}/>
                </div>
                <input className="submit" type="submit"/>

            </form>
        )
    }
}