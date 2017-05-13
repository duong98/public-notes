# Modularity

##### Import modules
```py
import sys as command
port = command.argv[1]

# OR

from sys import argv

# OR

from file_module import (This, That, What, Ever)
from other_file import This, Whatever, Okay, \
    Ok, Cool, Some_More, Modules
```

## Modules, scripts, programs

| Attribute | Pros
|---|---
| Modules | convenient import with API
| Script | convenient execution from commandline
| Program | typically composed of many modules

### Make scripts importable as modules

##### Main idiom to run python file as script

`action.py`

```py
def do_action:
  print('python is awesome') # put script actions into a function (for modules)

if __name__ == '__main__':
    do_action()
```

Now you can run the function store inside the script from the CLI.

```sh
> python3 action.py
```

Since a script run in the CLI is the main module, then `if` statement evaluates true and the function is called.
