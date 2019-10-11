import React,{ Component,Fragment } from 'react';
import {
  Row,
  Col,
  Checkbox, 
  Input,
  Select
} from 'antd';

const Option = Select.Option;
const { TextArea } = Input;

export default class ShellLoadForm extends Component{
	state = {
		IPADRESS:"",
		USERNAME:"",
		PASSWORD:"",
		SHELLPATH:""
	}
	render(){
		const selectedModel = this.props.selectedModel;
		const _this = this.props._this;
		console.log(selectedModel)
		return <Fragment>
		    <div className="p">
		    	<Row style={{marginTop:10}}>
		          <Col span={24}>
		            <span className="detail-pannel-span">IP地址：</span>
		            <Select
		              className="input name-input"
		              size="small"
		              value={selectedModel.IPADRESS||""}
		              onChange={(value)=>{
		              	this.setState({
		                  IPADRESS: value
		                });
						_this.updateGraph('IPADRESS', value);
		              }}
		            >
		              <Option value="MYSQL">MYSQL</Option>
		              <Option value="GP">GP</Option>
		            </Select>
		          </Col>
		        </Row>
		        <Row style={{marginTop:10}}>
		          <Col span={24}>
		            <span className="detail-pannel-span">USERNAME：</span>
		            <Input
		              size="small"
		              className="input name-input"
		              value={selectedModel.USERNAME||""}
		              onChange = { ev => {
		                this.setState({
		                  USERNAME: ev.target.value
		                });
		                _this.updateGraph('USERNAME', ev.target.value);
		              }}
		            />
		          </Col>
		        </Row>
		        <Row style={{marginTop:10}}>
		          <Col span={24}>
		            <span className="detail-pannel-span">PASSWORD：</span>
		            <Input
		              size="small"
		              className="input name-input"
		              value={selectedModel.PASSWORD||""}
		              onChange = { ev => {
		                this.setState({
		                  PASSWORD: ev.target.value
		                });
		                _this.updateGraph('PASSWORD', ev.target.value);
		              }}
		            />
		          </Col>
		        </Row>
		        <Row style={{marginTop:10}}>
		          <Col span={24}>
		            <span className="detail-pannel-span">SHELL路径：</span>
		            <Input
		              size="small"
		              className="input name-input"
		              value={selectedModel.SHELLPATH||""}
		              onChange = { ev => {
		                this.setState({
		                  SHELLPATH: ev.target.value
		                });
		                _this.updateGraph('SHELLPATH', ev.target.value);
		              }}
		            />
		          </Col>
		        </Row>
		    </div>
		</Fragment>
	}
}