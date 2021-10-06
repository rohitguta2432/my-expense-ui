import matplotlib.pyplot as plt
import numpy as np
from sklearn import datasets, linear_model
from sklearn.metrics import mean_squared_error

diabetes = datasets.load_diabetes()
diabetes_x = diabetes.data[:,np.newaxis,2]

diabetes_x_train = diabetes_x[:-30]
diabetes_x_test = diabetes_x[-30:]

diabetes_y_train = diabetes_x[:-30]
diabetes_y_test = diabetes_x[-30:]

model = linear_model.LinearRegression()
model.fit(diabetes_x_train,diabetes_y_train)

diabetes_y_predict = model.predict(diabetes_x_test)

print("mean square error is : ", mean_squared_error(diabetes_y_test,diabetes_y_predict))

print("weights: ", model.coef_)
print("Intercept: ", model.intercept_)

plt.scatter(diabetes_x_test,diabetes_y_test)

plt.show()
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            