/*
# n people in meetup
# 0 - n-1

# 0: [1, 2]
# 1: [3]
# 2: [3]
# 3: [4]
# 4: []

# 0 1 3 4: 0 + (3-1)^2 + (4-3)^2
# 0 2 3 4: 0 + (3-2)^2 + (4-3)^2

# 0: [3]
# 1: []
# 2: [4]
# 3: [2]
# 4: []

    
# shortest path
# cost: 
    
def find_path(startNode, endNode):
    g = [
        [0, 1, 1, 0, 0],
        [0, 0, 0, 1, 0],
        [0, 0, 0, 1, 0],
        [0, 0, 0, 0, 1]    
    ]

    # start in i = 0
    # nodes are numbered 0...n-1
    cur_node = 0
    q = []
    vis = {}
    paths = {}
    
    while cur_node != endNode:
        edges = g[cur_node] # 0s and 1s
        
        for i, edge_exists in enumerate(edges):
            
            if edge_exists == 1 and i not in vis: # there is connection. neihbor indicates node index
                q.append(i)
                
                
        # read one node from q
        if cur_node == endNode:
            return []
        
        # test node: == endNode? --> we record path + cost
        # else: continue
*/            
// new js solution:

function shortesPathWeighted(g, start, target) {
    //
    
}


    
    
    

