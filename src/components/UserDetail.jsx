import userProfile from '../assets/profile.avif'
import CourseBoxLearn from './CourseBoxLearn';
export default function UserDetail() {
    const bio = 'I am a Front End developer that can use React JS';
    return (
        <div>
            <div className="container max-w-[1280px] mx-auto mt-3" >
                <div className='w-full max-w-[1280px]' >
                    <img src="https://my.alfred.edu/zoom/_images/foster-lake.jpg" alt="Banner"  style={{height:'250px', width:'100%',objectFit:'cover'}}  />
                    <div className='flex flex-row ' >
                        <div className='relative rounded-full left-[100px] top-[-50px] w-[160px] h-[160px] flex items-center justify-center bg-amber-400'  >
                            <img className='rounded-full' style={{width:'150px'}} src={userProfile} alt="Profile" />
                        </div>
                        <div className='pt-5 pl-30'>
                            <span className='font-bold text-2xl' >Choun Rothanak</span><br />
                            <span className='text-gray-700' >Student</span>
                        </div>
                    </div>
                </div>
                <div className='container flex flex-row  gap-x-2'>
                    <div className='ml-[100px] mt-[-20px]'>
                        <UsrInfo 
                            icon_img={'pi pi-envelope'} 
                            usr_title={'Email'} 
                            usr_content={'chengchanjor@gmail.com'} 
                        />
                        <UsrInfo 
                            icon_img={'pi pi-phone'} 
                            usr_title={'Phone'} 
                            usr_content={'012345678'} 
                        />
                        <UsrInfo 
                            icon_img={'pi pi-map-marker'} 
                            usr_title={'Home'} 
                            usr_content={'Home# 1024/N, Road# 17/A, VengSreng, Dhaka-1207, Cambodia'} 
                        />
                        <div className='w-[400px] mt-2   ' >
                        <AboutMe bio={bio} name={'Choun Rothanak'} dob={'2000-March-13'}  province={'Kratie'} educated={'University'} />
                        </div>
                    </div>
                    <div className='activity w-full mt-[-20px] '>
                        <h2  className='text-xl font-bold' > Lastest Activity </h2>
                        <div className='bg-gray-300 w-full h-[2px]'></div>
                        <div className='p-2'>
                            <UserLog profile={userProfile} message={"You Have Enroll 2 couse" } time={"Just Now"} />
                            <div className='flex flex-row gap-x-5 p-2'>
                                <CourseBoxLearn courseTitle={"English Intermediate"} courseHook={"Learn english in detail and fun"} progress={0} />
                                <CourseBoxLearn courseTitle={"English Intermediate"} courseHook={"Learn english in detail and fun"} progress={0} />

                            </div>
                        </div>
                        <div className='bg-gray-300 w-full h-[2px] mb-1'></div>
                        <div className='p-2'>
                            <h3 className='text-xl font-bold mb-2 ' >Course Naltification</h3>
                            <div className='flex flex-col gap-4'>
                                <CourseNaltification typeInfor={"Course Information"} courseName={"English Intermediate"} message={"Please Study on the course"} time={"2025-Mar-12"} />
                                <CourseNaltification typeInfor={"Course Information"} courseName={"English Intermediate"} message={"Please Study on the course"} time={"2025-Mar-12"} />
                                <CourseNaltification typeInfor={"Course Information"} courseName={"English Intermediate"} message={"Please Study on the course"} time={"2025-Mar-12"} />
                            </div>
                        </div>  
                    </div>  
                </div>
            </div>
        </div>
    );
}

function UsrInfo({ icon_img, usr_title, usr_content }) {
    return (
        <div className="flex flex-row items-center gap-x-5 w-[320px] ">
            <i style={{fontSize:'1.4rem' ,color:'blue'} } className={icon_img}></i>
            <div className="flex flex-col">
                <p className="text-zinc-400" >{usr_title}</p>
                <p className="text-[1rem]" >{usr_content}</p>
            </div>
        </div>
    );
}
function AboutMe({bio,name,dob,province,educated}){
    return (
        <>
        <div className='flex flex-col gap-y-2' >
            <h3 className='text-black font-bold text-2xl' >About Me</h3>
            <p >{bio}</p>
            <p className='text-blue-600'>Name          : <span className='text-black' >{name}</span></p>
            <p className='text-blue-600'>Date of birth : <span className='text-black' >{dob}</span></p>
            <p className='text-blue-600'>prvince       : <span className='text-black' >{province}</span></p>
            <p className='text-blue-600'>Educated      : <span className='text-black' >{educated}</span></p>
        </div>
        <div className='flex flex-col gap-y-2' >
            <h3 className='mt-2' >Connect With Me</h3>
            <div className='flex flex-row gap-x-5 text-blue-700'  >
                <i className='pi pi-facebook hover:cursor-pointer' style={{fontSize:'2rem'}} ></i>
                <i className='pi pi-telegram  hover:cursor-pointer' style={{fontSize:'2rem'}} ></i>
                <i className='pi pi-instagram  hover:cursor-pointer' style={{fontSize:'2rem'}} ></i>
                <i className='pi pi-linkedin  hover:cursor-pointer' style={{fontSize:'2rem'}} ></i>
            </div>
        </div>
        </>
    );
}
function UserLog({profile,message,time}){
    return(
        <div className='flex flex-row gap-x-5 items-center '>
            <img className='rounded-full' src={profile} alt="usr profile" style={{width:'60px',height:'60px'}} />
            <div className='flex flex-col gap-x-5' >
                <span>{message}</span>
                <span className='text-gray-500' >{time}</span>
            </div>
        </div>
    );
}
function CourseNaltification({typeInfor,courseName,message,time}){
    return(
        <div class="bg-white p-2 rounded-lg shadow-md w-full border-l-4 border-blue-500">
            <div class="flex items-center text-blue-500 font-bold text-sm mb-1">
                <span class="w-2 h-2 bg-blue-500 rounded-full mr-2"></span> {typeInfor}
            </div>
            <div class="text-lg font-semibold text-gray-800 mb-1">{courseName}</div>
            <div class="text-sm text-gray-600 mb-1">{message}</div>
            <div class="text-xs text-gray-500 flex items-center">{time}</div>
        </div>
    );
}
