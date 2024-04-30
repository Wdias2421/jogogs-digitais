const mario = document . queerySelector('.mario');
const pipe = document . querySelector('.pipe');

const jump = () => {
    mario.classlist.add('jump');

    setTimeout(()=> {
        mario.classlist.remove('jump');
    }, 500);
}

const loop = setInterval( () => {

    const pipePosition = pipe 
})
