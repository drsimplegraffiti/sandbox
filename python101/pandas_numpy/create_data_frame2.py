import pandas as pd
import numpy as np

data = np.array([[1,2],[2,45]])
df =pd.DataFrame(data, index=['row1', 'row2'], columns=['col1', 'col2'])
print(df)

