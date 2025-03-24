import Nav from './components/Nav';
import AboutUs from './components/AboutUs';
import MyCourse from './components/MyCourse';
import userProfile from './assets/profile.avif'; 
import VideoPlayer from './components/VideoPlayer'
import CourseView from './components/CourseView';
import { PrimeReactProvider } from 'primereact/api';
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
          <Route path='/AboutUs' element ={<AboutUs/>}/>
          <Route path='/mycourse/video' element={<VideoPlayer videoUrl={'https://youtu.be/CTHhlx25X-U?si=cwpIlQ8OII0qoGQn'}  />} />
          <Route path='/mycourse/selected' element={<CourseView usrname={userName} usrProfilePath={userProfile} />} />
        </Routes>
      </>
    </PrimeReactProvider>
    
    
  );
}
