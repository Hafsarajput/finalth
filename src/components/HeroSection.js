import Badge from 'react-bootstrap/Badge';
import Img3 from '../assets/imgs/Group 169.png';
import Img4 from '../assets/imgs/Mockup.png';
function BasicExample() {
    const imageContainerStyle = {
        display: 'flex',
        justifyContent: 'center', // Horizontally centers items
        paddingTop:'20px'
      };
  return (
    <div>
      <h1 style={{textAlign:'center' , paddingTop:'20px'}}>
      Web3Makr Redefining<br></br> How You Create
      </h1>
      
      <p style={{textAlign:'center' , paddingTop:'20px'}}>
      Unlock the blockchain potential to create<br></br> Web3 Applications
      </p>
      <div>
      <div style={imageContainerStyle}>
        <img src={Img3} alt="Your Image" />
      </div>
    </div>
    <div style={imageContainerStyle}>
        <img src={Img4} alt="Your Image" width={'700px'} height={'500px'} />
      </div>
    
    </div>
  );
}

export default BasicExample;