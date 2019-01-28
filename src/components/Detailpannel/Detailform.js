import React,{ Component,Fragment } from 'react';
import SQLoadForm from './forms/SQLoadForm';
import SaveProcessLoadForm from './forms/SaveProcessLoadForm';
import ShellLoadForm from './forms/ShellLoadForm';
import DataTransform from './forms/DataTransform';
export default class Detailform extends Component{

	initDetailform = ()=>{
		switch(this.props.selectedModel.shape){
			case "SQL-LOAD":{
				return  <SQLoadForm 
						_this={this.props._this}
						inputingLabel={this.props.inputingLabel} 
		                selectedModel={this.props.selectedModel}
					/>
				break
			}

			case "SAVE-PROCESS-LOAD":{
				return  <SaveProcessLoadForm 
						_this={this.props._this}
						inputingLabel={this.props.inputingLabel} 
		                selectedModel={this.props.selectedModel}
					/>
				break
			}

			case "SHELL-LOAD":{
				return  <ShellLoadForm 
						_this={this.props._this}
						inputingLabel={this.props.inputingLabel} 
		                selectedModel={this.props.selectedModel}
					/>
				break
			}

			case "DATA-TRANSFORM":{
				return  <DataTransform 
						_this={this.props._this}
						inputingLabel={this.props.inputingLabel} 
		                selectedModel={this.props.selectedModel}
					/>
				break
			}

			default:
				return "正在开发..."
		}
		// if(this.props.selectedModel.shape === "SQL-LOAD"){
		// 	return  <DBForm 
		// 				_this={this.props._this}
		// 				inputingLabel={this.props.inputingLabel} 
		//                 selectedModel={this.props.selectedModel}
		// 			/>
		// }else {
		// 	return 'aaa'
		// }
		
	}
	render(){
		return <Fragment>
			{ this.initDetailform() }
		</Fragment>
	}
}