import './App.css';
import { Header, Advisor, AppSection, Earn, Footer, FoundationStory, Goal, Nft, Partners, RoadMap, RonToken, RunieToken, Team, Tokenomic, About } from "./container"
const App = () => {
  return (
    <div className="App">
      <Header />
      <About />
      <Goal />
      <AppSection />
      <Earn />
      <Tokenomic />
      <RunieToken />
      <RonToken />
      <Nft />
      <RoadMap />
      <Advisor />
      <Team />
      <FoundationStory />
      <Partners />
      <Footer />
    </div>
  );
}

export default App;
