const fs = require('fs')

// fs.readFile('./blog1.txt', (err, data) => {
//     if (err) {
//         console.log(err)
//     }
//     console.log(data.toString())
// })

// fs.writeFileSync('./blog2.txt', 'Hello, world!', () => {
//     console.log('file was written')
// })

// if (!fs.existsSync('./assets')) {
//     fs.mkdir('./assets/', (err) => {
//         if (err) {
//             console.log(err)
//         }
//         console.log('folder created')
//     })
// } else {
//     fs.rmdir('./assets', (err) => {
//         if (err) {
//             console.log(err)
//         }
//         console.log('folder deleted')
//     })
// }

// if (fs.existsSync('./blog2.txt')) {
//     fs.unlink('./blog2.txt', (err) => {
//         if (err) {
//             console.log(err)
//         }
//         console.log('file deleted')
//         createFile
//     })
// } 


const readStream = fs.createReadStream('blog3.txt', { encoding: 'utf8' })
const writeStream = fs.createWriteStream('blog4.txt')

// readStream.on('data', (chunk) => {
//     console.log('------------------new chunk-------------------------')
//     console.log(chunk)
//     writeStream.write('\nNEW CHUNK\n')
//     writeStream.write(chunk)
// })

// Piping
readStream.pipe(writeStream)