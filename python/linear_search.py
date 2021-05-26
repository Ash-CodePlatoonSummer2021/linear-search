array_to_search_through = []
for number in range(1, 1001):
    array_to_search_through.append(number)

def linear_search(value_to_find, array_to_search_through):
    # your code here
    for x in range(len(array_to_search_through)):
        if(array_to_search_through[x]==value_to_find):
            return x
    return None