/* interview notes:
- start by declaring vars you know you’ll need. every time you introduce a new one,
  declare it at the top, and assign it where it’s needed
- start by writing down the functions you’ll need, e.g. for your data structure
- it can be useful to name vars for what you’ll do with them, e.g. "vtx_del” for "vertex to be deleted”
- code organization: bonus points for organizing your code in a reasonable way
- use tabs, it’s easier than spaces!
- can be useful to demarkate closing curlies with // comments

TODO:
- look at advanced JS code reviews


MISTAKES:
raph.prototype.getVertices() {
                              ^
SyntaxError: Unexpected token {
//
- matching closing parens
- be very careful of "this": e.g. when calling forEach on a collection



*/


// graph search

function Graph() {
  this.edges = {} // adj list
}

/* helper functions */

Graph.prototype.isEdge = function(vtx_a, vtx_b) {
  if (!this.containsVertex(vtx_a) || !this.containsVertex(vtx_b)){
    return false;
  }
  var edges_a = this.edges[vtx_a];
  if (edges_a.indexOf(vtx_b) >= 0) {
    return true;
  }
  else {
    return false;
  }
}

Graph.prototype.containsVertex = function(vtx) {
  var vertices = Object.keys(this.edges);
  return (vertices.indexOf(vtx) >= 0);
}

Graph.prototype.getVertices = function() {
  return Object.keys(this.edges);
}

Graph.prototype.getEdges = function() {
  var vertices = this.getVertices();
  var edges = [];
  var g_edges = this.edges;
  vertices.forEach(function(el, ix, vertices){  
    nbs = g_edges[el];
    nbs.forEach(function(vtx_dest){
      edges.push(el + vtx_dest);
    });
  });
  // return uniques(edges);
  return edges;
}

// Graph.prototype.uniques = function(arr) {
//   return arr;
// }


/* vertex functions */

Graph.prototype.addVertex = function(vtx) {
  this.edges[vtx] = [];
}

Graph.prototype.removeVertex = function(vtx) {
  if (!containsVertex(vtx)) {
    return false;  
  }

  var neighbors = this.edges[vtx];
  var nb_edges, nb_ix;
  // remove vtx from all neighbor’s lists
  neighbors.forEach(function(nb, ix, arr) {
    nb_edges = this.edges[nb];
    nb_ix = nb_edges.indexOf(vtx);
    nb_edges.splice(nb_ix, 1);
  });

  // lastly, remove vtx itself
  delete this.edges[vtx];
}

/* edges functions */

Graph.prototype.addEdge = function(vtx_a, vtx_b) {
  // ? check vtx_a and vtx_b exist?
  if (!this.containsVertex(vtx_a) || !this.containsVertex(vtx_b)) {
    return false;
  }  

  if (!this.isEdge(vtx_a, vtx_b)) {
    // add edge to vtx_a
    edges_a = this.edges[vtx_a];
    edges_a.push(vtx_b);
    // add edge to vtx_b
    edges_b = this.edges[vtx_b];
    edges_b.push(vtx_a);
  }
  else {
    // potentially return something else
  }
  return true;
}

Graph.prototype.removeEdge = function(vtx_a, vtx_b) {
  if (!this.isEdge(vtx_a, vtx_b)) {
    return false;
  }
  neighb_a = this.edges[vtx_a];
  ix_a = neighb_a.indexOf(vtx_b);
  neighb_a.splice(ix_a, 1);

  neighb_b = this.edges[vtx_b];
  ix_b = neighb_b.indexOf(vtx_a);
  neighb_b.splice(ix_b, 1);

  return true;
}

/* find */

Graph.prototype.bfsFindTarget = function(start, target) {
  var q = [start];
  var vis =  {};
  var neighbors;
  
  while (q.length > 0){ 
    curr = q.shift();
    if (curr === target) {
      return target;
    }

    neighbors = this.edges[curr];
    neighbors.forEach(function(nb, ix, neighbors){
      if (!vis.hasOwnProperty(nb)) {
        vis[nb] = true;
        q.push(nb);
      }
    });

  }
  return false;
}

Graph.prototype.traverse_bfs = function(start) {
  var visit = function(vtx) {
    visit_seq.push(vtx);
  }

  var q, vis, curr, neighbors, visit_seq;
  q = [start];
  vis = {};
  vis[start] = true;
  visit_seq = [];

  while (q.length > 0) {
    curr = q.shift();
    
    console.log("curr", curr);
    visit(curr);
    
    neighbors = this.edges[curr];
    neighbors.forEach(function(el, ix, neighbors){
      
      if(!vis.hasOwnProperty(el)) {
        console.log("el ", el);
        vis[el] = true;
        q.push(el);
      }
    });
  }
  return visit_seq;
}

Graph.prototype.traverse_dfs = function(start) {
  var stack, vis, visit, neighbors;
  stack = [start];
  vis = {};
  vis[start] = true;
  path = [];
  visit = function(vtx){ path.push(vtx); }

  while (stack.length > 0) {
    curr = stack.pop();
    
    visit(curr);

    neighbors = this.edges[curr];
    neighbors.forEach(function(el, ix, neighbors){
      if(!vis.hasOwnProperty(el)){
        vis[el] = true;
        stack.push(el);
    }

    });//foreach

  }// while 
  return path;
}

Graph.prototype.find_paths = function(start, target) {
  // path ex.: ["a”, "f”, "d”, "f”, "b”]
  var neighbors, q, vis, curr_path, paths;
  q = [start];
  vis = {};
  paths = [];
  curr_path = [];
  
  while(q.length > 0) {
    curr = q.shift();
    curr_path.push(q.shift());
    
    if(curr === target){
      paths.push(curr_path);
    }

    frontier_node = curr_path[curr_path.length-1];
    neighbors = this.edges[frontier_node];
    neighbors.forEach(function(el, ix, neighbors){
      if(!vis.hasOwnProperty(frontier_node)) {
        vis[frontier_node] = true;
        paths.push(curr_path);
      }
    });    

  }
  return paths;
}

function run_tests() {
  var g = new Graph();  
  g.addVertex("A");
  console.log(g.containsVertex("A"), " , expect true");
  console.log(g.containsVertex("B"), " , expect false");
  g.addVertex("B");
  console.log(g.getVertices(), " expect A, B");
  g.addEdge("A", "B");
  console.log(g.getEdges(), "  expect AB");
  g.removeEdge("A", "B");
  console.log(g.getEdges(), "  expect []");

  var g3 = new Graph();
  g3.addVertex("A");
  g3.addVertex("B");
  g3.addVertex("C");
  g3.addEdge("A", "B");
  g3.addEdge("B", "C");
  g3.addEdge("A", "C");
  console.log("\n BFS traverse: \n ", g3.traverse_bfs("A"));
  console.log("\n DFS traverse: \n ", g3.traverse_dfs("A"));

  console.log("\n Find Path: ", g3.find_paths("A", "B"));

  // var g2 = new Graph();
  // g2.addVertex("A");
  // g2.addVertex("B");
  // g2.addVertex("C");
  // g2.addVertex("D");
  // g2.addVertex("E");
  // g2.addVertex("F");
  // g2.addEdge("", "");
  // g2.addEdge("", "");
  // g2.addEdge("", "");
  // g2.addEdge("", "");
  // g2.addEdge("", "");
  // g2.addEdge("", "");
  // g2.addEdge("", "");

}


run_tests();

