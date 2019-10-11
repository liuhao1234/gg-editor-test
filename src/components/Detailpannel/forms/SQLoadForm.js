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

export default class DBForm extends Component{
	constructor(props){
		super(props);
		this.itemId = "";
	}
	state = {
		DATATYPE:"",
		JDBCURL:"",
		USERNAME:"",
		PASSWORD:"",
		SQL:""
	}
	render(){
		const selectedModel = this.props.selectedModel;
		const _this = this.props._this;
		console.log(selectedModel)
		
		return <Fragment>
		    <div className="p">
		    	<Row style={{marginTop:10}}>
		          <Col span={24}>
		            <span className="detail-pannel-span">数据库类型：</span>
		            <Select
		              className="input name-input"
		              size="small"
		              value={selectedModel.DATATYPE||""}
		              onChange={(value)=>{
		              	this.setState({
		                  DATATYPE: value
		                });
						_this.updateGraph('DATATYPE', value);
		              }}
		            >
		              <Option value="MYSQL">MYSQL</Option>
		              <Option value="GP">GP</Option>
		            </Select>
		          </Col>
		        </Row>
		        <Row>
		          <Col span={24}>
		            <span className="detail-pannel-span">JDBCURL：</span>
		            <Input
		              size="small"
		              className="input name-input"
		              value = {selectedModel.JDBCURL||""}
		              onChange = { ev => {
		                this.setState({
		                  JDBCURL: ev.target.value
		                });
		                _this.updateGraph('JDBCURL', ev.target.value);
		              }}
		            />
		          </Col>
		        </Row>
		        <Row style={{marginTop:10}}>
		          <Col span={24}>
		            <span className="detail-pannel-span">USERNAME：</span>
		            <Input
		              size="small"
		              value = {selectedModel.USERNAME||""}
		              className="input name-input"
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
		              value = {selectedModel.PASSWORD||""}
		              className="input name-input"
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
		            <span className="detail-pannel-span">SQL：</span>
		            <TextArea
		              size="small"
		              value = {selectedModel.SQL||""}
		              className="input name-input"
		              rows={4}
		              onChange = { ev => {
		                this.setState({
		                  SQL: ev.target.value
		                });
		                _this.updateGraph('SQL', ev.target.value);
		              }}
		            />
		          </Col>
		        </Row>
		    </div>
		</Fragment>
	}
}