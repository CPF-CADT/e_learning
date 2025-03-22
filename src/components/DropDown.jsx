import { Dropdown } from 'primereact/dropdown';
export default function DropDown({ selectItem, setSelectItem,options,label }) {

    return (
        <div className="card">
            <Dropdown 
                value={selectItem} 
                onChange={(e) => setSelectItem(e.value)} 
                options={options} 
                optionLabel="name" 
                placeholder={label}
                className="w-full md:w-14rem" 
            />
        </div>
    );
}
    