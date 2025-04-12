export const quizzData = [
    {
      code: '/quizz/english-1',  // Dynamic path for the quiz
      quizz: {
        1: {
          question: "Which sentence is in the Present Simple tense?",
          options: {
            a: "She will go to school.",
            b: "She is going to school.",
            c: "She goes to school.",
            d: "She went to school."
          },
          correctAnswer: 'c'
        },
        2: {
          question: "He ___ to work by car every day.",
          options: {
            a: "go",
            b: "goes",
            c: "going",
            d: "gone"
          },
          correctAnswer: 'b'
        },
        3: {
          question: "Which of the following time expressions is common with Present Simple?",
          options: {
            a: "yesterday",
            b: "next week",
            c: "often",
            d: "right now"
          },
          correctAnswer: 'c'
        },
        4: {
          question: "Do they ___ football on weekends?",
          options: {
            a: "playing",
            b: "plays",
            c: "played",
            d: "play"
          },
          correctAnswer: 'd'
        }
      }
    },
    {
      code: '/quizz/english-2',  // Dynamic path for the second quiz
      quizz: {
        1: {
          question: "Which sentence is in Present Perfect tense?",
          options: {
            a: "She finished her dinner.",
            b: "She has finished her dinner.",
            c: "She is finishing her dinner.",
            d: "She was finishing her dinner."
          },
          correctAnswer: 'b'
        },
        2: {
          question: "We ___ seen that movie already.",
          options: {
            a: "has",
            b: "had",
            c: "have",
            d: "are"
          },
          correctAnswer: 'c'
        },
        3: {
          question: "Which of these words is often used with Present Perfect?",
          options: {
            a: "ago",
            b: "yesterday",
            c: "just",
            d: "tomorrow"
          },
          correctAnswer: 'c'
        },
        4: {
          question: "She ___ in this company for five years.",
          options: {
            a: "worked",
            b: "has worked",
            c: "is working",
            d: "works"
          },
          correctAnswer: 'b'
        }
      }
    },
    {
      code: '/quizz/react-1',  // Dynamic path for React 1 quiz
      quizz: {
        1: {
          question: "What is React?",
          options: {
            a: "A CSS framework",
            b: "A JavaScript library for building user interfaces",
            c: "A web server",
            d: "A browser extension"
          },
          correctAnswer: 'b'
        },
        2: {
          question: "What is JSX?",
          options: {
            a: "Java Syntax eXtension",
            b: "JavaScript XML",
            c: "Java Source eXchange",
            d: "JavaScript XAML"
          },
          correctAnswer: 'b'
        },
        3: {
          question: "Which method is used to render a React element?",
          options: {
            a: "React.display()",
            b: "ReactDOM.render()",
            c: "React.create()",
            d: "React.insert()"
          },
          correctAnswer: 'b'
        },
        4: {
          question: "Which hook is used to manage state in a functional component?",
          options: {
            a: "useEffect",
            b: "useState",
            c: "useRef",
            d: "useMemo"
          },
          correctAnswer: 'b'
        }
      }
    },
    {
      code: '/quizz/react-2',  // Dynamic path for React 2 quiz
      quizz: {
        1: {
          question: "What are props in React?",
          options: {
            a: "A way to manage state",
            b: "Functions to handle events",
            c: "Arguments passed to components",
            d: "Hooks for lifecycle"
          },
          correctAnswer: 'c'
        },
        2: {
          question: "Which is the correct way to define a functional component in React?",
          options: {
            a: "function MyComponent() {}",
            b: "class MyComponent extends Component {}",
            c: "var MyComponent = new Component()",
            d: "React.createComponent(MyComponent)"
          },
          correctAnswer: 'a'
        },
        3: {
          question: "How do you pass a prop named `title` with value 'Hello'?",
          options: {
            a: "<Component title='Hello' />",
            b: "<Component title: 'Hello' />",
            c: "<Component {title: 'Hello'} />",
            d: "<Component->Hello</Component>"
          },
          correctAnswer: 'a'
        },
        4: {
          question: "Props in React are:",
          options: {
            a: "Mutable",
            b: "Read-only",
            c: "Global variables",
            d: "Used to handle events"
          },
          correctAnswer: 'b'
        }
      }
    }
  ];
  