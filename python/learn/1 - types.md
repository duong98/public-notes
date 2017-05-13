# Type systems
| | | |
|---|---|---|
| | Static | Dynamic
| Strong | `Haskell` `C++` | `Python` `Ruby`
| Weak |  | `JS` `Perl`

Dynamic: object types are only resolved at runtime
Strong: no implicit type conversion

`type()` to view the type of an object

# Scalar types and values

## int
arbitrary precision integer: `int()` (rounding is towards 0)

## float
64-bit floating point numbers: `float()` from int or str

3e8 = 300000000.0

## None
null object

```py
>>> a = None
>>> a is None
True
```

## bool
boolean logical values: `True` and `False`

Falsey values: `0`, `[]`, `""`,
Truthy values: all other values


## str
immutable sequences of Unicode codepoints - `""` or `''`


```py
>>> "first" "second"
"firstsecond"
```

##### New lines
1. Multiline strings
```
"""
New
line
"""
```
2. Escape sequences - `\n` (universal across all systems)

##### Raw strings
`r` - raw strings which support literal string values

##### Characters

```py
>>> x = 'what'
>>> x[2]
'a'
>>> type(x[2])
<class 'str'>
```

### String methods
`help(str)`

##### Capitalize
```py
>>> c = 'los angeles'
>>> c.capitalize()
'Los angeles' # strings are immutable so it returns a new string
```

## bytes
immutable sequences of bytes

`b"data"`

You must encode/decode to convert between `str` and `bytes` - `encode()` to bytes and `decode('utf-8')` to strings

## list
**mutable** sequences of objects

Literal lists `[a, b, c]`

### List methods

`.append(x)` to push a value to the end of a list

## dict
**mutable** mappings of keys to values

Much like Objects or associative arrays in other languages.

`{'course': 'english', 'grade': 98}`



# Other Values

##### nan
not a number

##### inf
infinity
