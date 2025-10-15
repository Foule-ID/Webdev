
data_int = int(input("Enter an integer: "))

print("You entered:", data_int)
print("Type of the input:", type(data_int))

print("============================")

data_str = str(data_int)
data_bool = bool(data_int)
data_float = float(data_int)

print("String:", data_str, "Type:", type(data_str))
print("Boolean:", data_bool, "Type:", type(data_bool))
print("Float:", data_float, "Type:", type(data_float))
print("int to float:", float(data_int), "Type:", type(float(data_int)))

print("============================")

data_float = float(input("Enter a float: "))
print("You entered:", data_float)
print("Type of the input:", type(data_float))

print("============================")

print("Float to int:", int(data_float), "Type:", type(int(data_float)))
print("Float to string:", str(data_float), "Type:", type(str(data_float)))
print("Float to boolean:", bool(data_float), "Type:", type(bool(data_float)))

print("============================")