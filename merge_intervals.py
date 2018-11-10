class Interval: 
    
    def __init__(self, start, end):
        self.start = start
        self.end = end
    
def process_intervals(intervals_lst, input2):
    # find interval containing input2.start, same for input2.end
    
    output = []
    
    
    start = input2.start
    end = input2.end
    
    for iv in intervals_lst:
        
        if start > iv.end:
            output.append(iv)
        
        if start >= iv.start and start <= iv.end:
            # we need to start merge
            # accum. list of to lists to be merged
            overlap = []
            output.append(Interval(merge(overlap)))
            upper_bound = max(end, iv.end)
        
        else:
            # weve found first input interval to merge into 1
            lower_bound = min(start, iv.start)
    
    return output
    
    
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


