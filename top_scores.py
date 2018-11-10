def top_scores(lst, hpc):
  
  if len(lst) == 0:
    raise ValueError("must provide list with at least one element")

  buckets = [0] * hpc
  for score in lst:
    buckets[score-1] += 1

  sorted_scores = []
  for ix, bucket in enumerate(buckets):
    if bucket > 0:
      sorted_scores.append([ix+1] * bucket)

  return sorted_scores




HIGHEST_POSSIBLE_SCORE = 100
unsorted_scores = [37, 89, 41, 65, 91, 53]

print sort_scores([], HIGHEST_POSSIBLE_SCORE)
print sort_scores(unsorted_scores, HIGHEST_POSSIBLE_SCORE)
# returns [91, 89, 65, 53, 41, 37]