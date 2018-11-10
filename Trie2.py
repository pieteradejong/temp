class Trie:
  def __init__(self, str):
    self.value = value
    self.children = []
    self.is_word


  def contains(self, str):
    # traverse down while str exists
    # fetch node if possible. essentially the same as linked list

    if not str:
      if self.is_word:
        return True
      else:
        return False

    nextChar = str[0]

    if nextChar in self.children:
      return self.children[nextChar].contains(str[1:])
    else:
      return False

    # iterative:
    curr, nextChar = self, str[0]
    while nextChar:
      curr = 



