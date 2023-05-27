import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container shadow p-3 mb-5 bg-white rounded">
        <Weather defaultCity="Novi sad" />
        <footer>
          This project was coded by{" "}
          <a
            href="https://www.linkedin.com/in/andrea-jovicic-880b3b24a/"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            Andrea Jovicic
          </a>{" "}
          it is{" "}
          <a
            href="https://github.com/ajovicic019/react-homework-weather-app"
            target="_blank"
            rel="noreferrer"
            title="Links for coder and code"
          >
            {" "}
            open sourced{" "}
          </a>{" "}
          and hosted on{" "}
          <a
            href="https://remarkable-raindrop-1f4109.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            Netlify
          </a>
        </footer>
      </div>
    </div>
  );
}
