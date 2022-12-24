import { Textfield, Button } from '../../components';
import { useNavigate } from "react-router-dom";
import './home.css';


function Home() {
  const nav = useNavigate();
  return (
    <div className="home">
      <h1>Room Name/Code</h1>
      <Textfield placeholder="Name/Code"/>
      <div id="home_buttons">
        <Button text="CREATE" gradient={{dark: "#213B96", light: "#001B7B"}}></Button>
        <Button text="JOIN" gradient={{dark: "#219653", light: "#007B35"}} action={()=>{nav('/home-name')}}></Button>
      </div>
    </div>
  );
}

export default Home;