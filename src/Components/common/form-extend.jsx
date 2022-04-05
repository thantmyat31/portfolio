import React, { Component } from 'react';
import Input from './input';

class FormExtend extends Component {
	state = {
		contact: {
			name: '',
			email: '',
			message: ''
		}
	};

	handleOnChange = (input) => {
		const { name, value } = input;
		const contact = { ...this.state.contact };
		contact[name] = value;
		this.setState({ contact });
	};

	handleOnSubmit = (e) => {
		e.preventDefault();
		const { name } = this.state.contact;
		const contact = { name: '', email: '', message: '' };
		alert(`Hi !, ${name}. Thant will receive your message and he will reply soon.`);
		this.setState({ contact });
	};

	inputMethod = (type, placeholder, name, rest) => {
		return (
			<Input
				type={type}
				placeholder={placeholder}
				name={name}
				onChange={(e) => this.handleOnChange(e.currentTarget)}
				value={this.state.contact.name}
				{...rest}
			/>
		);
	};

	textAreaMethod = () => {
		return (
			<Input
				as="textarea"
				rows="3"
				placeholder="Your Message"
				name="message"
				onChange={(e) => this.handleOnChange(e.currentTarget)}
				value={this.state.contact.message}
			/>
		);
	};

	render() {
		return;
	}
}

export default FormExtend;
