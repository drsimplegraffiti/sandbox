import numpy as np
import pandas as pd

data =[[3,4],[5,8],[9,1]]
df =pd.DataFrame(data, index=['row1', 'row2', 'row3'], columns=['col1', 'col2'])
print(df)