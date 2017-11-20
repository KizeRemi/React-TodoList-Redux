import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Todo from './Todo.js';
import './style.css';

class Todos extends Component {
	static propTypes = {
		todos: PropTypes.array.isRequired,
		loadTodos: PropTypes.func.isRequired,
		toggleTodo: PropTypes.func.isRequired,
		addTodo: PropTypes.func.isRequired,
	};
	
	constructor() {
		super();
		this.onChange = this.onChange.bind(this);
		this.onAddTodo = this.onAddTodo.bind(this);
		this.changeFilter = this.changeFilter.bind(this);
		this.state = {
			newTodo: '',
			todos: [],
			filter: ''
		};
	}

	onChange (event) {
		this.setState({newTodo: event.target.value});
	}

	onAddTodo () {
		if(this.state.newTodo) {
			this.props.addTodo(this.state.newTodo);
			this.setState({ newTodo: '' });
		}
	}

	onToggleTodo = (index) => {
		this.props.toggleTodo(index)
	}

	changeFilter(event) {
		this.setState({ filter: event.target.value });
	}

	componentWillMount() {
		this.props.loadTodos();
	}

	render() {
		let todos = this.props.todos;
		return (
			<div>
				<label>
				Nom:
					<input type="text" value={this.state.newTodo} onChange={this.onChange} />
				</label>
				<button value="Submit" onClick={this.onAddTodo}>Ajouter</button>
				<ul>
					{				
						todos.map((todo, index)=>{
							const isTodoFiltered = (this.state.filter==='todo' && todo.complete===true);
							const isCompleteFiltered = (this.state.filter==='complete' && todo.complete===false);
							if(isTodoFiltered || isCompleteFiltered) return null;
							return <Todo
										key={index}
										index={index}
										todo={todo}
										onToggleTodo={this.onToggleTodo} 
									/>
						})
					}
				</ul>
				<div>
					Filtre:  
					<input type="radio" name="filter" value="all" onChange={this.changeFilter} /> Tous
					<input type="radio" name="filter" value="complete" onChange={this.changeFilter} /> Terminés
					<input type="radio" name="filter" value="todo" onChange={this.changeFilter} /> A faire
				</div>
			</div>
		);
	}
}

function mapDispatchToProps(dispatch) {
	return {
		loadTodos: () => {
			dispatch({ type: "LOAD_TODOS"});
		},
		toggleTodo: index => {
			dispatch({ type: "TOGGLE_TODO", index });
		},
		addTodo: label => {
			dispatch({ type: "ADD_TODO", label });
		}
	};
}

function mapStateToProps(state) {
	return {
		todos: state.todos
	};

}

const TodosList = connect(mapStateToProps, mapDispatchToProps)(Todos);

export default TodosList; 
