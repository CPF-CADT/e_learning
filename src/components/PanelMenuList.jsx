import React, { useState } from 'react';
import { PanelMenu } from 'primereact/panelmenu';
import { useNavigate } from 'react-router-dom'; 
import 'primeicons/primeicons.css';

export default function CustomPanelMenu({ items }) {
    const navigate = useNavigate(); // Initialize useNavigate for React Router v6
    const [model, setModel] = useState(() => {
        return items.map((item, moduleIndex) => ({
            ...item,
            template: (itemData, options) => renderTemplate(itemData, options),
            command: (e) => {
                // Prevent toggle on main item, only process if it has subitems
                if (item.items) {
                    e.originalEvent.stopPropagation(); // Prevent default action for main items
                }
            },
            items: item.items?.map((sub, itemIndex) => ({
                ...sub,
                template: (itemData, options) => renderTemplate(itemData, options),
                command: () => handleSubItemClick(moduleIndex, itemIndex, sub.route) // Pass route to handleSubItemClick
            }))
        }));
    });

    // Toggle the 'completed' state for sub items (like quizzes)
    const handleSubItemClick = (moduleIndex, itemIndex, route) => {
        const updated = [...model];
        updated[moduleIndex].items[itemIndex].completed = !updated[moduleIndex].items[itemIndex].completed; // Toggle the completion state
        setModel(updated);
        if (route) {
            navigate(route); // Redirect to the specified route using navigate (for React Router v6)
        }
    };

    const renderTemplate = (itemData, options) => (
        <div
            {...options}
            className="flex items-center justify-between px-3 py-2 cursor-pointer hover:bg-gray-100"
        >
            <div className="flex items-center gap-2">
                <i className={itemData.icon}></i>
                <span>{itemData.label}</span>
            </div>
            {itemData.completed && (
                <>
                    <i className="pi pi-check text-green-500 text-sm"></i>
                    {itemData.score !== undefined && (
                        <span className="ml-2 text-sm text-gray-500">Score: {itemData.score}%</span>
                    )}
                </>
            )}
        </div>
    );

    return (
        <div className="card w-full mx-auto shadow">
            <PanelMenu model={model} className="w-full" />
        </div>
    );
}
