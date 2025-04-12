const dummyProfiles = [
  "https://i.pravatar.cc/35?img=1",
  "https://i.pravatar.cc/35?img=2",
  "https://i.pravatar.cc/35?img=3",
  "https://i.pravatar.cc/35?img=4",
  "https://i.pravatar.cc/35?img=5",
  "https://i.pravatar.cc/35?img=6",
  "https://i.pravatar.cc/35?img=7",
  "https://i.pravatar.cc/35?img=8",
  "https://i.pravatar.cc/35?img=9",
  "https://i.pravatar.cc/35?img=10",
  "https://i.pravatar.cc/35?img=11",
  "https://i.pravatar.cc/35?img=12",
  "https://i.pravatar.cc/35?img=13",
  "https://i.pravatar.cc/35?img=14",
  "https://i.pravatar.cc/35?img=15",
  "https://i.pravatar.cc/35?img=16",
  "https://i.pravatar.cc/35?img=17",
  "https://i.pravatar.cc/35?img=18",
  "https://i.pravatar.cc/35?img=19",
  "https://i.pravatar.cc/35?img=20",
  "https://i.pravatar.cc/35?img=21",
  "https://i.pravatar.cc/35?img=22",
  "https://i.pravatar.cc/35?img=23",
  "https://i.pravatar.cc/35?img=24",
];

export const courseDetail = [
  {
    courseTitle: "English Grammar - Level 1",
    courseDescription: "Learn basic sentence structure, nouns, and verbs for beginner English learners.",
    courseImage: "https://i.pinimg.com/736x/8a/98/de/8a98de530520a6cc9251ba77234832ec.jpg",
    teacherProfilePath: dummyProfiles[0],
    courseDuration: "3 Months",
    category: "English",
    price: 60,
    discountPercent: 10,
    star: 4,
    studentCount: 120000,
    bestSeller: true,
    createdBy: "Linda Mao",
    lastUpdate: "2023-Jan-15",
    feedbackList: [
      {
        image: dummyProfiles[0],
        username: "Sok Dara",
        star: 5,
        date: "2023-Mar-12",
        description: "This course helped me finally understand React hooks and real-world projects. Highly recommended!"
      },
      {
        image: dummyProfiles[1],
        username: "Keo Vicheka",
        star: 4,
        date: "2023-Apr-05",
        description: "Great course content, but I wish there were more quizzes to test my knowledge."
      }
    ]
  },
  {
    courseTitle: "ICT Basics - Level 1",
    courseDescription: "Understand computer components, operating systems, and basic troubleshooting.",
    courseImage: "https://i.pinimg.com/736x/87/4a/33/874a334b9ea92a9bc8264deddd253446.jpg",
    teacherProfilePath: dummyProfiles[1],
    courseDuration: "3 Months",
    category: "ICT",
    price: 70,
    discountPercent: 5,
    star: 4,
    studentCount: 95000,
    bestSeller: false,
    createdBy: "Sok Rithy",
    lastUpdate: "2023-Feb-10",
    feedbackList: [
      {
        image: dummyProfiles[1],
        username: "Chan Rotha",
        star: 5,
        date: "2023-Feb-20",
        description: "The Microsoft Office course was clear and beginner-friendly. Learned a lot in a short time!"
      }
    ]
  },
  {
    courseTitle: "English Communication - Level 2",
    courseDescription: "Enhance your speaking and listening skills in everyday situations.",
    courseImage: "https://i.pinimg.com/736x/9e/c7/50/9ec750b83f6a171f956d0f0d2f37557f.jpg",
    teacherProfilePath: dummyProfiles[2],
    courseDuration: "4 Months",
    category: "English",
    price: 75,
    discountPercent: 15,
    star: 5,
    studentCount: 180000,
    bestSeller: true,
    createdBy: "Dara Seng",
    lastUpdate: "2023-Mar-20",
    feedbackList: [
      {
        image: dummyProfiles[2],
        username: "Panha Lim",
        star: 4,
        date: "2023-Jan-18",
        description: "Loved the Business English course. It helped me with my job interviews!"
      },
      {
        image: dummyProfiles[3],
        username: "Thyda Kim",
        star: 5,
        date: "2023-Apr-01",
        description: "One of the best React courses I’ve taken. Practical and straight to the point!"
      }
    ]
  },
  {
    courseTitle: "Microsoft Office Mastery - Level 2",
    courseDescription: "Become confident with Word, Excel, and PowerPoint.",
    courseImage: "https://i.pinimg.com/736x/a2/61/74/a261746258bdd5cb912b0780f0008394.jpg",
    teacherProfilePath: dummyProfiles[3],
    courseDuration: "4 Months",
    category: "ICT",
    price: 85,
    discountPercent: 10,
    star: 4,
    studentCount: 110000,
    bestSeller: true,
    createdBy: "Vannak Kim",
    lastUpdate: "2023-Apr-18",
    feedbackList: [
      {
        image: dummyProfiles[0],
        username: "Sok Dara",
        star: 5,
        date: "2023-Mar-12",
        description: "This course helped me finally understand React hooks and real-world projects. Highly recommended!"
      },
      {
        image: dummyProfiles[1],
        username: "Keo Vicheka",
        star: 4,
        date: "2023-Apr-05",
        description: "Great course content, but I wish there were more quizzes to test my knowledge."
      }
    ]
  },
  {
    courseTitle: "English for Academic Purposes - Level 3",
    courseDescription: "Write essays, reports, and understand academic texts effectively.",
    courseImage: "https://i.pinimg.com/736x/c2/00/ff/c200ffcb629776136fef63dbe8905e5a.jpg",
    teacherProfilePath: dummyProfiles[4],
    courseDuration: "5 Months",
    category: "English",
    price: 95,
    discountPercent: 20,
    star: 4,
    studentCount: 90000,
    bestSeller: false,
    createdBy: "Chanra Pich",
    lastUpdate: "2023-May-10",
    feedbackList: [
      {
        image: dummyProfiles[1],
        username: "Chan Rotha",
        star: 5,
        date: "2023-Feb-20",
        description: "The Microsoft Office course was clear and beginner-friendly. Learned a lot in a short time!"
      }
    ]
  },
  {
    courseTitle: "Advanced Web Development with React",
    courseDescription: "Master React and build dynamic, responsive web apps.",
    courseImage: "https://i.pinimg.com/736x/30/4e/c5/304ec5cda1d35cf1acff9e9d8771b140.jpg",
    teacherProfilePath: dummyProfiles[5],
    courseDuration: "6 Months",
    category: "Web Development",
    price: 120,
    discountPercent: 25,
    star: 5,
    studentCount: 150000,
    bestSeller: true,
    createdBy: "Vannak Kim",
    lastUpdate: "2023-Apr-28",
    feedbackList: [
      {
        image: dummyProfiles[6],
        username: "Sok Dara",
        star: 5,
        date: "2023-Apr-20",
        description: "Best course on React! I loved the hands-on projects."
      },
      {
        image: dummyProfiles[7],
        username: "Thyda Kim",
        star: 5,
        date: "2023-May-05",
        description: "Fantastic! This course was clear and gave me all the tools I needed to build my own apps."
      }
    ]
  }
];
