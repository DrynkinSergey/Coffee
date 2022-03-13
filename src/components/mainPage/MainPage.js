
import Header from "../header/header";
import About from "../about/about";
import OurBest from "../our-best/ourBest";
import Footer from "../footer/footer";
function MainPage() {
    const headerData = {
        headerTitle:'Everything You Love About Coffee',
        firstSubtitle:'We makes every day full of energy and taste',
        secondSubtitle:'Want to try our beans?',
        haveBtn:true,
        haveCoffeeLine:true,
        bgClass:'bgHeader'
    }
  return (
   <>
    <Header data={headerData}/>
    <About/>
       <OurBest/>
       <Footer/>
   </>
  );


}

export default MainPage;
