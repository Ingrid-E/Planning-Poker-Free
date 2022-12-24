import './button.css';


function Button({text, gradient, action}) {
  return (
      <button 
      id='button'
      style={{background:`radial-gradient(50% 50% at 50% 50%, ${gradient.dark} 0%, ${gradient.light} 100%)`}}
      onClick={action}>
        {text}
        </button>
  );
}

export default Button;