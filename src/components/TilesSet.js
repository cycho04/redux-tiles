export const tilesSet = [
	//High Tiles
	{
		name: "GJ3",
		rank: 16, //individual tile rank
		pairRank: 1, //pair rank
		val: [3, 6], //ex: 10 = 0, 11 = 1
		realValue: [3, 6], //ex: 10 = 10, 11 = 11
		pair: 1, //its pair has the same value
		split: [7, 9], //when they split
		img: "https://images.unsplash.com/photo-1539967430815-b3d193609067?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=69a8fa46a45965334f512283a796f25b&auto=format&fit=crop&w=500&q=60" //imgs in a folder in same directory
	},
	{name: "GJ6", rank: 16, pairRank: 1, val: [3, 6], realValue: [3, 6], pair: 1, split: [7, 9], img: "imgs/GeeJoon6.jpeg"},
	{name: "teen", rank: 1, pairRank: 2, val: 2, realValue: 12, pair: 2, split: [[6, 8], [3, 90]],img: "imgs/Teen1.jpeg"},
	{name: "teen", rank: 1, pairRank: 2, val: 2, realValue: 12, pair: 2, split: [[6, 8], [3, 90]], img: "imgs/Teen2.jpeg"},
	{name: "dey", rank: 2, pairRank: 3, val: 2, realValue: 12, pair: 3, split: [[6, 8], [3, 90]], img: "imgs/Dey1.jpeg"},
	{name: "dey",rank: 2, pairRank: 3, val: 2, realValue: 12, pair: 3, split: [[6, 8], [3, 90]], img: "imgs/Dey2.jpeg"},
	{name: "H8", rank: 3, pairRank: 4, val: 8, realValue: 8, pair: 4, split: [7, 7], img: "imgs/H8.jpeg"},
	{name: "H8", rank: 3, pairRank: 4, val: 8, realValue: 8, pair: 4, split: [7, 7], img: "imgs/height2.jpeg"},
	{name: "H4", rank: 4, pairRank: 5, val: 4, realValue: 4, pair: 5, split: false, img: "imgs/H4.jpeg"},
	{ name: "H4", rank: 4, pairRank: 5, val: 4, realValue: 4, pair: 5, split: false, img: "imgs/hfour2.jpeg"},
	//Symmetric tiles
	{ name: "H10", rank: 5, pairRank: 6, val: 0, realValue: 10, pair: 6, split: false, img: "imgs/H10.jpeg"},
	{name: "H10", rank: 5, pairRank: 6, val: 0, realValue: 10, pair: 6, split: false, img: "imgs/hten2.jpeg"},
	{name: "H6", rank: 6, pairRank: 7, val: 6, realValue: 6, pair: 7, split: false, img: "imgs/H6.jpeg"},
	{name: "H6", rank: 6, pairRank: 7, val: 6, realValue: 6, pair: 7, split: false, img: "imgs/hsix2.jpeg"},
	{name: "L4", rank: 7, pairRank: 8, val: 4, realValue: 4, pair: 8, split: false, img: "imgs/L4.jpeg"},
	{name: "L4", rank: 7, pairRank: 8, val: 4, realValue: 4, pair: 8, split: false, img: "imgs/lfour2.jpeg"},
	//Half Symmetric tiles
	{name: "11", rank: 8, pairRank: 9, val: 1, realValue: 11, pair: 9, split: false, img: "imgs/eleven.jpeg"},
	{name: "11", rank: 8, pairRank: 9, val: 1, realValue: 11, pair: 9, split: false, img: "imgs/eleven2.jpeg"},
	{name: "L10", rank: 9, pairRank: 10, val: 0, realValue: 10, pair: 10, split: false, img: "imgs/L10.jpeg"},
	{name: "L10", rank: 9, pairRank: 10, val: 0, realValue: 10, pair: 10, split: false, img: "imgs/lten2.jpeg"},
	{name: "H7", rank: 10, pairRank: 11, val: 7, realValue: 7, pair: 11, split: [7, 7], img: "imgs/H7.jpeg"},
	{name: "H7", rank: 10, pairRank: 11, val: 7, realValue: 7, pair: 11, split: [7, 7], img: "imgs/hseven2.jpeg"},
	{name: "L6", rank: 11, pairRank: 12, val: 6, realValue: 6, pair: 12, split: false, img: "imgs/L6.jpeg"},
	{name: "L6", rank: 11, pairRank: 12, val: 6, realValue: 6, pair: 12, split: false, img: "imgs/lsix2.jpeg"},
	//Mixed pairs
	{name: "R9", rank: 12, pairRank: 13, val: 9, realValue: 9, pair: 13, split: [9, 9], img: "imgs/R9.jpeg"},
	{name: "W9", rank: 12, pairRank: 13, val: 9, realValue: 9, pair: 13, split: [9, 9], img: "imgs/W9.jpeg"},
	{name: "L8", rank: 13, pairRank: 14, val: 8, realValue: 8, pair: 14, split: [7, 7], img: "imgs/L8.jpeg"},
	{name: "WL8", rank: 13, pairRank: 14, val: 8, realValue: 8, pair: 14, split: [7, 7], img: "imgs/L8(2).jpeg"},
	{name: "R7", rank: 14, pairRank: 15, val: 7, realValue: 7, pair: 15, split: [7, 7], img: "imgs/R7.jpeg"},
	{name: "W7", rank: 14, pairRank: 15, val: 7, realValue: 7, pair: 15, split: [7, 7], img: "imgs/W7.jpeg"},
	{name: "R5", rank: 15, pairRank: 16, val: 5, realValue: 5, pair: 16, split: false, img: "imgs/R5.jpeg"},
	{name: "W5", rank: 15, pairRank: 16, val: 5, realValue: 5, pair: 16, split: false, img: "imgs/W5.jpeg"}
]