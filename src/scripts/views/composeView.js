import React from 'react'
import Header from './header'
import ACTIONS from '../actions'
import {User} from '../models/models'

const ComposeView = React.createClass({
	 render: function() {
	 	return (
	 		<div className="composeView" >
	 			<Header />
	 			<h3>post a dish!</h3>
	 			<DishPostingForm />
	 		</div>
	 	)
 	}
})
/*
description: {type: String, required: true},
rating: {type: Number, required: true},
likes: {type: Number, default: 0},
location: {type: String, required: true},
title: {type: String, required: true},
authorEmail: {type: String, required: true},
imgURL: {type: String, required: true},
authorID: {type: String, required: true},
tags: {type: [String], default: []}
*/
const DishPostingForm = React.createClass({
	_handlePost: function(evt) {
			evt.preventDefault()
			ACTIONS.foodPost({
				description: evt.currentTarget.postDescription.value,
				rating: evt.currentTarget.postDescription.value,
				likes: 5,
				location: evt.currentTarget.postLocation.value,
				title:  evt.currentTarget.postTitle.value,
				authorEmail: User.getCurrent().email,
				imgURL: "",
				authorID: User.getCurrent()._id
			})
	},
	render: function() {
		return (
			<div className="dishPostingForm">
				<form onSubmit={this._handlePost} >
					<input type="text" name="postTitle"
					placeholder="enter the dish title" />
					<textarea class="u-full-width"
					name="postDescription"
					placeholder="Describe dat food"></textarea>
					{/*fix the styling on this*/}
					<input type="text" name="postLocation"
					placeholder="enter the Location" />
					<input type="text" name="rating"
					placeholder="enter the Rating" />
					{/*fix the styling on this*/}
					<button type="submit">Post dat</button>
				</form>
			</div>
			)
	}
})

export default ComposeView
