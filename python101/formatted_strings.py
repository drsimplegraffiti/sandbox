# Formatted strings
first = 'james'
second = 'doe'
message = f'{first} {second} codes like a beast'
print(message)


# Input variables
cost_of_ice_bag = 1.25
profit_margin = .2
number_of_bags = 500

# Template for output message
output_template = """If a grocery store sells ice bags at $ {} per bag, with a profit margin of {} %, 
then the total profit it makes by selling {} ice bags is $ {}."""

print(output_template)

# Inserting values into the string
total_profit = cost_of_ice_bag * profit_margin * number_of_bags
output_message = output_template.format(
    cost_of_ice_bag, profit_margin*100, number_of_bags, total_profit)

print(output_message)

message2 = "If a grocery store sells ice bags at $ " + \
    str(cost_of_ice_bag) + ", with a profit margin of " + str(profit_margin)
print(message2)
