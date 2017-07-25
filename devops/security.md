# General Security Guides
- [Security for SaaS Startups](https://github.com/forter/security-101-for-saas-startups)

# Code

### NodeJS

[Security tips](https://hackernoon.com/node-security-authentication-javascript-tutorial-example-session-brute-force-rainbow-table-crack-hijack-3b6c56ee938c)

Some notes on the article above:
- Requiring overly strong passwords can encourage user laziness. 2FA is more preferable.
- Secret questions just lead to social engineering weaknesses
- NEVER allow password recovery. Instead, allow passwords to be reset.
- Keep track of the metadata of login failures, such as IP addresses
- Don't leak the fact that user does or doesn't exist
- Validate useragent information and track changes midsession


# Network
Use a VPN on public or insecure networks. PrivateInternetAccess [has been "tested" by the FBI before](https://torrentfreak.com/vpn-providers-no-logging-claims-tested-in-fbi-case-160312/), so it could be a good option. Use [ipleak.net](https://ipleak.net/) to confirm that it's working.

Also consider testing your own wireless security by attempting to [crack your WiFi](https://github.com/brannondorsey/wifi-cracking).

Use uBlock Origin, an ad blocker that also blocks some trackers (uBlock Origin is distinct from uBlock).
