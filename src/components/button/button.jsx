import './button.css';


function Button({text, color, action}) {

  let gradients  = {
    red: {dark: "#7B0000", light: "#962121"},
    green: {dark: "#219653", light: "#007B35"},
    blue: {dark: "#213B96", light: "#001B7B"}
  }

  return (
      <button 
      id='button'
      style={{background:`radial-gradient(50% 50% at 50% 50%, ${gradients[color].dark} 0%, ${gradients[color].light} 100%)`}}
      onClick={action}>
        {text}
        </button>
  );
}

export default Button;