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
	render(){
		const inputingLabel = this.props.inputingLabel;
		const selectedModel = this.props.selectedModel;
		const _this = this.props._this;
		return <Fragment>
		    <div className="p">
		    	<Row style={{marginTop:10}}>
		          <Col span={24}>
		            <span className="detail-pannel-span">IP地址：</span>
		            <Select
		              className="input name-input"
		              size="small"
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
		            <span className="detail-pannel-span">SHELL路径：</span>
		            <Input
		              size="small"
		              className="input name-input"
		            />
		          </Col>
		        </Row>
		    </div>
		</Fragment>
	}
}