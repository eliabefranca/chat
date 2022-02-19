import WebSocket, { WebSocketServer } from 'ws';

export const wss = new WebSocketServer({
  port: 8080,
});

function handleMessage(event: WebSocket.MessageEvent) {
  const message = JSON.parse(event.data.toString());

  wss.clients.forEach((client) => {
    if (client.readyState === WebSocket.OPEN) {
      client.send(JSON.stringify(message));
    }
  });
}

wss.on('connection', (ws: WebSocket) => {
  ws.onmessage = handleMessage;
});
