import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Lviv" />

        <footer>
          This project was coded by Olga Blud and is{" "}
          <a
            href="https://github.com/OlgaBlud/weather-app-final-project-shecodes"
            target="_blank"
            rel="noreferrer"
          >
            open-sourced on GitHub
          </a>
        </footer>
      </div>
    </div>
  );
}
