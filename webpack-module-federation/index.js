const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);

app.use('/assets', express.static(__dirname + '/assets'));
app.use('/node_modules', express.static(__dirname + '/node_modules'));


app.get('/presentation', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/buttons.html');
});

const stats = {};

function computeStats(stats) {
    if (!stats) {
        return {
            good: 50,
            bad: 50,
        }
    }

    const values = [...Object.values(stats)];

    let countGood = values.filter((item) => item == 'good').length;
    let countBad = values.filter((item) => item == 'bad').length;

    const summ = countGood + countBad;
    console.log('summ:', summ);

    if (summ == 0) {
        return {
            good: 50,
            bad: 50,
        }
    }

    const pie =  (100 / summ) // Math.round(summ / 100);
    console.log('pie:', pie);

    return {
        good: Math.round(pie * countGood),
        bad: Math.round(pie * countBad),
    }
}

io.on('connection', (socket) => {
    console.log('a user connected. User ID is ', socket.id);
    stats[socket.id] = 'neutral';
    socket.on('disconnect', () => {
        console.log('user disconnected');
        delete stats[socket.id];
        const computedStats = computeStats(stats);
        io.emit('stats', JSON.stringify(computedStats));
    });

    const computedStats = computeStats(stats);
    io.emit('stats', JSON.stringify(computedStats));

    socket.on('for', (type) => {
        console.log('type: ' + type);

        if (type === 'good') {
            stats[socket.id] = 'good';
            io.emit('forBack', type);
        } else if (type === 'bad') {
            stats[socket.id] = 'bad';
            io.emit('forBack', type);
        }

        const computedStats = computeStats(stats);
        io.emit('stats', JSON.stringify(computedStats));
    });
});

server.listen(3000, () => {
    console.log('listening on *:3000');
});
