const { exec } = require('child_process')
const path = require('path')
  
const cb = (error, stdout, stderr) => {
  if (error) {
    console.error(`exec error: ${error}`);
    return;
  }
  console.log(`stdout: ${stdout}`);
  console.log(`stderr: ${stderr}`);
}

console.log('请确保 localhost 的 7001 及 8000 端口没有被占用')
console.log('开启后端进程...')
exec(`npm run dev`, { cwd: path.resolve(__dirname, 'dean-backend') }, cb)    
console.log('打开前端开发服务器...')
exec(`npm start`, { cwd: path.resolve(__dirname, 'dean-frontend') }, cb)              
console.log('发送开启命令完毕')
console.log('后端运行在 localhost:7001')  
console.log('前端运行在 localhost:8000')                                      