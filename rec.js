

Subsets = function(){}

Subsets.prototype.merge = function(subset){
	//console.log(subset)
	this.retarr.push(subset.join(''))
}

Subsets.prototype.subsetize = function(superset, subset, subsetsize, nextindex){
	if(subsetsize == subset.length){
		this.merge(subset)
	} else {
		for (j=nextindex;j<superset.length;j+=1) {
			subset[subsetsize] = superset[j]
			this.subsetize(superset, subset, subsetsize+1, nextindex+1)
		}
	}
}

Subsets.prototype.getSubsets = function(superset, subsetsize) {
	for(i=0;i<superset.length;i+=1) {
		subset = new Array(subsetsize)
		this.subsetize(superset,subset, 0, i)
	}
	return this.retarr
}

Subsets.prototype.retarr = []

arr = [1,2,3,4,5,6,7,8,9]
s = new Subsets()
x = s.getSubsets(arr,5)
console.log(x)
