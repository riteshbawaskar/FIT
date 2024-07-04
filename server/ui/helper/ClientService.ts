const http = require('http');

class ClientService {

    postExecutionRequest(link, body) {

        const url = new URL(link);
        const options = {
            hostname: url.hostname,
            port: url.port,
            path: '/api/agent',
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Content-Length': Buffer.byteLength(body)
            }
        };

        http.request(options, res => {
            let data = ''
            res.on('data', d => {
                data += d
            });
            res.on('end', () => {
                console.log(data);
            });
        })
            .on('error', console.error)
            .end(body);


    }
}

export default ClientService;
