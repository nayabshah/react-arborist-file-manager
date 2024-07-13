import { FaReact } from "react-icons/fa";
import Arborist from "./components/Arborist";

const App = () => {
  return (
    <div className="app-container">
      <div className="sidebar">
        <div className="heading-title">
          <FaReact color="#00d8ff" size="32" />
          <span>React-arborist</span>
        </div>
        <Arborist />
      </div>
      <div className="content">
        {/* <ul>
      {content.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul> */}
      </div>
    </div>
  );
};

export default App;
