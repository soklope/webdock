export const plannedArrayDb = [
	{
		title: "Basic Plan",
		description: "Ideal for small websites and personal blogs",
		numberOfComments: 5,
		numberOfUpvotes: 34,
		status: "Planned",
		category: "Dashboard Features",
		createdAt: new Date("2022-10-01"),
	},
	{
		title: "WordPress Hosting",
		description:
			"Optimized for WordPress websites with one-click installation",
		numberOfComments: 8,
		numberOfUpvotes: 50,
		status: "Planned",
		category: "Documentation",
		createdAt: new Date("2020-11-15"),
	},
	{
		title: "VPS Hosting",
		description: "Virtual Private Server hosting with dedicated resources",
		numberOfComments: 18,
		numberOfUpvotes: 78,
		status: "Planned",
		category: "Hardware and Products",
		createdAt: new Date("2021-09-05"),
	},
	{
		title: "Email Hosting",
		description: "Professional email hosting with advanced features",
		numberOfComments: 3,
		numberOfUpvotes: 22,
		status: "Planned",
		category: "Billing Features",
		createdAt: new Date("2019-12-20"),
	},
];

export const inProgressArrayDb = [
	{
		title: "Business Plan",
		description: "Perfect for small businesses and e-commerce sites",
		numberOfComments: 10,
		numberOfUpvotes: 72,
		status: "In Progress",
		category: "Networking",
		createdAt: new Date("2021-08-10"),
	},
	{
		title: "Enterprise Plan",
		description:
			"For large enterprises with high traffic and performance needs",
		numberOfComments: 15,
		numberOfUpvotes: 98,
		status: "In Progress",
		category: "Mobile App",
		createdAt: new Date("2019-07-25"),
	},
	{
		title: "Reseller Hosting",
		description:
			"Host and manage multiple websites with your own control panel",
		numberOfComments: 12,
		numberOfUpvotes: 125,
		status: "In Progress",
		category: "Hardware and Products",
		createdAt: new Date("2019-11-30"),
	},
];

export const completeArrayDb = [
	{
    id: 1,
    authorId: 1, // made this an id instead of a string with the name, name should come from a joined (sql) call
		title: "Pro Plan",
		description: "Designed for growing businesses and multiple websites",
		numberOfComments: 35,
		numberOfUpvotes: 112,
		status: "Complete",
		category: "Competition",
		createdAt: new Date("2021-05-15"),
		comments: [
			{
				id: 1,
				name: "John Doe",
				body: "This is the first comment.",
				replies: [
					{
						id: 101,
						name: "Jane Doe",
						body: "Reply 1 for the first comment.",
					},
					{
						id: 102,
						name: "Bob Doe",
						body: "Reply 2 for the first comment.",
					},
				],
			},
		],
	},
	{
    id: 2,
    authorId: 1, // made this an id instead of a string with the name, name should come from a joined (sql) call
		title: "Cloud Hosting",
		description:
			"Scalable cloud hosting for high availability and performance",
		numberOfComments: 12,
		numberOfUpvotes: 65,
		status: "Complete",
		category: "Perfect Server Stacks",
		createdAt: new Date("2020-06-28"),
		comments: [
			{
				id: 1,
				name: "John Doe",
				body: "This is the first comment.",
				replies: [
					{
						id: 101,
						name: "Jane Doe",
						body: "Reply 1 for the first comment.",
					},
					{
						id: 102,
						name: "Bob Doe",
						body: "Reply 2 for the first comment.",
					},
				],
			},
		],
	},
	{
    id: 3,
    authorId: 1, // made this an id instead of a string with the name, name should come from a joined (sql) call
		title: "Dedicated Servers",
		description:
			"Full dedicated server for ultimate control and performance",
		numberOfComments: 25,
		numberOfUpvotes: 102,
		status: "Complete",
		category: "Billing Features",
		createdAt: new Date("2020-07-10"),
		comments: [
			{
				id: 1,
				name: "John Doe",
				body: "This is the first comment.",
				replies: [
					{
						id: 101,
						name: "Jane Doe",
						body: "Reply 1 for the first comment.",
					},
					{
						id: 102,
						name: "Bob Doe",
						body: "Reply 2 for the first comment.",
					},
				],
			},
			{
				id: 2,
				name: "Jane Smith",
				body: "This is the second comment.",
				replies: [
					{
						id: 201,
						name: "John Smith",
						body: "Reply 1 for the second comment.",
					},
				],
			},
			{
				id: 3,
				name: "Bob Johnson",
				body: "This is the third comment.",
				replies: [],
			},
		],
	},
];
