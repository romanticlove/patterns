const adapter = require('./messages-module');
adapter.sendMessage('telegram', 10, 'Hello World', {xid:'-'}).then(console.log).catch(console.log); // {some:'data'}
adapter.sendMessage('whatsapp', 10, 'Hello World', {xid:'-'}).then(console.log).catch(console.log); // {some:'data'}