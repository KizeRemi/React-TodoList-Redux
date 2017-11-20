import React, { Component } from 'react';

type ClockProps = {}
type ClockState = {
	date: date
};

class Clock extends React.Component<ClockProps, ClockState> {
	timerId: number;
	constructor(props: ClockProps) {
		super(props);
		this.state = { date: new Date() };
	}
  
	componentWillMount() {
		setInterval(() => {
			this.setState({ date: new Date() });
		}, 1000);
	}

	shouldComponentUpdate(nextProps: ClockProps, nextState: ClockState){
		console.log('shouldComponentUpdate', nextState.date.toLocaleTimeString());
		return true;
	}

	componentWillUpdate(nextProps: ClockProps, nextState: ClockState){
		console.log('componentWillUpdate', nextState.date.toLocaleTimeString());
	}
  
	componentWillUnmount() {
		//TODO
	}
  
	render() {
		return (
			<div>
				<h3>{ this.state.date.toLocaleTimeString() }.</h3>
			</div>
		);
	}
}
export default Clock;