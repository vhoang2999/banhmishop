import React from 'react';
import {Layout} from 'antd';
const {Content} = Layout
export default class Home extends React.Component {
	render() {
		return (
			<Content style={{ background: '#fff', padding: 24, margin: 0, minHeight: 280 }}>
				<h1 style={{color:'red'}}>Wellcome to BankMi</h1>
				<img alt="banner" src="/admin.png" width="100%"/>
			</Content>
		)
	}
}