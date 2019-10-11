import React,{ Component,Fragment } from 'react';
import {
  Row,
  Col,
  Checkbox, 
  Input,
  Select,
  Tabs,
  Radio
} from 'antd';

const Option = Select.Option;
const { TextArea } = Input;
const TabPane = Tabs.TabPane;
const RadioGroup = Radio.Group;

export default class DataTransform extends Component{
	render(){
		const selectedModel = this.props.selectedModel;
		const _this = this.props._this;
		console.log(selectedModel)
		return <Fragment>
		    <div className="p" style={{marginTop:-16,marginBottom:-16}}>
		    	
		        <Tabs 
		        	defaultActiveKey="1"
		        	tabBarGutter={0}
		        	tabBarStyle={{textAlign:'center',marginBottom:0}}
		        >
				    <TabPane tab="读取" key="1">
				    	<Row style={{marginTop:10}}>
				          <Col span={24}>
				            <span className="detail-pannel-span">数据类型：</span>
				            <Select
				              className="input name-input"
				              size="small"
				              value={selectedModel.DATATYPE_READ||""}
				              onChange={(value)=>{
				              	this.setState({
				                  DATATYPE_READ: value
				                });
								_this.updateGraph('DATATYPE_READ', value);
				              }}
				            >
				              <Option value="FTP">FTP</Option>
				              <Option value="MYSQL">MYSQL</Option>
				              <Option value="GP">GP</Option>
				            </Select>
				          </Col>
				        </Row>
				    	<Row style={{marginTop:10}}>
				          <Col span={24}>
				            <span className="detail-pannel-span">FTP类型：</span>
				            <RadioGroup 
				            	value={selectedModel.FTPTYPE_READ||""}
				            	onChange={ev=>{
					              	this.setState({
					                  FTPTYPE_READ: ev.target.value
					                });
									_this.updateGraph('FTPTYPE_READ', ev.target.value);
					            }}
				            >
								<Radio value="FTP">FTP</Radio>
								<Radio value="SFTP">SFTP</Radio>
							</RadioGroup>
				          </Col>
				        </Row>
				        <Row style={{marginTop:10}}>
				          <Col span={24}>
				            <span className="detail-pannel-span">HOST：</span>
				            <Input
				              size="small"
				              className="input name-input"
				              value={selectedModel.HOST_READ||""}
				              onChange = { ev => {
				                this.setState({
				                  HOST_READ: ev.target.value
				                });
				                _this.updateGraph('HOST_READ', ev.target.value);
				              }}
				            />
				          </Col>
				        </Row>
				        <Row style={{marginTop:10}}>
				          <Col span={24}>
				            <span className="detail-pannel-span">PORT：</span>
				            <Input
				              size="small"
				              className="input name-input"
				              value={selectedModel.PORT_READ||""}
				              onChange = { ev => {
				                this.setState({
				                  PORT_READ: ev.target.value
				                });
				                _this.updateGraph('PORT_READ', ev.target.value);
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
				              value={selectedModel.USERNAME_READ||""}
				              onChange = { ev => {
				                this.setState({
				                  USERNAME_READ: ev.target.value
				                });
				                _this.updateGraph('USERNAME_READ', ev.target.value);
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
				              value={selectedModel.PASSWORD_READ||""}
				              onChange = { ev => {
				                this.setState({
				                  PASSWORD_READ: ev.target.value
				                });
				                _this.updateGraph('PASSWORD_READ', ev.target.value);
				              }}
				            />
				          </Col>
				        </Row>
				        <Row style={{marginTop:10}}>
				          <Col span={24}>
				            <span className="detail-pannel-span">PATH：</span>
				            <Input
				              size="small"
				              className="input name-input"
				              value={selectedModel.PATH_READ||""}
				              onChange = { ev => {
				                this.setState({
				                  PATH_READ: ev.target.value
				                });
				                _this.updateGraph('PATH_READ', ev.target.value);
				              }}
				            />
				          </Col>
				        </Row>
				        <Row style={{marginTop:10}}>
				          <Col span={24}>
				            <span className="detail-pannel-span">COLUMN：</span>
				            <Input
				              size="small"
				              className="input name-input"
				              value={selectedModel.COLUMN_READ||""}
				              onChange = { ev => {
				                this.setState({
				                  COLUMN_READ: ev.target.value
				                });
				                _this.updateGraph('COLUMN_READ', ev.target.value);
				              }}
				            />
				          </Col>
				        </Row>
				        <Row style={{marginTop:10}}>
				          <Col span={24}>
				            <span className="detail-pannel-span">文件编码：</span>
				            <RadioGroup
				            	  value={selectedModel.FILECODE_READ||""}
					              onChange = { ev => {
					                this.setState({
					                  FILECODE_READ: ev.target.value
					                });
					                _this.updateGraph('FILECODE_READ', ev.target.value);
					              }}
				            >
								<Radio value="UTF-8">UTF-8</Radio>
								<Radio value="GBK">GBK</Radio>
							</RadioGroup>
				          </Col>
				        </Row>
				        <Row style={{marginTop:10}}>
				          <Col span={24}>
				            <span className="detail-pannel-span">分隔符：</span>
				            <Input
				              size="small"
				              className="input name-input"
				              value={selectedModel.SEPARATOR_READ||""}
				              onChange = { ev => {
				                this.setState({
				                  SEPARATOR_READ: ev.target.value
				                });
				                _this.updateGraph('SEPARATOR_READ', ev.target.value);
				              }}
				            />
				          </Col>
				        </Row>
				    </TabPane>
				    <TabPane tab="写入" key="2">
				    	<Row style={{marginTop:10}}>
				          <Col span={24}>
				            <span className="detail-pannel-span">数据类型：</span>
				            <Select
				              className="input name-input"
				              size="small"
				              value={selectedModel.DATATYPE_WRITE||""}
				              onChange = { value => {
				                this.setState({
				                  DATATYPE_WRITE: value
				                });
				                _this.updateGraph('DATATYPE_WRITE', value);
				              }}
				            >
				              <Option value="FTP">FTP</Option>
				              <Option value="MYSQL">MYSQL</Option>
				              <Option value="GP">GP</Option>
				            </Select>
				          </Col>
				        </Row>
				    	<Row style={{marginTop:10}}>
				          <Col span={24}>
				            <span className="detail-pannel-span">FTP类型：</span>
				            <RadioGroup
							  value={selectedModel.FTPTYPE_WRITE||""}
				              onChange = { ev => {
				                this.setState({
				                  FTPTYPE_WRITE: ev.target.value
				                });
				                _this.updateGraph('FTPTYPE_WRITE', ev.target.value);
				              }}
				            >
								<Radio value={1}>FTP</Radio>
								<Radio value={2}>SFTP</Radio>
							</RadioGroup>
				          </Col>
				        </Row>
				        <Row style={{marginTop:10}}>
				          <Col span={24}>
				            <span className="detail-pannel-span">HOST：</span>
				            <Input
				              size="small"
				              className="input name-input"
				              value={selectedModel.HOST_WRITE||""}
				              onChange = { value => {
				                this.setState({
				                  HOST_WRITE: value
				                });
				                _this.updateGraph('HOST_WRITE', value);
				              }}
				            />
				          </Col>
				        </Row>
				        <Row style={{marginTop:10}}>
				          <Col span={24}>
				            <span className="detail-pannel-span">PORT：</span>
				            <Input
				              size="small"
				              className="input name-input"
				              value={selectedModel.PORT_WRITE||""}
				              onChange = { value => {
				                this.setState({
				                  PORT_WRITE: value
				                });
				                _this.updateGraph('PORT_WRITE', value);
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
				              value={selectedModel.USERNAME_WRITE||""}
				              onChange = { value => {
				                this.setState({
				                  USERNAME_WRITE: value
				                });
				                _this.updateGraph('USERNAME_WRITE', value);
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
				              value={selectedModel.PASSWORD_WRITE||""}
				              onChange = { value => {
				                this.setState({
				                  PASSWORD_WRITE: value
				                });
				                _this.updateGraph('PASSWORD_WRITE', value);
				              }}
				            />
				          </Col>
				        </Row>
				        <Row style={{marginTop:10}}>
				          <Col span={24}>
				            <span className="detail-pannel-span">PATH：</span>
				            <Input
				              size="small"
				              className="input name-input"
				              value={selectedModel.PATH_WRITE||""}
				              onChange = { value => {
				                this.setState({
				                  PATH_WRITE: value
				                });
				                _this.updateGraph('PATH_WRITE', value);
				              }}
				            />
				          </Col>
				        </Row>
				        <Row style={{marginTop:10}}>
				          <Col span={24}>
				            <span className="detail-pannel-span">COLUMN：</span>
				            <Input
				              size="small"
				              className="input name-input"
				              value={selectedModel.COLUMN_WRITE||""}
				              onChange = { value => {
				                this.setState({
				                  COLUMN_WRITE: value
				                });
				                _this.updateGraph('COLUMN_WRITE', value);
				              }}
				            />
				          </Col>
				        </Row>
				        <Row style={{marginTop:10}}>
				          <Col span={24}>
				            <span className="detail-pannel-span">文件编码：</span>
				            <RadioGroup
				              value={selectedModel.FILECODE_WRITE||""}
				              onChange = { ev => {
				                this.setState({
				                  FILECODE_WRITE: ev.target.value
				                });
				                _this.updateGraph('FILECODE_WRITE', ev.target.value);
				              }}
				            >
								<Radio value="UTF-8">UTF-8</Radio>
								<Radio value="GBK">GBK</Radio>
							</RadioGroup>
				          </Col>
				        </Row>
				        <Row style={{marginTop:10}}>
				          <Col span={24}>
				            <span className="detail-pannel-span">分隔符：</span>
				            <Input
				              size="small"
				              className="input name-input"
				              value={selectedModel.SEPARATOR_WRITE||""}
				              onChange = { value => {
				                this.setState({
				                  SEPARATOR_WRITE: value
				                });
				                _this.updateGraph('SEPARATOR_WRITE', value);
				              }}
				            />
				          </Col>
				        </Row>
				    </TabPane>
				</Tabs>
		        
		    </div>
		</Fragment>
	}
}