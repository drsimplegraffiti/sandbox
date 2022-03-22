name = "james"
print(name.isupper())
print(name.capitalize())
print(name.casefold())
print(name.endswith("s"))

a = """Lorem ipsum dolor sit amet,
consectetur adipiscing elit,
sed do eiusmod tempor incididunt
ut labore et dolore magna aliqua."""
print(a)


b = "should be"
print("be" in b)


text = "loops in the hole"
if "hole" in text:
    print("Yes, 'hole' is present.")

text = "loops in the hole"
if "holes" not in text:
    print("No, 'holes' is  no present.")

quantity = 3
itemno = 567
price = 49.95
myorder = "I want {} pieces of item {} for {} dollars."
print(myorder.format(quantity, itemno, price))


quantity = 3
itemno = 567
price = 49.95
myorder = "I want to pay {2} dollars for {0} pieces of item {1}."
print(myorder.format(quantity, itemno, price))

age = 36
txt = "My name is John, and I am {}"
print(txt.format(age))

age = 36
name = "John"
txt = "His name is {1}. {1} is {0} years old."
print(txt.format(age, name))
