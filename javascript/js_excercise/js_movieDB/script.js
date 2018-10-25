// Create an array of movie objects. Each movie should have a title,
// rating, and hasWatched properties. Iterate through the array and
// print out something that looks like: 
// You have watched "In Bruges" - 5 stars
// You have not seen "Frozen" - 4.5 stars
// You have seen "Mad Max Fury Road" - 5 stars
// You have not seen "Les Miserables" - 3.5


// var arrMovies = [
// [{title: "forest gump",
// rating: 5,
// watched: false}],
// [{title: "Deadpool2",
// rating: 4,
// watched: true}]];


var arrMovies = [
	{
		title: '"The Count Of Mountchrist"',
		rating: 2,
		watched: false
	},
	{
		title: '"Forest Gump"',
		rating: 3,
		watched: true
	},
	{
		title: '"Deadpool"',
		rating: 4,
		watched: false
	}
];

function displayMovies(arr){
	for(var i = 0; i < arr.length; i++){
		if(arr[i].watched === false)
			console.log('You have not watch : ' + arr[i].title + ' - ' + arr[i].rating + " stars");
		else if (arr[i].watched === true)
			console.log('You have watch: ' + arr[i].title + ' - ' + arr[i].rating + " stars");
	}
};