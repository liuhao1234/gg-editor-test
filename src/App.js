import React, { Component } from 'react';
import G6 from '@antv/g6';

class App extends Component {
  constructor(props){
    super(props)
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
    const graph = new G6.Graph({
      container: 'container',
      width: 600,
      height: 600
    });

    graph.read(data);
  }

  render() {
    return (
      <div className="App">
        <div className="container" id="container"></div>
      </div>
    );
  }
}

export default App;
