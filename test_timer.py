import time

def timer_decorator(fnc):
  a = [0]
  def wrapper():
    t1 = time.time()
    fnc()
    t2 = time.time()
    print "time taken to execute: ", t2-t1
    print a[0]
    a[0] += 1

  return wrapper

# if __name__ == "__main__":
#   timer_decorator()



@timer_decorator
def test_timer():
  print "function being timed"

test_timer()
test_timer()
test_timer()
test_timer()
test_timer()


