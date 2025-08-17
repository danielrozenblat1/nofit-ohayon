import styles from './CustomButton.module.css';

const CustomButton = (props) => {

  const handleClick = () => {


    if(props.href){

window.open(props.href);
return ;

    }
    const phoneNumber = "+972507690070";
    // Set the message content
    const message =props.message || "היי נופית, אשמח לשמוע עוד על..";

    // Encode the message for the URL
    const encodedMessage = encodeURIComponent(message);
    // Construct the WhatsApp message URL with phone number and message
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
  
    // Open the URL in a new tab
    window.open(whatsappURL, "_blank");

  };
  return (
    <div className={styles.button} onClick={handleClick}>
{props.text}
      <span className={styles['button-border']}></span>
    </div>
  );
};

export default CustomButton;