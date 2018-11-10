


# iterative below:


'''
class Trie:
  
  def __init__(self, value):
    self.value = value
    self.children = {}

  def add_child(self, value):
    child = Trie(value)
    self.children[value] = child

  def traverse_to_prefix(self, pfix):
    # returns either the node for the last char in pfix,
    # or if pfix not present, returns index for last char in list
    if len(pfix) == 0:
      return self
    
    ix = 0
    next_char = pfix[ix]
    curr_node = self

    while next_char in curr_node.children and ix < len(pfix) - 1:
      curr_node = curr_node[next_char]
      ix += 1
      next_char = pfix[ix]

    if ix == len(pfix)-1:
      return curr_node
    else:
      return ix
  

  def add_word(self, word):
    node = self.traverse_to_prefix(word)
    return node.value

  def contains_word(self, word):
    return self.traverse_to_prefix(word)

  def contains_string(self, str):
    if len(str) == 0:
      return

    # str[0] would be child of this node
    # iterative
    ix = 0
    char = str[ix]
    curr_node = self
    while char in curr_node.children and ix < len(str):
      curr_node = self.children[char]
      ix += 1
      char = str[ix]
    
    # case: there are chars left, so chain terminated before word ended.
    # word is not present, return False
    if ix < len(str) - 1: # or: if char not in curr_node.children
      return False # str not fully pres


    # case: we've fully followed chain, and used all chars. 
    # BUT last char is not a is_word
    # return False
    elif not curr_node.is_word:
      return False

    return True
    

def test_trie():
  root = Trie(None) # should initiaize with empty root node
  print root.contains_word("apple"), " expect 0" 
  print root.add_word("cocao"), " expect None"
  # root.add_word("cocoa")
  # print "expect false: ", root.contains_word("coc")
  # print "expect true: ", root.contains_word("cocoa")

if __name__ == "__main__":
  test_trie()

'''
'''
pseudo code to insert word into trie:

ix = 0
while word[ix] in curr_node.children:
  curr_node = curr_node.children[word[ix]]
  ix += 1
# now, curr_node is the last node that maches our word.
# next, we need to add a chain of children for every remaining letter

data strucure for children:
{}

Trie root should be normal node with None for its value
Trie node should be able to tell you whether string exists starting there

'''
