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
  }

  render() {
    return (
      <Fragment>
        <div id="minimap" style={{height:200}}></div>       
        <div id="toolbar" style={{height:200}}></div>       
        <div id="itempannel" style={{height:200}}></div>    
        <div id="detailpannel" style={{height:200}}></div>  
        <div id="contextmenu" style={{height:200}}></div>   
        <div id="page" style={{height:200}}></div>          
      </Fragment>
    );
  }
}

export default GGEditorTest;