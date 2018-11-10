class Interval: 
    
    def __init__(self, start, end):
        self.start = start
        self.end = end
    
def process_intervals(input1, input2):
    output = []
    for intv in input1:
        # input1 = (a1, b1), input2 = (a2, b2)
        if input2.start > input1.end or input2.start > input1.end:
            output.append(intv)

        else:
            # case 1: need to modify bounds on last intv in output
            # case 2: need to append current intv to output (?)

    
    
def main():
    i1_1 = Interval(3,5)
    i1_2 = Interval(7,9)
    i1_3 = Interval(12,15)
    
    i2 = Interval(4,8)
    
    output = process_intervals([i1_1, i1_2, i1_3], i2) # <3,9>, <12,15>
    
    for item in output:
        print item.start, " ", item.end 
    
main()

# input 1 is sorted and disjoint, input 2 is just one interval
# inpout 1 fiots in mem, input 2 is exactly one interval
# input #1: <3,5>, <7,9>, <12,15>
# input #2: <4,8>
#   output: <3,9>, <12,15>

# input #2: <1,2>
#   output: <1,2>, <3,5>, <7,9>, <12,15>

# input #2: <1,21>
#   output: <1,21>

# find interval in i1 that contains lower bound of i2
# find interval in i1 that contains upper bound of i2
# contains := incousive on lower and upper
# output: all preceding intervals from i1, followed by i2, followed by all succsive intervals

'''

compare interval1 (a1, b1) and
        interval 2 (a2, b2):
>> terminating condition for merging: b2 < a1
- case: b2 < a1: append interval1 to output
- case: a1 <= a2 <= b1: start merging
- case: 

'''
