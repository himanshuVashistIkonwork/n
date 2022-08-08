import { Link,Outlet } from "react-router-dom";

export default function NavBar() {
  return (
    <div style={{display:'flex'}}>
      <div
        style={{
          display: "flex",
          padding:'2rem',
          background:'rgba(0,0,0,0.05)',
          textAlign:'center',
          width: "50%",
          justifyContent: "space-around",
          height:'100vh'
        }}
      >
        <Link to="/">dashboard</Link>
        <div>
          <Link to="/school">school</Link>
          <div style={{marginTop:'1rem'}}>
            <Link to="/school/class">class</Link>
          </div>
        </div>
      </div>
      <div style={{padding:'2rem',textAlign:'center'}}>
        <Outlet/>
      </div>
    </div>
  );
}
