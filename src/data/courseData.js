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

const courseData = [
  {
    courseTitle: "English Grammar - Level 1",
    courseDescription: "Learn basic sentence structure, nouns, and verbs for beginner English learners.",
    courseImage: "https://i.pinimg.com/736x/8a/98/de/8a98de530520a6cc9251ba77234832ec.jpg",
    teacherProfilePath: dummyProfiles[0],
    courseDuration: "3 Months",
    category: "English",
    price: 60,
    discountPercent: 10,
    star: 4
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
    star: 4
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
    star: 5
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
    star: 4
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
    star: 4
  },
  {
    courseTitle: "Web Design Fundamentals - Level 3",
    courseDescription: "Learn how to design beautiful websites with HTML, CSS, and UX principles.",
    courseImage: "https://i.pinimg.com/736x/3b/28/b3/3b28b3f7b9a9f5597652239458c642c8.jpg",
    teacherProfilePath: dummyProfiles[5],
    courseDuration: "5 Months",
    category: "ICT",
    price: 100,
    discountPercent: 15,
    star: 5
  },
  {
    courseTitle: "English for Business Communication - Advanced",
    courseDescription: "Master emails, meetings, presentations, and negotiations in English.",
    courseImage: "https://i.pinimg.com/736x/03/07/cf/0307cfe11f103f552c949654a54af059.jpg",
    teacherProfilePath: dummyProfiles[6],
    courseDuration: "6 Months",
    category: "English",
    price: 110,
    discountPercent: 10,
    star: 4
  },
  {
    courseTitle: "Advanced Networking and Security",
    courseDescription: "Dive into network design, security threats, and real-world implementation.",
    courseImage: "https://i.pinimg.com/736x/09/89/8b/09898b800982af4ceecb32d6f708d33a.jpg",
    teacherProfilePath: dummyProfiles[7],
    courseDuration: "6 Months",
    category: "ICT",
    price: 130,
    discountPercent: 20,
    star: 5
  },
  {
    courseTitle: "English Pronunciation and Accent Training",
    courseDescription: "Improve clarity and confidence when speaking English.",
    courseImage: "https://i.pinimg.com/736x/e7/b5/d1/e7b5d1637ec5a17121b5592574752bb7.jpg",
    teacherProfilePath: dummyProfiles[8],
    courseDuration: "2 Months",
    category: "English",
    price: 55,
    discountPercent: 5,
    star: 3
  },
  {
    courseTitle: "Database Management with MySQL",
    courseDescription: "Learn how to store, retrieve, and manage data using SQL.",
    courseImage: "https://i.pinimg.com/736x/b6/c3/ca/b6c3ca5871e64cd51e4390b5ef81af55.jpg",
    teacherProfilePath: dummyProfiles[9],
    courseDuration: "4 Months",
    category: "ICT",
    price: 95,
    discountPercent: 10,
    star: 4
  },
  {
    courseTitle: "English Vocabulary Building - Intermediate",
    courseDescription: "Expand your vocabulary with advanced words and context usage.",
    courseImage: "https://i.pinimg.com/736x/63/47/80/634780c6ddf5b8568dae1d411a6c5a9f.jpg",
    teacherProfilePath: dummyProfiles[10],
    courseDuration: "3 Months",
    category: "English",
    price: 60,
    discountPercent: 10,
    star: 4
  },
  {
    courseTitle: "Coding with Python - Level 1",
    courseDescription: "An introduction to basic programming using Python.",
    courseImage: "https://i.pinimg.com/736x/7d/e9/c9/7de9c9cea69dafc19014365c8980b448.jpg",
    teacherProfilePath: dummyProfiles[11],
    courseDuration: "3 Months",
    category: "ICT",
    price: 80,
    discountPercent: 15,
    star: 4
  },
  {
    courseTitle: "English for Travel - Beginner",
    courseDescription: "Learn essential English phrases and vocabulary for traveling abroad.",
    courseImage: "https://i.pinimg.com/736x/6e/19/55/6e19558db5bc3c6995c53e5144f1eb6d.jpg",
    teacherProfilePath: dummyProfiles[12],
    courseDuration: "2 Months",
    category: "English",
    price: 50,
    discountPercent: 5,
    star: 4
  },
  {
    courseTitle: "Introduction to Digital Marketing",
    courseDescription: "Learn the basics of digital marketing, SEO, and social media strategies.",
    courseImage: "https://i.pinimg.com/736x/6e/14/20/6e14204774e661c42cf58c5869fd87c0.jpg",
    teacherProfilePath: dummyProfiles[13],
    courseDuration: "3 Months",
    category: "Business",
    price: 85,
    discountPercent: 10,
    star: 5
  },
  {
    courseTitle: "Creative Writing - Level 1",
    courseDescription: "Develop your writing skills through creative exercises and storytelling.",
    courseImage: "https://i.pinimg.com/736x/96/57/4e/96574ecc3def11fb304a8d155d82f50d.jpg",
    teacherProfilePath: dummyProfiles[14],
    courseDuration: "3 Months",
    category: "Language",
    price: 65,
    discountPercent: 15,
    star: 4
  }
];



  export default courseData;