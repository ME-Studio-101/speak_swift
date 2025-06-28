import "./Main.css";
import Header from "../Header/Header";
import Landing from "../Landind/Landing";
import Answer from "../Answer/Answer";
import Invitation from "../Invitation/Invitation";
import Lessons from "../Lessons/Lessons";
import Universal from "../Universal/Universal";
import Teachers from "../Teachers/Teachers";
import TestInvitation from "../TestInvitation/TestInvitation";
import Reviews from "../ Reviews/ Reviews";
import Footer from "../Footer/Footer";

export default function Main() {
  return (
    <div className="Main">
      <div className="general-background">
        <Header />
        <Landing />
      </div>
      <Answer />
      <Invitation />
      <Lessons />
      <Universal />
      <Teachers />
      <TestInvitation />
      <Reviews />
      <Footer />
    </div>
  );
}
