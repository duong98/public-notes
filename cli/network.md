### WAN
`curl http://icanhazip.com` OR `curl ipinfo.io/ip` public ip

also `dig +short myip.opendns.com @resolver1.opendns.com`

### LAN
`ifconfig -a | perl -nle'/(\d+\.\d+\.\d+\.\d+)/ && print $1'` local ip

`wget -O /dev/null http://speedtest.wdc01.softlayer.com/downloads/test10.zip` speedtest or use speedtest_cli (macOS) or speedtest-cli (linux)


# Sockets
`Long-pulling`: request, server doesn't resolve until change elicits response.
Server initiates connection with client through open connection
