// 初始化元素大小配置
var winW = window.innerWidth,
    winH = window.innerHeight,

  EleSizeRule = {
    defaultImgPath: 'img/top_banner.png',
    bgColor: '#fff',
    topBannerH: winH*0.4,
    txBox: {
      w: winW*0.3,
      h: winW*0.3,
      radius: 6,
      dy: 40
    },
    name: {
      top: 0.1*winH,
      fontSize: 30,
      color: 'rgb(6, 13, 41)'
    },
    job: {
      top: 0.1*winH,
      fontSize: 24,
      color: 'rgb(6, 13, 41)'
    },
    cp: {
      top: 0.16*winH,
      fontSize: 16,
      color: '#ccc'
    },
    // 图片质量
    quality: 1
  }

  // 封装绘制圆角矩形函数 -- 裁切
function roundedRect(obj){
  var opt = {
    ctx: obj.ctx,
    x: obj.x,
    y: obj.y,
    w: obj.w,
    h: obj.h,
    r: obj.r,
    type: obj.type,
    fill: obj.fill
  },
  ctx = opt.ctx;
  ctx.save();

  ctx.fillStyle = opt.fill || '#000';
  ctx.shadowOffsetX = 0;
  ctx.shadowOffsetY = 2;
  ctx.shadowBlur = 4;
  ctx.shadowColor = "rgba(0, 0, 0, 0.2)";

  ctx.beginPath();
  ctx.moveTo(opt.x,opt.y+opt.r);
  ctx.lineTo(opt.x,opt.y+opt.h-opt.r);
  ctx.quadraticCurveTo(opt.x,opt.y+opt.h,opt.x+opt.r,opt.y+opt.h);
  ctx.lineTo(opt.x+opt.w-opt.r,opt.y+opt.h);
  ctx.quadraticCurveTo(opt.x+opt.w,opt.y+opt.h,opt.x+opt.w,opt.y+opt.h-opt.r);
  ctx.lineTo(opt.x+opt.w,opt.y+opt.r);
  ctx.quadraticCurveTo(opt.x+opt.w,opt.y,opt.x+opt.w-opt.r,opt.y);
  ctx.lineTo(opt.x+opt.r,opt.y);
  ctx.quadraticCurveTo(opt.x,opt.y,opt.x,opt.y+opt.r);
  ctx.closePath();

  // 判断是绘制路径,形状,还是裁切
  switch(opt.type){
    case 'path':
      ctx.stroke();
      ctx.restore();
      break;
    case 'shape':
      ctx.fill();
      ctx.restore();
      break;
    case 'clip':
      ctx.clip();
      break;
    default:
      return
  }
}

function $(id) {
  return document.getElementById(id)
}
