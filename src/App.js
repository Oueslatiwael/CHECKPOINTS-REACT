
import './App.css';
import logo from './imageInSrc.jpg';
import "./style.css";

function App() {
  return (
    <div>
      <div style={{border: 'solid 1px black', maxWidth: '100vw'}}>
          <h1 className="title red">Wael Oueslati</h1>
          <br />
          <img src={logo} />
          <br />
          <img src="images/imageInPublic.jpg" />
        </div>
        <video controls width={320} height={240}>
          <source src='videos/myVideo.mp4' type="video/mp4" />
        </video>
    </div>
  );
}

export default App;
