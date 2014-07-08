
arr = [1,2,3,4,5,6,7,8,9]

subsets = module.exports = function(){}

subsets.prototype.output = function(subset){
	console.log(subset)
}

subsets.prototype.subsetize = function(superset, subset, subsetsize, nextindex){
	if(subsetsize == subset.length){
		this.output(subset)
	} else {
		for (j=nextindex;j<superset.length;j+=1) {
			subset[subsetsize] = superset[j]
			this.subsetize(superset, subset, subsetsize+1, nextindex+1)
		}
	}
}

subsets.prototype.init = function(superset, subsetsize) {
	for(i=0;i<superset.length;i+=1) {
		subset = new Array(subsetsize)
		this.subsetize(superset,subset, 0, i)
	}
}

s = new subsets()
s.init(arr,2)
