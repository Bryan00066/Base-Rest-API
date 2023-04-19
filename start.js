/*
By : Diego Bryan - https://wa.me/5527999307906
*/
const { spawn } = require('child_process')
const path = require('path')

function start() {
let args = [path.join(__dirname, 'index.js'), ...process.argv.slice(2)]
   console.log([process.argv[0], ...args].join('\n'))
   let p = spawn(process.argv[0], args, {
         stdio: ['inherit', 'inherit', 'inherit', 'ipc']
      })
      .on('message', data => {
         if (data == 'reset') {
            console.log('Reiniciando Bot...')
            p.kill()
            start()
            delete p
         }
      })
      .on('exit', code => {
         console.error('Crash com código:', code)
         if (code == null || code == '.' || code == 1) start()
      })
}
start()