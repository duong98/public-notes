# Type assignment

**There are no variables in python, only name references to objects!**

Assignment attaches a name to an object. The garbage collector reclaims unreachable objects.


```py
>>> x = 1000
>>> y = x
>>> id(x) == id(y) # now x and y point to the same value
True
```

`id()` returns a unique identifier for an object

Lists and Dicts are reference types and so you have to create an actual copy

```py
>>> p = [1, 2, 3]
>>> q = [1, 2, 3]
>>> p == q # Value: equivalent 'contents'
True
>>> p is q # Identity: the same object
False
```


### Object reference types
_Everything_ is an object.

`dir()` to introspect an object


### Default function arguments

Must come after arguments with no default

```py
def alert(message, border="-"):
    line = border * len(message)
    print(line)
    print(message)
    print(line)

alert('what')

alert(border=".", message="cool")
```

Warning: the default will be declared once, and can be mutated unless an immutable value is used.
```py
def add_todo(todos=[]):
    todos.append('code')
    return todos

>>> add_todo()
['code']
>>> add_todo()
['code', 'code']
```

Here's a better practice to avoid mutable defaults:

```py
def add_todo(todos=None): # None is immutable
    if todos is None:
        todos = []
    todos.append('code')
    return todos

>>> add_todo()
['code']
>>> add_todo()
['code']
```


# Scopes
LEGB rule with context

| Scope | Definition
|---|---
| Local | Inside the current function
| Enclosing | Any and all enclosing functions
| Global | Top-level of module
| Built-in | Provided by the builtins module

```py
count = 0

def show_count():
    print("count = ", count)

def set_count(c):
    global count # now gives access to modify global variable 'count'
    count = c # instead of merely creating a new local variable with closed scope in function
```
