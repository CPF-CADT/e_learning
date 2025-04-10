import React from 'react'; 
import CustomPanelMenu from './PanelMenuList';

export default function ListLearnResource() {
    const items = [
        {
            label: 'Module 1: Introduction to ICT',
            icon: 'pi pi-book',
            completed: true,
            items: [
                { label: 'Document', icon: 'pi pi-file', completed: true, route: '/mycourse/selected/module1-document' },
                { label: 'Video', icon: 'pi pi-video', completed: false, route: '/mycourse/selected/module1-video' },
                { label: 'Quiz', icon: 'pi pi-question-circle', completed: true, route: '/mycourse/selected/module1-quiz', score: 85 }
            ]
        },
        {
            label: 'Module 2: Basic Computer Skills',
            icon: 'pi pi-desktop',
            completed: false,
            items: [
                { label: 'Document', icon: 'pi pi-file', completed: false, route: '/mycourse/selected/module2-document' },
                { label: 'Video', icon: 'pi pi-video', completed: false, route: '/mycourse/selected/module2-video' },
                { label: 'Quiz', icon: 'pi pi-question-circle', completed: false, route: '/mycourse/selected/module2-quiz' }
            ]
        }
    ];

    return (
        <div className="card flex justify-content-center">
            <CustomPanelMenu items={items} className="w-full md:w-20rem"  />
        </div>
    );
}
