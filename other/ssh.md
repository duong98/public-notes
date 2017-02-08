## SSH
- Generate an SSH key with `ssh-keygen -t rsa`
  - Create a passphrase when prompted
- View your public key `cat ~/.ssh/id_rsa.pub`

_*NEVER*_ share your `private key` with anyone. Pass out your `public key` like glowsticks at a rave or chlamydia at a public university. [Check out my public SSH key here](https://api.github.com/users/brettinternet/keys).

SSH utilizes public-key encryption. Check out the mac app [GPG Tools](https://gpgtools.org/) which is an implementation of [GnuPG](https://www.gnupg.org/) for this same concept applied to encrypting emails.

# Public-Key Cryptography Explanation

I use [this article](https://medium.com/@vrypan/explaining-public-key-cryptography-to-non-geeks-f0994b3c2d5#.cm62911lz) to offer an explanation below of what public-key crytography is.

Let's use an example of a lock and key to understand this type of asymmetric cryptography. Both your private and public key are like keys to a lock that can _only_ turn one way. In this example, it's as though your public key can only turn clockwise (see image below) in the lock and your private key can only turn counterclockwise. You keep your private key safe, but you hand out your public key like candy!

There are *two* very import use cases for this. If I want to send you a letter, I use your public key and turn the key clockwise to lock the letter. The letter is safe now, since your public key can't unlock it (because the public key can only turn clockwise). Only your private key, which turns counterclockwise, can unlock it.

The second use for public-key encryption is verification. If you want to send me something, and you lock it with your private key. Only your public key can unlock it. So when I get your letter and your public key does indeed unlock your letter, I think, "This can only mean one thing, this is actually from you!"


![Image](https://cdn-images-1.medium.com/max/800/1*JOhK0A7PM3tM0a53Pp3Biw.jpeg)
