import React, { Component,Fragment } from 'react';
import G6Editor from '@antv/g6-editor';

class GGEditorTest extends Component {
  componentDidMount(){
    const editor = new G6Editor();
    const minimap = new G6Editor.Minimap({
      container: 'minimap',
    });
    const toolbar = new G6Editor.Toolbar({
      container: 'toolbar',
    });
    const contextmenu = new G6Editor.Contextmenu({
      container: 'contextmenu',
    });
    const itempannel = new G6Editor.Itempannel({
      container: 'itempannel',
      model:{
        id: "aaa",
        shape: "commonShape",
        label: "原型"
      }
    });
    const detailpannel = new G6Editor.Detailpannel({
      container: 'detailpannel',
    });
    const page = new G6Editor.Flow({
      graph: {
        container: 'page',
      },
    });
    editor.add(minimap);
    editor.add(toolbar);
    editor.add(contextmenu);
    editor.add(itempannel);
    editor.add(detailpannel);
    editor.add(page);
    console.log(editor.getCurrentPage())
  }

  render() {
    return (
      <Fragment>
        <div id="minimap"></div>       
        <div id="toolbar">
          <button>复制</button>
          <button>粘贴</button>
          <button>自定义命令</button>
        </div>       
        <div id="itempannel">
          <div className="getItem" data-type="node" data-shape="commonShape">圆形</div>
          <div className="getItem" data-type="node" data-shape="commonShape">自定义节点</div>
        </div>    
        <div id="detailpannel"></div>  
        <div id="contextmenu"></div>   
        <div id="page"></div>          
      </Fragment>
    );
  }
}

export default GGEditorTest;