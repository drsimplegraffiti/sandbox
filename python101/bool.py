
#Python is case sensitive

name='my name'
print('my' in name)
print('MY' in name)


# Booleans are automatically converted to ints when used in arithmetic operations. True is converted to 1 and False is converted to 0.
print(5 + False)
print(3 + True)

"""
Any value in Python can be converted to a Boolean using the bool function.

Only the following values evaluate to False (they are often called falsy values):

    The value False itself
    The integer 0
    The float 0.0
    The empty value None
    The empty text ""
    The empty list []
    The empty tuple ()
    The empty dictionary {}
    The empty set set()
    The empty range range(0)

Everything else evaluates to True (a value that evaluates to True is often called a truthy value).
"""


print(bool(False))
print(bool(0))
print(bool(None))

# None

# The None type includes a single value None, used to indicate the absence of a value. None has the type NoneType. It is often used to declare a variable whose value may be assigned later.
nothing = None
print(nothing)
print(type(nothing))