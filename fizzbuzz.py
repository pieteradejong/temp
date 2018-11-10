def fizzbuzz(n):
  if n < 1:
    raise ValueError("arg n must be greater than zero")

  for i in xrange(1,n+1):
    if i % 3 == 0 and i % 5 != 0:
      print i, " Fizz"
    elif i % 3 != 0 and i % 5 == 0:
      print i, " Buzz"
    elif i % 3 == 0 and i % 5 == 0:
      print i, " FizzBuzz"
    else:
      print i
    

fizzbuzz(27)


