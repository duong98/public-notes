# NodeJS

[Security tips](https://hackernoon.com/node-security-authentication-javascript-tutorial-example-session-brute-force-rainbow-table-crack-hijack-3b6c56ee938c)

Some notes on the article above:
- Requiring overly strong passwords can encourage user laziness. 2FA is more preferable.
- Secret questions just lead to social engineering weaknesses
- NEVER allow password recovery. Instead, allow passwords to be reset.
- Keep track of the metadata of login failures, such as IP addresses
- Don't leak the fact that user does or doesn't exist
- Validate useragent information and track changes midsession
