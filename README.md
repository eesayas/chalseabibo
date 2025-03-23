# Deploy instructions

## Copy to server

```
scp -r build <user>@<ip>:apps/chalseabibo.com/
```

## Run in server

```
sudo pm2 restart chalseabibo
```
