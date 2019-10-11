import React,{ Component,Fragment } from 'react';
import Axios from '../../axios';
export default class Items extends Component{
	constructor(props){
		super(props)
		this.classNameList = {
			"SQL-LOAD":"sql-load",
			"SAVE-PROCESS-LOAD":"save-process-load",
			"SHELL-LOAD":"shell-load",
			"DATA-TRANSFORM":"data-tansform"
		}
	}
	state = {
		itemsList:null
	}
	getItemsList = ()=>{
		Axios.ajax({
			url:'/editorItemList'
		}).then((res)=>{
			if(res.code === 200){
				this.setState({
					itemsList:res.data.data
				})
			}
		})
	}
	componentDidMount(){
		this.getItemsList();
	}
	render(){
		if(!this.state.itemsList) return false;
		return <Fragment>
			{
				this.state.itemsList.map((item,index)=>{
					return  <li key={index} className="getItem" data-shape={item.shape} data-type="node" data-size="170*34">
				                <span className={"pannel-type-icon "+this.classNameList[item.shape]}></span>{item.name}
				            </li>
				})
			}
		</Fragment>
	}
}