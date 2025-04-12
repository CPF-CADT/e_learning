// import Blog from './components/Blog';
import AboutUs from './components/AboutUs';
import userProfile from './assets/profile.avif'; 
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
import Course from './components/Course';
import CourseClickRouter from './components/CourseClickRouter';
import Nav from './components/Nav';
import myCart from './data/myCart'
import ShoppingCart from './components/ShoppingCart';
import { useState,useEffect } from 'react';
import Login from './components/Login';
import SignUp from './components/Signup';
import CheckOut from './components/CheckOut';
import PaymentSuccess from './components/PaymentSuccess';
import courses from './data/courseLeened'
import AuthWelcome from './components/AuthWelcome';
import CourseVideoRouter from './components/CourseVideoRouter';
import CourseQuizzRouter from './components/CourseQuizzRouter';
export default function App() { 
  let userName = "Cheng Nhajor"
  const[numCart,setNumCart] = useState(myCart.length);
  const [cart, setCart] = useState(myCart);
  const [myCourse,setMyCourse] = useState(courses);
  const [isLogin, setIsLogin] = useState(true); 
  const [showPopup, setShowPopup] = useState(false);
  useEffect(() => {
    if (!isLogin) {
      const timer = setTimeout(() => {
        setShowPopup(true);
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, [isLogin]);
  useEffect(() => {
    if (!isLogin) {
      const timer = setTimeout(() => {
        setShowPopup(false);
      }, 10000);

      return () => clearTimeout(timer);
    }
  }, [isLogin]);
  return (
    <PrimeReactProvider>
      <>  
        <Nav UserName={userName} ProfilePath={userProfile} isLogin={isLogin} myCart={cart} />
        {(showPopup)&&<AuthWelcome />}
        <Routes>
          {/* <Route path='/auth' element={} /> */}
          <Route path='/signup' element={<SignUp />} />
          <Route path='/login' element={<Login />} />
          <Route path='/' element={<Home />} />
           <Route path="/course" element={<Course setCart={setCart} />} />
          <Route path='/about-us' element ={<AboutUs/>}/>
          <Route path='/result' element ={<QuizzREsult usrname={'Jonh Son'} result={9} maxQa={10} duration={'30min'} />}/>
          {/* <Route path='/blog' element={<Blog />}  /> */}
          <Route path='/success' element={<PaymentSuccess />} />
          <Route path='/cart' element={< ShoppingCart cart={cart} setCart={setCart} setNumCart={setNumCart} />} />
          <Route path='/checkout' element={<CheckOut cart={cart} setCart={setCart} setMyCourse={setMyCourse} />} />
          <Route path='/mycourse' element={<MyCourse courseData={myCourse}/>} />
          <Route path="/mycourse/:courseSelect" element={<CourseClickRouterWrapper />} /> 
          <Route path="/video/:courseId" element={<CourseVideoRouter />} />
          <Route path="/quiz/:courseId" element={<CourseQuizzRouter />} />
          <Route path='/mycourse/selected/quizz' element={<Quizz usrname={userName} usrProfilePath={userProfile} />} />
          <Route path='/user-detail' element = {<UserDetail myCourse={myCourse} />} />
          <Route path='/course-de tail' element={<CourseDetail userName={userName} userProfile={userProfile} />} />
        </Routes>
      </>
    </PrimeReactProvider>
  );
  function CourseClickRouterWrapper() {
    return <CourseClickRouter myCourse={myCourse} />;
  }
}
