my_name = 'james'
print(len(my_name))


#uppercase, lowercase and title
uppercase = my_name.upper()
lowercase = my_name.lower()
lowercase = my_name.title()
print(uppercase,lowercase)

# Replace method
name = 'jude'
print(name.replace('jude', 'tye'))

## The .replace method replaces a part of the string with another string. It takes the portion to be replaced and the replacement text as inputs or arguments.
another_name = name.replace('ju', 'lu')
print(another_name)

#The .split method splits a string into a list of strings at every occurrence of provided character(s).
split_this="Sun, MOn, Tues, Wed"
print_result= split_this.split(',')
print(print_result)

# Remove white spaces in string
remove_space="      Ogunnusi Abayomi"
stripped = remove_space.strip()
print(stripped)