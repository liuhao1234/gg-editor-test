import G6Editor from '@antv/g6-editor';
import IMG_DBGET from '../../assets/images/item-icon-getdb.png';
import IMG_SQL_EXPORT from '../../assets/images/item-icon-sqlexport.png';
import IMG_FTP_DOWN from '../../assets/images/item-icon-ftpdown.png';
import IMG_FILE_IN from '../../assets/images/item-icon-filein.png';
import IMG_SQL_LOAD from '../../assets/images/item-icon-sqlload.png';
import IMG_SAVE_PROCESS_LOAD from '../../assets/images/item-icon-saveprocessload.png';
import IMG_SHELL_LOAD from '../../assets/images/item-icon-shellload.png';
import IMG_DATA_TRANSFORM from '../../assets/images/item-icon-datatransform.png';

const { Flow } = G6Editor;

// 注册模型卡片基类
Flow.registerNode('model-card', {
  draw(item) {
    const group = item.getGraphicGroup();
    const model = item.getModel();
    const width = 184;
    const height = 40;
    const x = -width / 2;
    const y = -height / 2;
    const borderRadius = 4;
    const keyShape = group.addShape('rect', {
      attrs: {
        x,
        y,
        width,
        height,
        radius: borderRadius,
        fill: 'white',
        stroke: '#CED4D9'
      }
    });
    // 左侧色条
    group.addShape('path', {
      attrs: {
        path: [
          [ 'M', x, y + borderRadius ],
          [ 'L', x, y + height - borderRadius ],
          [ 'A', borderRadius, borderRadius, 0, 0, 0, x + borderRadius, y + height ],
          [ 'L', x + borderRadius, y ],
          [ 'A', borderRadius, borderRadius, 0, 0, 0, x, y + borderRadius ]
        ],
        fill: this.color_type
      }
    });
    // 类型 logo
    group.addShape('image', {
      attrs: {
        img: this.type_icon_url,
        x: x + 16,
        y: y + 12,
        width: 20,
        height: 20
      }
    });
    // 名称文本
    const label = model.label ? model.label : this.label;
    group.addShape('text', {
      attrs: {
        text: label,
        x: x + 52,
        y: y + 13,
        textAlign: 'start',
        textBaseline: 'top',
        fill: 'rgba(0,0,0,0.65)'
      }
    });
    // 状态 logo
    // group.addShape('image', {
    //   attrs: {
    //     img: this.state_icon_url,
    //     x: x + 158,
    //     y: y + 12,
    //     width: 16,
    //     height: 16
    //   }
    // });
    return keyShape;
  },
  // 设置锚点
  anchor: [
    [ 0.5, 0 ], // 上面边的中点
    [ 0.5, 1 ] // 下边边的中点
  ]
});

// 注册开始结束基类
Flow.registerNode('model-node', {
  draw(item) {
    const group = item.getGraphicGroup();
    const model = item.getModel();
    const width = 60;
    const height = 60;
    const x = -width / 2;
    const y = -height / 2;
    const borderRadius = 30;
    const keyShape = group.addShape('rect', {
      attrs: {
        x,
        y,
        width,
        height,
        radius: borderRadius,
        fill: 'rgba(255,0,0,0.65)',
        stroke: 'rgba(255,0,0,1)'
      }
    });
    
    // 名称文本
    const label = model.label ? model.label : this.label;
    group.addShape('text', {
      attrs: {
        text: label,
        x: x+30,
        y: y+30,
        fontSize:16,
        textAlign: 'center',
        textBaseline: 'middle',
        fill: 'rgba(255,255,255,1)'
      }
    });
    // 状态 logo
    // group.addShape('image', {
    //   attrs: {
    //     img: this.state_icon_url,
    //     x: x + 158,
    //     y: y + 12,
    //     width: 16,
    //     height: 16
    //   }
    // });
    return keyShape;
  },
  // 设置锚点
  anchor: [
    [ 0.5, 0 ], // 上面边的中点
    [ 0.5, 1 ] // 下边边的中点
  ]
});

// DB采集
Flow.registerNode('DB-GET', {
  label: 'DB采集',
  color_type: '#1890FF',
  type_icon_url: IMG_DBGET,
  state_icon_url: 'https://gw.alipayobjects.com/zos/rmsportal/MXXetJAxlqrbisIuZxDO.svg',
  // 设置锚点
  anchor: [
    [ 0.5, 0, {
      type: 'input'
    }], // 上面边的中点
    [ 0.5, 1, {
      type: 'output'
    }] // 下边边的中点
  ]
}, 'model-card');

