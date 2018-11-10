class Solution:
  def __init__(self, value):
    self.value = value

  def get_value(self):
    print self.value


def main():
  sol = Solution(5)
  sol.get_value()

if __name__ == "__main__":
  main()


