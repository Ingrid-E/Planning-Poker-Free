import { Textfield, Button } from '../../components';
import { useNavigate } from "react-router-dom";
import './home.css';


function Home() {
  const nav = useNavigate();
  return (
    <div className="home">
      <h1 className='title'>Poker Planning</h1>
      <Textfield placeholder="Player name"/>
      <div id="home_buttons">
        <Button text="CREATE" color='blue'></Button>
        <Button text="JOIN" color='green' action={()=>{nav('/home-name')}}></Button>
      </div>
    </div>
  );
}

export default Home;