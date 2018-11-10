# 1. print all nodes
# 2. find specific target
# 3. find shortest path
# 4. find minimum cost. same as 3?


from collections import deque

g1 = [
  [0,1,0,0],
  [0,0,1,0],
  [0,0,0,1],
  [1,0,0,0]
]
g2 = [
  [1,1,1,1],
  [1,1,1,1],
  [1,1,1,1],
  [1,1,1,1]
]

def bfs_visit_all(g, node_a):

  vis = set()
  vis.add(node_a)
  q = deque([node_a])

  while q:
    node = q.pop()
    print node

    for ix, has_edge in enumerate(g[node]):
      neighb = ix
      if has_edge > 0 and neighb not in vis:
        vis.add(neighb)
        q.appendleft(neighb)

  

def bfs_find_target(g, start, target):
  if target >= len(g):
    print "target must be < " , len(g)
    return

  vis = set()
  q = deque([start])
  vis.add(start)

  while q:
    curr = q.pop()
    
    if curr == target:
      return target 

    for ix, has_edge in enumerate(g[curr]):
      neighb = ix
      if has_edge and neighb not in vis:
        vis.add(neighb)
        q.appendleft(neighb)

def dfs_visit_all(g, source):
  vis = set()
  stack = list([source])

  while stack:
    curr = stack.pop()
    print curr

    for ix, has_edge in enumerate(g[curr]):
      neighb = ix
      if has_edge == 1 and ix not in vis:
        vis.add(neighb)
        stack.append(neighb)



def dfs_find_target(g, source, target):
  vis = set()
  stack = list([source])

  while stack:
    curr = stack.pop()
    if curr == target:
      return target

    for ix, has_edge in enumerate(g[curr]):
      
      neighb = ix
      if has_edge == 1 and neighb not in vis:
        vis.add(neighb)
        stack.append(neighb)




# print breadth_first_search(g1, 0) #, " expected "
# print bfs_visit_all(g2, 0) #, " expected "
# print bfs_find_target(g2, 0, 3)

# print bfs_find_target(g1, 1, 2)
# print bfs_find_target(g1, 2, 2)
# print bfs_find_target(g1, 0, 3)
# print bfs_find_target(g1, 0, 4)
# print bfs_find_target(g1, 0, 5)
# print bfs_find_target(g2, 9, 19)
# print dfs_visit_all(g1, 0)
# print dfs_visit_all(g2, 0)

print dfs_find_target(g1, 0, 1)
print dfs_find_target(g1, 0, 2)
print dfs_find_target(g1, 0, 3)
print dfs_find_target(g1, 1, 2)

'''
bfs in graph:

init start node in a q
while q not empty:
  pop q --> node
  mark node as visited
  visit node
  add neighbors to q if not visited

problem: we mark nodes as visited when we actually visit them, and 
in a suffciently connected graph, by then they might have been added to the q 
multiple times.




'''