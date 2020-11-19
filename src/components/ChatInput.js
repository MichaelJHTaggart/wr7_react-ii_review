import React, { Component } from 'react';

export default class ChatInput extends Component {

	constructor() {
		super();

		this.state = {
			input: ""
		}
		this.handleInput = this.handleInput.bind(this)
	}

	handleInput(e) {
		this.setState({ input: e.target.value })
	}

	handleClick() {

	}

	render() {
		return (
			<div id="chat-input">
				<input onChange={e => this.handleInput(e)} placeholder='type something...' />
				<button onClick={() => this.props.processMessage(this.state.input)} id='chat-submit'>
					Ask!
				</button>
			</div>
		);
	}
}
