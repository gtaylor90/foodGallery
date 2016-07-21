import React from 'react'
import Header from './header'
import DISH_STORE from '../store'
// VINDICATEDIAMSELFISHIAMWRONGIAMRIGHTISWEARIMRIGHTISWEARIKNEWITALLALONG


const Dashboard = React.createClass({
	getInitialState() {
			return DISH_STORE._getData()
	},

	componentWillMount: function() {
		DISH_STORE.on('updateContent',
		(obj)=> {
			this.setState(DISH_STORE.getData())
		})
	},
	render: function() {
	 return (
	 	<div className='dashboard' >
	 		<Header />
	 		<h3>dashboard</h3>
	 		<DishContainer />
	 	</div>
	 )
 }
})

const DishContainer = React.createClass({
	render: function() {
		return (
			<div className="dishContainer">
			</div>
			)
	}
})

const Dish = React.createClass({
	render: function() {
		return (
			<div className="dish">
				<p>{this.props.dishModel.get('title')}</p>
				<p>{this.props.dishModel.get('description')}</p>
			</div>
			)
	}
})

export default Dashboard
