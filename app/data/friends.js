var friends = [
	{
		name: 'Bucky',
		photo: 'http://cdn3-www.dogtime.com/assets/uploads/gallery/30-impossibly-cute-puppies/impossibly-cute-puppy-1.jpg',
		scores: ['1', '5', '5', '1', '5', '5', '1', '1', '1', '5']
    },
    {
		name: 'Scooter',
		photo: 'http://cdn3-www.dogtime.com/assets/uploads/gallery/30-impossibly-cute-puppies/impossibly-cute-puppy-3.jpg',
		scores: ['1', '5', '5', '1', '5', '5', '1', '1', '1', '5']
    },
    {
		name: 'Wolf Gang',
		photo: 'http://cdn3-www.dogtime.com/assets/uploads/gallery/30-impossibly-cute-puppies/impossibly-cute-puppy-10.jpg',
		scores: ['1', '3', '3', '5', '2', '4', '2', '3', '5', '5']
    },
    {
		name: 'Tank',
		photo: 'http://cdn3-www.dogtime.com/assets/uploads/gallery/30-impossibly-cute-puppies/impossibly-cute-puppy-5.jpg',
		scores: ['6', '5', '5', '8', '5', '5', '9', '1', '3', '5']
    },
    {
		name: 'Snuffles',
		photo: 'http://cdn3-www.dogtime.com/assets/uploads/gallery/30-impossibly-cute-puppies/impossibly-cute-puppy-8.jpg',
		scores: ['6', '5', '5', '8', '5', '5', '9', '1', '3', '5']
    },
    {
        name: 'Snowball',
		photo: 'http://cdn3-www.dogtime.com/assets/uploads/gallery/30-impossibly-cute-puppies/impossibly-cute-puppy-12.jpg',
		scores: ['1', '5', '5', '1', '5', '5', '1', '1', '1', '5']
    },
    {
		name: 'Rusty',
		photo: 'http://cdn3-www.dogtime.com/assets/uploads/gallery/30-impossibly-cute-puppies/impossibly-cute-puppy-15.jpg',
		scores: ['1', '5', '5', '1', '5', '5', '1', '1', '1', '5']
    },
    {
		name: 'Cujoe',
		photo: 'http://cdn3-www.dogtime.com/assets/uploads/gallery/30-impossibly-cute-puppies/impossibly-cute-puppy-9.jpg',
		scores: ['1', '5', '5', '1', '5', '5', '1', '1', '1', '5']
    },
    {
		name: 'Rocky',
		photo: 'http://cdn3-www.dogtime.com/assets/uploads/gallery/30-impossibly-cute-puppies/impossibly-cute-puppy-2.jpg',
		scores: ['1', '5', '5', '1', '5', '5', '1', '1', '1', '5']
	},
	
];

function scores (){
    var scoreSum = 0;
        sumList = [];    
    for (i = 0; i < friends.length; i++) {
        friends[i].scores;
        for (j=0; j < friends[i].scores.length; j++) {
            scoreSum += friends[i].scores[j];
        }
        sumList.push(scoreSum);
        scoreSum = 0;
    }
};

function friendsList (newFriend) {
    if (newFriend) {
    friends.push(newFriend);
    }
    return friends;
}

module.exports.friendsList = friendsList;