import Router from "./router/router";
import ViewToggleSwitchContainer from "./components/ViewToggleSwitchContainer/ViewToggleSwitchContainer";

export default function App() {
  return (
    <>
      <div className="background">
        <div className="background__image">
          <Router />
        </div>
      </div>
    </>
  );
}
