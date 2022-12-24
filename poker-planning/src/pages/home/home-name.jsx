import { Textfield, Button } from '../../components';
import './home.css';


function HomeName() {
  return (
    <div className="home">
      <h1>Name</h1>
      <Textfield placeholder="Name"/>
      <div id="home_buttons">
        <Button text="JOIN" gradient={{dark: "#219653", light: "#007B35"}}></Button>
      </div>
    </div>
  );
}

export default HomeName;