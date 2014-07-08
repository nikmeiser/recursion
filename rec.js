

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
	if (superset.length < 1) {
		return new Error("SupersetSizeInvalid")
	} else if (subsetsize < 0) {
		return new Error("NoNegativeSubset")
	} else if (superset.length < subsetsize){
		return new Error("SupersetSizeTooShort")
	} else if (subsetsize < 2) {
		return new Error("SubsetSizeTooShort")
	} else {
		for(i=0;i<superset.length;i+=1) {
			subset = new Array(subsetsize)
			this.subsetize(superset,subset, 0, i)
		}
		return this.retarr
	}
}

Subsets.prototype.retarr = []

arr = [1,2,3,4,5,6,7,8,9]
arr2 = [1]
s = new Subsets()
x = s.getSubsets(arr,4)
console.log(x)
