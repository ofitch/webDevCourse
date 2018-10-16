var friends = ["Charlie", "Liz", "David", "Matias", "Liz"];

friends.push("Carlos");
//returns the first index at which a given element can be found;
console.log("index of Carlos: " + friends.indexOf("Carlos"));
console.log("index of Matias: " + friends.indexOf("Matias"));
//First instance of Liz;
console.log("index of Liz(first instance): " + friends.indexOf("Liz"));
console.log("index of a non exsistance array: " + friends.indexOf("Hermione"));