numbers = [1, 23, 45, 56, 67, 3, 4]
print(numbers[1])
print(numbers[2])
print(numbers[:])  # copies the original
print(numbers)

# lists are mutable while strings are immutable

numbers.append(233)
numbers.append(5**5)
print(numbers)

# Nested list
a = [1, 2, 3, 4, 5]
b = ["c", "e", "y"]
d = [a, b]
print(d)
