msg = 'i am learning python'
msg1="today"
print(msg1 + ' ' + msg)

# You can also assign values to multiple variables in a single statement by separating the variable names and values with commas.
color1, color2, color3 = "red", "green", "blue"
print(color1)
print(color2)
print(color3)


# You can assign the same value to multiple variables by chaining multiple assignment operations within a single statement.
color1 = color2 = color3 = 'red'
print(color2,color3)


# Reassigning variables
color3 = 'magenta'
print(color3)

#While reassigning a variable, you can also use the variable's previous value to compute the new value.
counter = 10
counter = counter - 60 #Could be written as counter += 10
print(counter)