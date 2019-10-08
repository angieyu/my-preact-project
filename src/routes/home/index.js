import { render, Component } from 'preact';
import style from './style';
import Clock from './clock'

export default class Home extends Component {
	state = {
		value: '',
		name: 'world'
	}

	onInput = ev => {
		this.setState({ value: ev.target.value });
	}

	onSubmit = (e) => {
		e.preventDefault();
		this.setState({ name: this.state.value })
	}

	render() {
		return (
			<div class={style.home}>
				<h1>Landing page</h1>
				<p>Hello {this.state.name}!</p>
				<form onSubmit={this.onSubmit}>
					<input type="text" value={this.state.value} onInput={this.onInput} />
					<button type="submit">Update</button>
				</form>
				<br/>
				<Clock />
			</div>
		)
	}
}
