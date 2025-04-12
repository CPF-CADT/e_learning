import React from 'react'; 
import CustomPanelMenu from './PanelMenuList';

export default function ListLearnResource({items}) {
    return (
        <div className="card flex justify-content-center">
            <CustomPanelMenu items={items} className="w-full md:w-20rem"  />
        </div>
    );
}
