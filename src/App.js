import Header from "./Header/Header";
import MainContent from "./MainContent/MainContent";
import Footer from "./Footer/Footer";

function App (props) {
    return(
        <div className="main">
            <Header/>
            <MainContent/>
            <Footer/>
        </div>
    );
}
export default App;
