import { Textfield, Button } from '../../components';
import { useNavigate } from "react-router-dom";
import './home.css';


function HomeName() {
  const nav = useNavigate();
  return (
    <div className="home">
      <h1>Game Code</h1>
      <Textfield placeholder="Code"/>
      <div id="home_buttons">
        <Button text="BACK" color='red' action={()=>{nav('/')}}></Button>
        <Button text="JOIN" color='green' action={()=>{nav('/poker-game')}}></Button>
      </div>
    </div>
  );
}

export default HomeName;