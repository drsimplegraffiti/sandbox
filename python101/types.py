# name = input('what is your name?')
# print(name)


# Data Types
int()
float()
bool()

birth_year = 'John'
print(type('birth_year'))

weight = input('what is your weight?')
convert=int(weight) * 0.06
print(convert)


"""
Python has several built-in data types for storing different kinds of information in variables. Following are some commonly used data types:

    Integer  ====> primitive
    Float  ====> primitive
    Boolean  ====> primitive
    None  ====> primitive
    String  ====> primitive 
    List  ====> Data structure or containers
    Tuple ====> Data structure
    Dictionary ====> Data structure

"""
float1= 3.0 #this is treated as a float
float2 = 4. #this is treated as a float
print(float2) 



# Floating point numbers can also be written using the scientific notation with an "e" to indicate the power of 10.
one_hundredth = 1e-3
print(one_hundredth)

avogadro_number = 6.02214076e23
print(avogadro_number)


############
# Converting to  floats
large_number = -2323233236362736273627
conversion = float(large_number)
print(conversion)


# Convert pi to integer
pi = 3.14
convert_integer = int(pi)
print(convert_integer)

# Multi line strings
poem = """
hello 
this is a multi line string
"""

print(poem)