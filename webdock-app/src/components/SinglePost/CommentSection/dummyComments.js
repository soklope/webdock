 const dummyComments = [
    {
        id: 1,
        name: "John Doe",
        body: "This is the first comment.",
        replies: [
          { id: 101, name: "Jane Doe", body: "Reply 1 for the first comment." },
          { id: 102, name: "Bob Doe", body: "Reply 2 for the first comment." },
        ],
      },
      {
        id: 2,
        name: "Jane Smith",
        body: "This is the second comment.",
        replies: [
          { id: 201, name: "John Smith", body: "Reply 1 for the second comment." },
        ],
      },
      {
        id: 3,
        name: "Bob Johnson",
        body: "This is the third comment.",
        replies: [],
      },
  ];

  export default dummyComments;