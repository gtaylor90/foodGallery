import React from 'react'
import Header from './header'
import DISH_STORE from '../store'
import ACTIONS from '../actions.js'
// VINDICATEDIAMSELFISHIAMWRONGIAMRIGHTISWEARIMRIGHTISWEARIKNEWITALLALONG


const Dashboard = React.createClass({
	getInitialState() {
			return DISH_STORE._getData()
	},

	componentWillMount: function() {
		ACTIONS.fetchDishes()
		DISH_STORE.on('updateContent',
		(obj)=> {
			this.setState(DISH_STORE.getData())
		})
	},

	componentWillUnmount: function() {
		DISH_STORE.off('updateContent')
	},

	render: function() {
	 return (
	 	<div className='dashboard' >
	 		<Header />
	 		<h3>dashboard</h3>
	 		<DishContainer dishColl={this.state.collection} />
	 	</div>
	 )
 }
})

const DishContainer = React.createClass({
	render: function() {
		console.log(this.props.dishColl);
		console.log('rendering the DishContainer');
		return (
			<div className="dishContainer">
			{this.props.dishColl.map(
				(model)=> <Dish dishModel={model} key = {model.id} /> )}
			</div>
			)
	}
})

const Dish = React.createClass({
	render: function() {
		console.log(this.props.dishModel);
		console.log('rendering a dish');
		return (
			<div className="dish">
				<p>{this.props.dishModel.get('title')}</p>
				<p>{this.props.dishModel.get('description')}</p>
			</div>
			)
	}
})

export default Dashboard
