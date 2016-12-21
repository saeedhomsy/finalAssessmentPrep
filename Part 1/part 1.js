//=============================================================================
/*                                  Part 1                                   */
//=============================================================================
/* (1) Think of some way to represent all of the students in RBK cohort2, if you know
		that each one have the following attributs:
		- name - age - education - nationality

	a- represent 2 of your frineds in rbk using the model that you have made and name them as your frineds name

	b- create a function called showFriend() that accepts one parameter, and output representation of your frined like the following
		showFriend(frinedData) // "Fatema with the age of 26 and with computer engineering education" 

	c- create a function called avergeStudents() to calculate the average age of your class students, is it possible to pass all your class students one by one ? think of a way to pass them in your function
	*/
// write your code here ...

function friedns(){
	var friendsArr = [makeFriends('Hasan Name',25,'IT','Syrian'),makeFriends('Muhannad Bakkar',26,'IT','syrian')]
	return {
		showFriend:function(friend){
			return friend.name + " with the age of " + friend.age + " and with " + friend.education + " education"
		},
		avergeStudents:function(){
			var sumAges = friendsArr.reduce(function(acc,elem){
				return acc + elem.age
			},0);
			return sumAges / friendsArr.length
		}
	}	
}

function makeFriends(name,age,education,nationality){
	return{
		name:name,
		age:age,
		education:education,
		nationality:nationality
	}
}



/*
 b-create a function called rangeSquared in which it will accept two parameters, and will output the squared numbers between these two parameter if the number is even 
	in order to square the numbers create a function called square and call it inside rangeSquared function
	rangeSquared(2)// [4];
	rangeSquared(3) // null
	rangeSquared(2,10)// [4,16,36,64,100];
	*/
// write your code here ...

function square(num){
	return num * num;
}

function rangeSquared(){
	var args = Array.prototype.slice.call(arguments);
	var finalArr = [];
	for (var i = args[0]; i <= args[args.length-1]; i++) {
		if (i % 2 === 0) {
			finalArr.push(square(i));
		}
	}
	return finalArr.length === 0 ? null : finalArr;
}




/* c- Find all leaders in an array. A leader is an element larger than all elements to the right of it.
 	Example:
	leader([98, 20, 30, 5, 11, 27]) // output: [98, 30, 27]
	*/



// write your code here ....

function leader(arr){
	var res = [];
	var led = arr[arr.length-1];
	res.push(arr[arr.length-1])
	for (var i = arr.length - 2; i >= 0; i--) {
		if (arr[i]>led) {
			res.push(arr[i])
			led = arr[i];
		}
	}
	return res.sort(function(a,b){
		return  b - a;
	});
}


