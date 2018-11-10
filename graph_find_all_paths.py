graph = {
        '1': ['2', '3', '4'],
        '2': ['5', '6'],
        '5': ['9', '10'],
        '4': ['7', '8', '11'],
        '7': ['11', '12']
}

def bfs(graph, start, end):
    paths = []

    # maintain a queue of paths
    queue = []
    # push the first path into the queue
    queue.append([start])
    while queue:
        # get the first path from the queue
        path = queue.pop(0)
        # get the last node from the path
        node = path[-1]
        # path found
        if node == end:
            paths.append(path)
        # enumerate all adjacent nodes, construct a new path and push it into the queue
        for adjacent in graph.get(node, []):
            new_path = list(path)
            new_path.append(adjacent)
            queue.append(new_path)

    return paths

print bfs(graph, '1', '11')
# print bfs(graph, '1', '11')
# print bfs(graph, '1', '11')
# print bfs(graph, '1', '11')
# print bfs(graph, '1', '11')

