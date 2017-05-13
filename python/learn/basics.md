
# Operators

| Relational
|---
| `is`, `==`, `!=`
| `<`, `>`, `<=`, `>=`

| Assignment
|---
| `=`


# If

```py
if x > 0:
  print('big')
elif x < 0: # else if
  print(x)
else:
  print("must be zero...")
```

# Loops
### For
visit each item in a sequence

`for ITEM in SEQUENCE`

### While
```py
c = 5
while c != 0:
    print(c)
    c -= 1
```

`break` to exit out of While loop


# Functions
`def square(x)`


# Python CLI
After we input in the CLI, python will: (REPL)

1. Read
2. Evaluate
3. Print
4. Loop (back to 1)

Exit REPL on Unix with `CTRL+D` or `CTRL+Z` on Windows.

Accept value from user with `input()`


```py
>>> for i in range(5):
...     x = i * 10
...     print(x)
...                   # run with blank line
0
10
20
30
40
>>>
```

`>>> import math` to import modules on the CLI

`help(math)` or `help(math.factorial)` to request specific help on a module or function

# Import

```py
from math import factorial as fac
```

# Expressions
```py
/ # will use floating point numbers
// # rounded to nearest integer

```

# Whitespace Rules
1. Prefer four spaces
2. Never mix spaces and tabs
3. Be consistent on consecutive lines
4. Only deviate to improve readability

White space to establish code blocks! Make code readable, without clutter, concise code

# Python Zen
```py
>>> import this
The Zen of Python, by Tim Peters

Beautiful is better than ugly.
Explicit is better than implicit.
Simple is better than complex.
Complex is better than complicated.
Flat is better than nested.
Sparse is better than dense.
Readability counts.
Special cases aren't special enough to break the rules.
Although practicality beats purity.
Errors should never pass silently.
Unless explicitly silenced.
In the face of ambiguity, refuse the temptation to guess.
There should be one-- and preferably only one --obvious way to do it.
Although that way may not be obvious at first unless you're Dutch.
Now is better than never.
Although never is often better than *right* now.
If the implementation is hard to explain, it's a bad idea.
If the implementation is easy to explain, it may be a good idea.
Namespaces are one honking great idea -- let's do more of those!
```
