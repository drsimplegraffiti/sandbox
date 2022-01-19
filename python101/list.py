

number = [1,2,3,45,34,23]
number.sort()
print(number)


number_2 = [1,2,3,45,34,23]
number_2.sort()
number_2.reverse()
print(number_2)

# ###### Checking position 
my_number =[1,3,4,2,5,6,4,5,6]
print(my_number.index(6))


num_check=[3,4,4,5,2,5]
print(4 in num_check)
print(num_check.count(4)) #Count number


##### Sort list
my_sort = [1,34,45,45,5,2]
my_sort.sort   # Without this line the output will be none
print(my_sort)


#### Copy List
copy_number=[3,4,5,2]
copied_number=copy_number.copy
print(copied_number)


countries=['Germany', 'London','Nigeria', 'Canada']
print(countries[-1]) # Negative index
print(countries[0:1]) # Slicing list_name[start:stop]
print(countries[1:])
print(countries[:1])


#Appned to list
animals =['lion','tiger']
animals.append('monkey')
print(animals)


## Insert at a position
computer =['mac','HP', 'dell']
computer.insert(1, 'Asus')
print(computer)



# Concatenate arrays: i.e nested list
print(animals + computer)


# Removing elements
remove_fish = ['shark', 'whale', 'dolphin']
remove_fish.remove('whale')
print(remove_fish)


# Removing elements
remove_dog = ['mastiff', 'bull dog', 'Rot']
remove_dog.pop(-1)
print(remove_dog)

# Remove el using del method
card=['blue', 'green','yellow']
del card[0]
print(card)