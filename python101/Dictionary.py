#Dict my_dict ={"key":"value", "key2":"value"}

customer = {
    "name":"joe",
    "age":7,
    "is_verified":True
}
print(customer["name"])
# print(customer.get["birthday"])


print(customer.keys())
print(customer.values())
print(customer.items())
result = customer['name'] ='Jim'
print(result)
print(customer)

update_dict= customer.update({"is_verified":False})
print(update_dict)


