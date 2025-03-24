import Nav from './components/Nav';
import AboutUs from './components/AboutUs';
import MyCourse from './components/MyCourse';
import userProfile from './assets/profile.avif'; // Fixed the typo
import { PrimeReactProvider } from 'primereact/api';
import "primereact/resources/themes/lara-light-blue/theme.css"; // Theme
import "primereact/resources/primereact.min.css"; // Core styles
import "primeicons/primeicons.css"; // Icons
import "primeflex/primeflex.css"; // Utility classes
import CourseBoxLearn from './components/CourseBoxLearn';
import { ProgressBar } from 'primereact/progressbar'; 
import DropDown from './components/DropDown';
import {Route,Routes} from 'react-router-dom'
export default function App() {
  let userName = "Cheng Nhajor"
  return (
    <PrimeReactProvider>
      <>  
        <Routes>
          <Route path='/' element={<Nav UserName={userName} ProfilePath={userProfile} isLogin={true} />} />
          <Route path='/mycourse' element={<MyCourse usrname={userName} usrProfilePath={userProfile}  />} />
          <Route path='/AboutUs' element ={<AboutUs/>}/>
        </Routes>
      </>
    </PrimeReactProvider>
    
    
  );
}
