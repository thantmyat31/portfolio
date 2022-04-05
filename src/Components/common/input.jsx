import React from 'react';
import { Form } from 'react-bootstrap';

const Input = ({ type, placeholder, name, value, onChange, ...rest }) => {
	return (
		<Form.Group>
			<Form.Control
				size="small"
				type={type}
				placeholder={placeholder}
				name={name}
				onChange={onChange}
				value={value}
				required
				{...rest}
			/>
		</Form.Group>
	);
};

export default Input;
