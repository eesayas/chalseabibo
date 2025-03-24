# Deploy instructions

## Copy to server
```
scp -r build server.js package.json google.json .env <user>@<ip>:apps/chalseabibo.com/
```

## Run in server

```
sudo pm2 start server.js --name chalseabibo
sudo pm2 restart chalseabibo
```
