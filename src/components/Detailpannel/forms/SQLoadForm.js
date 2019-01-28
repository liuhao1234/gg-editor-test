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
	render(){
		const inputingLabel = this.props.inputingLabel;
		const selectedModel = this.props.selectedModel;
		const _this = this.props._this;
		return <Fragment>
		    <div className="p">
		    	<Row style={{marginTop:10}}>
		          <Col span={24}>
		            <span className="detail-pannel-span">数据库类型：</span>
		            <Select
		              className="input name-input"
		              size="small"
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
		              value = {inputingLabel ? inputingLabel : selectedModel.label}
		              onChange = { ev => {
		                _this.setState({
		                  inputingLabel: ev.target.value
		                });
		              }}
		              onBlur = { ev => {
		                _this.updateGraph('label', ev.target.value);
		                //this.updateGraph('aaa', 'vvv');
		                _this.setState({
		                  inputingLabel: null
		                });
		              }}
		            />
		          </Col>
		        </Row>
		        <Row style={{marginTop:10}}>
		          <Col span={24}>
		            <span className="detail-pannel-span">USERNAME：</span>
		            <Input
		              size="small"
		              className="input name-input"
		            />
		          </Col>
		        </Row>
		        <Row style={{marginTop:10}}>
		          <Col span={24}>
		            <span className="detail-pannel-span">PASSWORD：</span>
		            <Input
		              size="small"
		              className="input name-input"
		            />
		          </Col>
		        </Row>
		        <Row style={{marginTop:10}}>
		          <Col span={24}>
		            <span className="detail-pannel-span">SQL：</span>
		            <TextArea
		              size="small"
		              className="input name-input"
		              rows={4}
		            />
		          </Col>
		        </Row>
		    </div>
		</Fragment>
	}
}