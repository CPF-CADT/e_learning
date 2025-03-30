import Blog from './components/Blog';
import Nav from './components/Nav';
import AboutUs from './components/AboutUs';
import MyCourse from './components/MyCourse';
import userProfile from './assets/profile.avif'; 
import VideoPlayer from './components/VideoPlayer'
import CourseView from './components/CourseView';
import { PrimeReactProvider } from 'primereact/api';
import "primereact/resources/themes/lara-light-blue/theme.css"; // Theme
import "primereact/resources/primereact.min.css"; // Core styles
import "primeicons/primeicons.css"; // Icons
import "primeflex/primeflex.css"; // Utility classes
import CourseBoxLearn from './components/CourseBoxLearn';
import { ProgressBar } from 'primereact/progressbar'; 
import DropDown from './components/DropDown';
import './index.css';
import "primereact/resources/themes/lara-light-blue/theme.css"; 
import "primereact/resources/primereact.min.css"; 
import "primeicons/primeicons.css"; 
import "primeflex/primeflex.css"; 
import {Route,Routes} from 'react-router-dom'

export default function App() {
  let userName = "Cheng Nhajor"
  return (
    <PrimeReactProvider>
      <>  
    
        <Routes>
          <Route path='/' element={<Nav UserName={userName} ProfilePath={userProfile} isLogin={true} />} />
          <Route path='/mycourse' element={<MyCourse usrname={userName} usrProfilePath={userProfile}  />} />
          <Route path='/about-us' element ={<AboutUs/>} />
          <Route path='/Blog' element={<Blog />}  />
          
          <Route path='/mycourse/video' element={<VideoPlayer videoUrl={'https://youtu.be/CTHhlx25X-U?si=cwpIlQ8OII0qoGQn'}  />} />
          <Route path='/mycourse/selected' element={<CourseView usrname={userName} usrProfilePath={userProfile} />} />
        </Routes>
      </>
    </PrimeReactProvider>
    
    
  );
}
