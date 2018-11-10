def test_outer():
  value = []
  def test_inner():
    print value
    for i in range(10):
      value.append(i)

  test_inner()
  return value

print "expect 5 ", test_outer()

