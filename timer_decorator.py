import time

def timer_decorator(fnc):
  a = [0]
  b = [0]
  def wrapper():
    t1 = time.time()
    fnc()
    t2 = time.time()
    print "time taken to execute: ", t2-t1
    print a[-1]
    print b
    a.append(a[-1]+1)
    b[0] += 1

  return wrapper

if __name__ == "__main__":
  timer_decorator()

