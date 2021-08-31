import React from 'react';
import {Layout} from 'antd';
const {Footer} = Layout;

export default class FooterComponent extends React.Component {
	render() {
		return(
			<Footer id="footer">
		      <div className="row">
		        <div className="col-8 col-md footmargin">
		          <h5 style={{color: "black"}} >BanhMiShop<small className="d-block mb-4 text-muted">&copy;2021</small></h5>
		          <ul className="list-unstyled text-small">
		            <li>Ăn là mê - chê không tính tiền</li>
		            
		          </ul>
		        </div>
		        <div className="col-2 col-md">
		          <br/>
		          <ul className="list-unstyled text-small">
		            <li><img src="./eatfood.png" width="150px" alt="eatfood"/></li>
		          </ul>
		        </div>
		        <div className="col-2 col-md">
		          <ul className="list-unstyled text-small">
		          	<br/>
		            <li><img src="./chungnhanantoan.png" width="150px" alt="antoanthucpham"/></li>
		            
		          </ul>
		        </div>
		      </div>
		    </Footer>
		);
	}
}