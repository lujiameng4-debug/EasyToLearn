#!/bin/bash
while true
do
    echo "Starting Pinggy tunnel for EasyToLearn on port 3000..."
    ssh -p 443 -R0:localhost:3000 a.pinggy.io
    echo "Tunnel disconnected. Reconnecting in 5 seconds..."
    sleep 5
done
