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
import UserDetail from './components/UserDetail'
import Quizz from './components/Quizz'
import { Routes,Route } from 'react-router-dom';
// import ChartData from './components/ChartData'; 
import QuizzREsult from './components/QuizzResult';  
import CourseDetail from './components/CourseDetail';
export default function App() { 
  let userName = "Cheng Nhajor"
  return (
    <PrimeReactProvider>
      <>  
        <Routes>
          <Route path='/' element={<Nav UserName={userName} ProfilePath={userProfile} isLogin={true} />} />
          <Route path='/mycourse' element={<MyCourse usrname={userName} usrProfilePath={userProfile}  />} />
          <Route path='/about-us' element ={<AboutUs/>}/>
          <Route path='/result' element ={<QuizzREsult usrname={'Jonh Son'} result={9} maxQa={10} duration={'30min'} />}/>
          <Route path='/mycourse/video' element={<VideoPlayer videoUrl={'https://youtu.be/CTHhlx25X-U?si=cwpIlQ8OII0qoGQn'}  />} />
          <Route path='/mycourse/selected' element={<CourseView usrname={userName} usrProfilePath={userProfile} />} />
          <Route path='/mycourse/selected/quizz' element={<Quizz usrname={userName} usrProfilePath={userProfile} />} />
          <Route path='/user-detail' element = {<UserDetail />} />
          <Route path='/course-detail' element={<CourseDetail userName={userName} userProfile={userProfile} />} />
        </Routes>
      </>
    </PrimeReactProvider>
  );
}
