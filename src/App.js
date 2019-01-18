import React, { Component } from 'react';
import G6 from '@antv/g6';

class App extends Component {
  graphRefresh = ()=>{
    //console.log('graphRefresh')

    console.log(this.graph)
    //this.graph.autoZoom() //使绘图填充画布
    //this.graph.destroy()
    //console.log()
    this.graph.add('node', {
      id:'node4',
      x: 20,
      y: 20,
      shape: 'rect',
      size: [40, 40]
    });
    this.graph.add('edge', {
      id:'edge3',
      target: 'node4',
      source: 'node1',
      shape: 'line',         // 所用图形
      index: 1               // 渲染层级
    });
    const item = this.graph.find('node1');
    this.graph.update(item,{
      x:140,
      y:140
    })
  }
  componentDidMount(){
    const data = {
      nodes: [{
        id: 'node1',
        x: 100,
        y: 100,
        color:'#333',
        size:100,
        style:{
          fill:'red',
          stroke:'blue'
        },
        label:{
          text:'刘浩',
          fill:'white'
        }
      },{
        id: 'node2',
        x: 300,
        y: 200
      },{
        id: 'node3',
        x: 400,
        y: 400
      }],
      edges: [{
        id:'edge1',
        target: 'node2',
        source: 'node1',
        shape: 'line',         // 所用图形
        index: 1               // 渲染层级
      },{
        id:'edge2',
        target: 'node3',
        source: 'node2',
        shape: 'line',         // 所用图形
        index: 1               // 渲染层级
      }],
      //groups:['node1','node2']
    };

    this.graph = new G6.Graph({
      container: 'container',
      width: 500,
      height: 500,
    });
    //console.log(this.graph)
    this.graph.read(data);
  }

  render() {
    return (
      <div className="App">
        <input type="button" value="刷新" onClick={this.graphRefresh} />
        <div className="container" id="container"></div>
      </div>
    );
  }
}

export default App;
