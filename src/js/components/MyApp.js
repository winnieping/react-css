import React from 'react';
import {Link} from 'react-router';
import './style.scss';

var MyApp = React.createClass({
	render: function () {
		return (
			<div>
				<div className='header'>
					<Link activeClassName="active" to="/home">首页</Link>
					<Link activeClassName="active" to="/info">信息</Link>
					<Link activeClassName="active" to="/about">关于</Link>
				</div>
				<div>
					{this.props.children}
				</div>
			</div>
		);
	}
});

export default MyApp;