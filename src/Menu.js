import React, { Component } from 'react'
import './Menu.css';

function CatList(props) {
	console.log(props.MenuCat);
	const rows = props.MenuCat.map((row, index) => {
		return (
			<li class="nav-item" key={index} >
			 <a class="nav-link" href="">{row.name}</a>
			</li>
		);
	})

	return rows;

}

class Menu extends Component {

	render() {
		const { categories } = this.props;
		console.log(categories);
		return (
		<div>
			<ul class="nav justify-content-end">
			<CatList MenuCat={categories}/>
			</ul>
		</div>
		);
	}
}

export default Menu