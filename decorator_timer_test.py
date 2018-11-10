import time

def timer_decorator(fnc):
    def wrapper():
      t1 = time.time()
      fnc()
      t2 = time.time()
      print "Execution time: ", t2 - t1
    return wrapper

class Solution:
  # def __init__(self):
    #

  @timer_decorator
  def my_fnc(self):
    print sum(xrange(1000))

def main():
  sol = Solution()
  sol.my_fnc()

if __name__ == "__main__":
  main()
