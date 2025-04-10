import Blog from './components/Blog';
import AboutUs from './components/AboutUs';
import userProfile from './assets/profile.avif'; 
import CourseView from './components/CourseView';
import { PrimeReactProvider } from 'primereact/api';
import "primereact/resources/themes/lara-light-blue/theme.css"; 
import "primereact/resources/primereact.min.css"; 
import "primeicons/primeicons.css"; 
import UserDetail from './components/UserDetail'
import Quizz from './components/Quizz'
import { Routes,Route } from 'react-router-dom';
// import ChartData from './components/ChartData'; 
import Home from './components/Home';
import QuizzREsult from './components/QuizzResult';  
import CourseDetail from './components/CourseDetail';
import MyCourse from './components/MyCourse';
import CourseClick from './components/CourseClick';
export default function App() { 
  let userName = "Cheng Nhajor"
  return (
    <PrimeReactProvider>
      <>  
        <Routes>
          <Route path='/' element={<Home UserName={userName} ProfilePath={userProfile} isLogin={true} />} />
          <Route path='/about-us' element ={<AboutUs/>}/>
          <Route path='/result' element ={<QuizzREsult usrname={'Jonh Son'} result={9} maxQa={10} duration={'30min'} />}/>
          <Route path='/Blog' element={<Blog />}  />
          <Route path='/mycourse' element={<MyCourse usrname={'Panha'} usrProfilePath={userProfile}/>} />
          <Route path='/mycourse/selected' element={<CourseClick />} />          
          <Route path='/mycourse/selected/video' element={<CourseView usrname={userName} usrProfilePath={userProfile} />} />
          <Route path='/mycourse/selected/quizz' element={<Quizz usrname={userName} usrProfilePath={userProfile} />} />
          <Route path='/user-detail' element = {<UserDetail />} />
          <Route path='/course-detail' element={<CourseDetail userName={userName} userProfile={userProfile} />} />
        </Routes>
      </>
    </PrimeReactProvider>
  );
}
