const courseResource = [
    {
        title: 'English Grammar - Level 1',
        items: [
            {
                label: 'Module 1: Present Simple',
                icon: 'pi pi-book',
                completed: true,
                items: [
                    { label: 'Document', icon: 'pi pi-file', completed: true, link: '/document/english-1' },
                    { label: 'Video', icon: 'pi pi-video', completed: false, link: '/video/english-1' },
                    { label: 'Quiz', icon: 'pi pi-question-circle', completed: true, score: 85, link: '/quiz/english-1' }
                ]
            },
            {
                label: 'Module 2: Present Perfect',
                icon: 'pi pi-desktop',
                completed: false,
                items: [
                    { label: 'Document', icon: 'pi pi-file', completed: false, link: '/document/english-2' },
                    { label: 'Video', icon: 'pi pi-video', completed: false, link: '/video/english-2' },
                    { label: 'Quiz', icon: 'pi pi-question-circle', completed: false, link: '/quiz/english-2' }
                ]
            }
        ]
    },
    {
        title: 'React.js Mastery',
        items: [
            {
                label: 'Module 1: Introduction to React',
                icon: 'pi pi-book',
                completed: true,
                items: [
                    { label: 'Document', icon: 'pi pi-file', completed: true, link: '/document/react-1' },
                    { label: 'Video', icon: 'pi pi-video', completed: false, link: '/video/react-1' },
                    { label: 'Quiz', icon: 'pi pi-question-circle', completed: true, score: 90, link: '/quiz/react-1' }
                ]
            },
            {
                label: 'Module 2: Components & Props',
                icon: 'pi pi-desktop',
                completed: false,
                items: [
                    { label: 'Document', icon: 'pi pi-file', completed: false, link: '/document/react-2' },
                    { label: 'Video', icon: 'pi pi-video', completed: false, link: '/video/react-2' },
                    { label: 'Quiz', icon: 'pi pi-question-circle', completed: false, link: '/quiz/react-2' }
                ]
            }
        ]
    }
];

export default courseResource;
