import React from 'react';
import PropTypes from 'prop-types';

class Todo extends React.Component {
	static propTypes = {
		todo: PropTypes.instanceOf(Object).isRequired,
		onToggleTodo: PropTypes.func.isRequired
	};

	toggleTodo(i) {
		this.props.onToggleTodo(i);
	}

	shouldComponentUpdate(){
		return true;
	}

	render() {
		const todo = this.props.todo;
		return (
			<li onClick={() => this.props.onToggleTodo(this.props.index)} 
				className={(todo.complete ? 'done' : '')}>
			{ todo.label }
		 	</li>
		);
	}
}

export default Todo;