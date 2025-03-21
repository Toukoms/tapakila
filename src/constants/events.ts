export const events: IEvent[] = [
  {
    id: "1",
    name: "Music Festival",
    description:
      "Experience a weekend of live music, food, and fun with top artists from around the world.",
    imageUrl: "https://picsum.photos/200?random=1",
    startDateTime: "2025-07-18T12:00:00",
    endDateTime: "2025-07-20T23:00:00",
    location: "Central Park, New York",
    organizer: "Music World",
    tickets: [
      {
        type: "standard",
        price: 100,
        available: 100,
      },
      {
        type: "vip",
        price: 200,
        available: 20,
      },
    ],
    categories: ["Music", "Festival"],
  },
  {
    id: "2",
    name: "Food Expo",
    description:
      "A culinary adventure featuring the best chefs and restaurants in the region, with cooking demos and tastings.",
    imageUrl: "https://picsum.photos/200?random=2",
    startDateTime: "2025-08-15T10:00:00",
    endDateTime: "2025-08-17T18:00:00",
    location: "San Francisco Convention Center",
    organizer: "Foodie Events",
    tickets: [
      {
        type: "standard",
        price: 50,
        available: 50,
      },
    ],
    categories: ["Food", "Expo"],
  },
  {
    id: "3",
    name: "Film Festival",
    description:
      "Join us for a week of movie premieres, panel discussions, and special events celebrating the art of cinema.",
    imageUrl: "https://picsum.photos/200?random=3",
    startDateTime: "2025-09-10T09:00:00",
    endDateTime: "2025-09-17T23:00:00",
    location: "Hollywood, CA",
    organizer: "Cinephile Society",
    tickets: [
      {
        type: "standard",
        price: 75,
        available: 30,
      },
      {
        type: "vip",
        price: 150,
        available: 10,
      },
    ],
    categories: ["Film", "Festival"],
  },
  {
    id: "4",
    name: "Tech Conference",
    description:
      "Discover the latest trends in technology and connect with industry experts and startups.",
    imageUrl: "https://picsum.photos/200?random=4",
    startDateTime: "2025-10-05T08:00:00",
    endDateTime: "2025-10-07T18:00:00",
    location: "Moscone Center, San Francisco",
    organizer: "Tech Connect",
    tickets: [
      {
        type: "standard",
        price: 150,
        available: 100,
      },
      {
        type: "vip",
        price: 300,
        available: 30,
      },
    ],
    categories: ["Technology", "Conference"],
  },
  {
    id: "5",
    name: "Art Exhibition",
    description:
      "An immersive showcase of contemporary art, featuring paintings, sculptures, and installations.",
    imageUrl: "https://picsum.photos/200?random=5",
    startDateTime: "2025-11-02T10:00:00",
    endDateTime: "2025-11-05T18:00:00",
    location: "Metropolitan Museum of Art",
    organizer: "Art World",
    tickets: [
      {
        type: "standard",
        price: 25,
        available: 50,
      },
    ],
    categories: ["Art", "Exhibition"],
  },
  {
    id: "6",
    name: "Sports Tournament",
    description:
      "Cheer on your favorite teams and athletes in a thrilling competition of skill and teamwork.",
    imageUrl: "https://picsum.photos/200?random=6",
    startDateTime: "2025-12-10T13:00:00",
    endDateTime: "2025-12-12T18:00:00",
    location: "Madison Square Garden",
    organizer: "Sports Unlimited",
    tickets: [
      {
        type: "standard",
        price: 75,
        available: 20,
      },
    ],
    categories: ["Sports", "Tournament"],
  },
  {
    id: "7",
    name: "Youth Talent Show",
    description:
      "A stage for young performers to showcase their unique talents—whether it's singing, dancing, or magic.",
    imageUrl: "https://picsum.photos/200?random=7",
    startDateTime: "2025-09-25T18:00:00",
    endDateTime: "2025-09-25T21:00:00",
    location: "Miami Youth Auditorium",
    organizer: "Future Stars Productions",
    tickets: [
      {
        type: "standard",
        price: 10,
        available: 5,
      },
    ],
    categories: ["Talent", "Show", "Youth"],
  },
  {
    id: "8",
    name: "Youth Fashion Show",
    description:
      "A celebration of youthful fashion where young designers and models showcase their latest trends.",
    imageUrl: "https://picsum.photos/200?random=8",
    startDateTime: "2025-10-12T16:00:00",
    endDateTime: "2025-10-12T19:00:00",
    location: "Los Angeles Fashion District",
    organizer: "Teen Couture",
    tickets: [
      {
        type: "standard",
        price: 20,
        available: 12,
      },
    ],
    categories: ["Fashion", "Show", "Youth"],
  },
  {
    id: "10",
    name: "Youth Tech Expo",
    description:
      "Explore cutting-edge tech innovations created by young minds, from robotics to app development.",
    imageUrl: "https://picsum.photos/200?random=10",
    startDateTime: "2025-11-20T09:00:00",
    endDateTime: "2025-11-20T17:00:00",
    location: "Seattle, WA",
    organizer: "Future Innovators",
    tickets: [
      {
        type: "standard",
        price: 15,
        available: 10,
      },
    ],
    categories: ["Technology", "Expo", "Youth"],
  },
];
