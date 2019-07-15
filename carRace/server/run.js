const WebSocket = require('ws');

const ws = new WebSocket('ws://localhost:9090');

ws.on('open', function open() {
    ws.send(
        JSON.stringify({
            'type': 'hello'
        })
    );
});

function randomObj() {
    let floor = Math.floor(Math.random() * 3);
    if (Math.floor(Math.random() * 10) > 5) {
        ws.send(
            JSON.stringify({
                'type': 'cone',
                'floor': floor
            })
        );
    } else {
        ws.send(
            JSON.stringify({
                'type': 'money',
                'floor':floor
            })
        );
    }
}

setInterval(function () {
    randomObj();
}, 1000);