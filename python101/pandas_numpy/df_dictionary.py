# import numpy as np
import pandas as pd


# lists used for this example
states = ["California", "Texas", "Florida", "New York"]
population = [39613493, 29730311, 21944577, 19299981]

# Storing lists within a dictionary
dict_states = {'States': states, 'Population': population}

# Creating the dataframe
df_population = pd.DataFrame(dict_states)
# df_population = pd.DataFrame.from_dict(dict_states)

# showing the datafrane
print(df_population)