// SQL导出
Flow.registerNode('SQL-EXPORT', {
  label: 'SQL导出',
  color_type: '#9254DE',
  type_icon_url: IMG_SQL_EXPORT,
  state_icon_url: 'https://gw.alipayobjects.com/zos/rmsportal/MXXetJAxlqrbisIuZxDO.svg',
  // 设置锚点
  anchor: [
    [ 0.5, 0, {
      type: 'input'
    }],
    [ 0.5, 1, {
      type: 'output'
    }]
  ]
}, 'model-card');

// FTP下载
Flow.registerNode('FTP-DOWN', {
  label: 'FTP下载',
  color_type: '#1890FF',
  type_icon_url: IMG_FTP_DOWN,
  state_icon_url: 'https://gw.alipayobjects.com/zos/rmsportal/MXXetJAxlqrbisIuZxDO.svg',
  // 设置锚点
  anchor: [
    [ 0.5, 0, {
      type: 'input'
    }],
    [ 0.33, 1, {
      type: 'output'
    }],
    [ 0.66, 1, {
      type: 'output'
    }]
  ]
}, 'model-card');

// 文件入库
Flow.registerNode('FILE-IN', {
  label: '文件入库',
  color_type: '#9254DE',
  type_icon_url: IMG_FILE_IN,
  state_icon_url: 'https://gw.alipayobjects.com/zos/rmsportal/uZVdwjJGqDooqKLKtvGA.svg',
  // 设置锚点
  anchor: [
    [ 0.5, 0, {
      type: 'input'
    }],
    [ 0.5, 1, {
      type: 'output'
    }]
  ]
}, 'model-card');

// 执行SQL
Flow.registerNode('SQL-LOAD', {
  label: '执行SQL',
  color_type: '#1890FF',
  type_icon_url: IMG_SQL_LOAD,
  state_icon_url: 'https://gw.alipayobjects.com/zos/rmsportal/MXXetJAxlqrbisIuZxDO.svg',
  // 设置锚点
  anchor: [
    [ 0.5, 0, {
      type: 'input'
    }],
    [ 0.5, 1, {
      type: 'output'
    }]
  ]
}, 'model-card');

//SAVE-PROCESS-LOAD,执行存储过程
Flow.registerNode('SAVE-PROCESS-LOAD', {
  label: '执行存储过程',
  color_type: '#9254DE',
  type_icon_url: IMG_SAVE_PROCESS_LOAD,
  state_icon_url: 'https://gw.alipayobjects.com/zos/rmsportal/MXXetJAxlqrbisIuZxDO.svg',
  // 设置锚点
  anchor: [
    [ 0.5, 0, {
      type: 'input'
    }],
    [ 0.5, 1, {
      type: 'output'
    }]
  ]
}, 'model-card');

//IMG_SHELL_LOAD,执行shell
Flow.registerNode('SHELL-LOAD', {
  label: '执行SHELL',
  color_type: '#38b889',
  type_icon_url: IMG_SHELL_LOAD,
  state_icon_url: 'https://gw.alipayobjects.com/zos/rmsportal/MXXetJAxlqrbisIuZxDO.svg',
  // 设置锚点
  anchor: [
    [ 0.5, 0, {
      type: 'input'
    }],
    [ 0.5, 1, {
      type: 'output'
    }]
  ]
}, 'model-card');

//DATA-TRANSFORM,数据转换
Flow.registerNode('DATA-TRANSFORM', {
  label: '数据转换',
  color_type: '#FAAD77',
  type_icon_url: IMG_DATA_TRANSFORM,
  state_icon_url: 'https://gw.alipayobjects.com/zos/rmsportal/MXXetJAxlqrbisIuZxDO.svg',
  // 设置锚点
  anchor: [
    [ 0.5, 0, {
      type: 'input'
    }],
    [ 0.5, 1, {
      type: 'output'
    }]
  ]
}, 'model-card');
//开始
Flow.registerNode('START', {
  label: '开始',
  // 设置锚点
  anchor: [
    [ 0.5, 1, {
      type: 'output'
    }]
  ]
}, 'model-node');
//结束
Flow.registerNode('END', {
  label: '结束',
  // 设置锚点
  anchor: [
    [ 0.5, 0, {
      type: 'input'
    }]
  ]
}, 'model-node');

export default G6Editor;