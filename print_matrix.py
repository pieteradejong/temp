class Solution(object):
    def column(self, matrix, j):
        return [row[j] for row in matrix]

    def print_row_top(self, matrix, i):
        for item in matrix[i]:
            print item
    
    def print_row_bottom(self, matrix, i):
        for item in matrix[i][:-1:-1]:
            print item

    def print_col_up(self, matrix, j):
        for item in reversed(self.column(matrix, j)):
            print item

    def print_col_down(self, matrix, j):
        for item in self.column(matrix, j):
            print item
    
    def spiralOrder(self, matrix):
        """
        :type matrix: List[List[int]]
        :rtype: List[int]
        """
        rows = len(matrix)
        cols = len(matrix[0])
        
        if rows == 1 and cols == 1:
            print matrix[0][0]
        elif rows == 1:
            self.print_row_ltr(matrix, 0)
        elif cols == 1:
            self.print_col_down(matrix, 0)
            
        
        else:
          offset = 0

          self.print_row_ltr(matrix, offset)
          self.print_col_down(matrix, cols - offset - 1)
          self.print_row_rtl(matrix, rows - offset - 1)
          self.print_col_up(matrix, offset)

    
    
        
mtx = [
 [ 1, 2, 3 ],
 [ 4, 5, 6 ],
 [ 7, 8, 9 ]
]
# mtx = [[1, 2, 3, 4]]

def test():
  sol = Solution()
  sol.spiralOrder(mtx)

test()