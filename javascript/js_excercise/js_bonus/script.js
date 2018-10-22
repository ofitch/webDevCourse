function	myForEach(arr, func){
	//loop through the array
	for(var i = 0; i < arr.length; i++){
		//call func for each item in array
		func(arr[i]);
	}
};

