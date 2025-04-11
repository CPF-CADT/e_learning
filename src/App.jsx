// import Blog from './components/Blog';
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
import Home from './components/Home';
import QuizzREsult from './components/QuizzResult';  
import CourseDetail from './components/CourseDetail';
import MyCourse from './components/MyCourse';
import CourseClick from './components/CourseClick';
import Course from './components/Course';
import Nav from './components/Nav';
import myCart from './data/myCart'
import ShoppingCart from './components/ShoppingCart';
import Login from './components/Login';
import SignUp from './components/Signup';

export default function App() { 
  let userName = "Cheng Nhajor"
  return (
    <PrimeReactProvider>
      <>  
        <Nav UserName={userName} ProfilePath={userProfile} isLogin={true} myCart={myCart} />
        <Routes>
          <Route path='/signup' element={<SignUp />} />
          <Route path='/login' element={<Login />} />
          <Route path='/' element={<Home UserName={userName} ProfilePath={userProfile} isLogin={true} />} />
           <Route path="/course" element={<Course  />} />
          <Route path='/about-us' element ={<AboutUs/>}/>
          <Route path='/result' element ={<QuizzREsult usrname={'Jonh Son'} result={9} maxQa={10} duration={'30min'} />}/>
          {/* <Route path='/blog' element={<Blog />}  /> */}
          <Route path='/cart' element={< ShoppingCart myCart={myCart} />} />
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
