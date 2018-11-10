def my_decorator(fnc):
  def wrapper():
    print "Before"
    fnc()
    print "After"


  return wrapper

if __name__ == "__main__":
  my_decorator()

