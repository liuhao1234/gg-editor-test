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
		const inputingLabel = this.props.inputingLabel;
		const selectedModel = this.props.selectedModel;
		const _this = this.props._this;
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
				              value="FTP"
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
				            <RadioGroup value={1}>
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
				            />
				          </Col>
				        </Row>
				        <Row style={{marginTop:10}}>
				          <Col span={24}>
				            <span className="detail-pannel-span">PORT：</span>
				            <Input
				              size="small"
				              className="input name-input"
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
				            <span className="detail-pannel-span">PATH：</span>
				            <Input
				              size="small"
				              className="input name-input"
				            />
				          </Col>
				        </Row>
				        <Row style={{marginTop:10}}>
				          <Col span={24}>
				            <span className="detail-pannel-span">COLUMN：</span>
				            <Input
				              size="small"
				              className="input name-input"
				            />
				          </Col>
				        </Row>
				        <Row style={{marginTop:10}}>
				          <Col span={24}>
				            <span className="detail-pannel-span">文件编码：</span>
				            <RadioGroup>
								<Radio value={1}>UTF-8</Radio>
								<Radio value={2}>GBK</Radio>
							</RadioGroup>
				          </Col>
				        </Row>
				        <Row style={{marginTop:10}}>
				          <Col span={24}>
				            <span className="detail-pannel-span">分隔符：</span>
				            <Input
				              size="small"
				              className="input name-input"
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
				              value="FTP"
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
				            <RadioGroup>
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
				            />
				          </Col>
				        </Row>
				        <Row style={{marginTop:10}}>
				          <Col span={24}>
				            <span className="detail-pannel-span">PORT：</span>
				            <Input
				              size="small"
				              className="input name-input"
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
				            <span className="detail-pannel-span">PATH：</span>
				            <Input
				              size="small"
				              className="input name-input"
				            />
				          </Col>
				        </Row>
				        <Row style={{marginTop:10}}>
				          <Col span={24}>
				            <span className="detail-pannel-span">COLUMN：</span>
				            <Input
				              size="small"
				              className="input name-input"
				            />
				          </Col>
				        </Row>
				        <Row style={{marginTop:10}}>
				          <Col span={24}>
				            <span className="detail-pannel-span">文件编码：</span>
				            <RadioGroup>
								<Radio value={1}>UTF-8</Radio>
								<Radio value={2}>GBK</Radio>
							</RadioGroup>
				          </Col>
				        </Row>
				        <Row style={{marginTop:10}}>
				          <Col span={24}>
				            <span className="detail-pannel-span">分隔符：</span>
				            <Input
				              size="small"
				              className="input name-input"
				            />
				          </Col>
				        </Row>
				    </TabPane>
				</Tabs>
		        
		    </div>
		</Fragment>
	}
}