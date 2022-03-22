def greet_user():  # def means define
    print('Hello there')


greet_user()


############ Paramters and Argument in function
def greet_all(name):
    print(f' Hi {name}')


greet_all('Jane')

# Position argument


def say_name(first_name, second_name):
    print(f' Hi {first_name} {second_name}')


# say_name('Jane') ## This will throw error
say_name('Jane', 'Jude')  # This will not throw error


# Key word argument
def say_name(order_1, order_2):
    print(f'{order_1} {order_2}')


say_name(order_2="tiger", order_1="lion")
