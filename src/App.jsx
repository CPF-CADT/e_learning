import Nav from './components/Nav'
import userProdile from './assets/profile.avif'

export default function App() {
  return (
    <>
      <Nav UserName={"Jonh Son"} ProfilePath={userProdile} isLogin={false} />
    </>
  );
}
