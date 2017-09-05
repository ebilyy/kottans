import { h, Component } from 'preact';
import style from './style';
import Card from '../../components/card';

export default class Profile extends Component {
	constructor(props){
		super(props)
		this.state = {
			user: null,
			loading: true
		};	
	}
	

	// gets called just before navigating away from the route
	componentDidMount(){
		fetch(`https://api.github.com/users/${this.props.user}`)
		.then(resp => resp.json())
		.then(user =>{
			this.setState({
				user,
				loading: false
			})
		})
		.catch(err =>console.error(err));
	}
	// Note: `user` comes from the URL, courtesy of our router
	render({}, { loading, user }) {
		return (
			<div class={style.profile}>
				<Card />
				<h1>Profile : {user}</h1>
				
				<select name="" id="">
					<option value="all">all</option>
					<option value="all">has issues</option>
				</select>

				<select name="" id="">
					<option value="name">name</option>
					<option value="stars">Stars</option>
					<option value="stars">count issues</option>
					<option value="date">date update</option>
				</select>
				<p></p>
				<p>This is the user profile for a user named { user }.</p>
				

				

				<p></p>
			</div>
		);
	}
}
