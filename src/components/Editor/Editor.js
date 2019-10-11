import React from 'react';
import G6Editor from '@antv/g6-editor';
import 'antd/dist/antd.css';
import './editor.css';

export default class Editor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedModel: {}, // 当前选中项数据模型
      curZoom: 1, // 当前缩放比率
      minZoom: 0.5, // 最小缩放比率
      maxZoom: 2 // 最大缩放比率
    };
  }
  changeZoom(zoom) {
    const editor = this.editor;
    const page = editor.getCurrentPage();
    page.zoom(zoom);
  }
  toggleGrid(ev) {
    const editor = this.editor;
    const page = editor.getCurrentPage();
    console.log(editor)
    console.log(page)
    console.log(page.save())

    // console.log(page.isPage)
    // console.log(ev)
    if (ev.target.checked) {
      page.showGrid();
    } else {
      page.hideGrid();
    }
  }
  updateGraph(key, value) {
    //console.log(key,value)
    const editor = this.editor;
    editor.executeCommand(() => {
      const page = editor.getCurrentPage();
      const selectedItems = page.getSelected();
      selectedItems.forEach(item => {
        //console.log(item)
        const updateModel = {};
        updateModel[key] = value;
        page.update(item, updateModel);
      });
    });
  }
  componentWillMount() {
    this.editor = new G6Editor();
  }
  componentDidMount() {
    const editor = this.editor;
    const pages = editor.getComponentsByType('page');
    pages.forEach(page => {
      console.log(page)
      page.read({
        nodes:[{
          shape: "START",
          size: "170*34",
          type: "node",
          x: 301,
          y: 109
        },{
          shape: "END",
          size: "170*34",
          type: "node",
          x: 301,
          y: 509
        }]
      })
      page.on('afteritemselected', ev => {
        //console.log(ev.item.getModel());
        this.setState({
          selectedModel: ev.item.getModel()
        });
      });
      page.on('afterzoom', ev => {
        this.setState({
          curZoom: ev.updateMatrix[0]
        });
      });
    });
  }
}
