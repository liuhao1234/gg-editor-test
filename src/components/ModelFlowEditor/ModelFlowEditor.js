/**
 * @fileOverview
 * @author huangtonger@aliyun.com
 */

import React from 'react';
import G6Editor from '../Nodes';
//import Navigator from '../Navigator/Navigator.js';
import ToolBar from '../Toolbar/Toolbar.js';
import Contextmenu from '../Contextmenu/Contextmenu.js';
import Itempannel from '../Itempannel/Itempannel.js';
import Detailpannel from '../Detailpannel/Detailpannel.js';
import Editor from '../Editor/Editor.js';
import Page from '../Page/Page.js';
import Detailform from '../Detailpannel/Detailform';//表单组件
import Items from '../Itempannel/Items';//元素组件
import { Checkbox } from 'antd';
import './modelFlowEditor.css';
export default class BaseFlowEditor extends Editor {
  componentDidMount() {
    super.componentDidMount();
    //console.log(this);
    const editor = this.editor;
    const page = editor.getCurrentPage();
    // 输入锚点不可以连出边
    page.on('hoveranchor:beforeaddedge', ev => {
      if (ev.anchor.type === 'input') {
        ev.cancel = true;
      }
    });
    page.on('dragedge:beforeshowanchor', ev => {
      // 只允许目标锚点是输入，源锚点是输出，才能连接
      if (!(ev.targetAnchor.type === 'input' && ev.sourceAnchor.type === 'output')) {
        ev.cancel = true;
      }
      // 如果拖动的是目标方向，则取消显示目标节点中已被连过的锚点
      if (ev.dragEndPointType === 'target' && page.anchorHasBeenLinked(ev.target, ev.targetAnchor)) {
        ev.cancel = true;
      }
      // 如果拖动的是源方向，则取消显示源节点中已被连过的锚点
      if (ev.dragEndPointType === 'source' && page.anchorHasBeenLinked(ev.source, ev.sourceAnchor)) {
        ev.cancel = true;
      }
    });
  }
  render() {
    const { selectedModel, inputingLabel } = this.state;
    
    return <div className="editor">
      <ToolBar editor={this.editor} />
      <div style={{ height: '42px' }}></div>
      <div className="bottom-container">
        <Contextmenu editor={this.editor} />
        <Itempannel editor={this.editor} content={
          <ul>
            <li className="getItem" data-shape="SQL-LOAD" data-type="node" data-size="170*34">
              <span className="pannel-type-icon sql-load"></span>执行SQL
            </li>
            <li className="getItem" data-shape="SAVE-PROCESS-LOAD" data-type="node" data-size="170*34">
              <span className="pannel-type-icon save-process-load"></span>执行存储过程
            </li>
            <li className="getItem" data-shape="SHELL-LOAD" data-type="node" data-size="170*34">
              <span className="pannel-type-icon shell-load"></span>执行SHELL
            </li>
            <li className="getItem" data-shape="DATA-TRANSFORM" data-type="node" data-size="170*34">
              <span className="pannel-type-icon data-tansform"></span>数据转换
            </li>
          </ul>
        }/>
        <Detailpannel editor={this.editor} content={
          <div>
            <div data-status="node-selected" className="pannel" id="node_detailpannel">
              <div className="pannel-title">模型详情</div>
              <div className="block-container">
                <Detailform 
                  _this = {this}
                  inputingLabel={inputingLabel} 
                  selectedModel={selectedModel}
                />
              </div>
            </div>
            <div data-status="canvas-selected" className="pannel" id="canvas_detailpannel">
              <div className="pannel-title">画布</div>
              <div className="block-container">
                <Checkbox onChange={ this.toggleGrid.bind(this) } >网格对齐</Checkbox>
              </div>
            </div>
          </div>
        }/>
        <Page editor={this.editor} />
      </div>
    </div>;
  }
}
