import { PageBanner } from "@components/index";
import IMAGES from "@assets/images/images";
import { useNavigate } from "react-router-dom";
import "./Home.scss";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div id="home_page">
      <PageBanner
        main_title="Welcome"
        sub_title="Upskilling !"
        banner_text="This is a welcoming screen for the entry of the application , you can now see the options"
        img_path={IMAGES.homeBanner}
      />

      <div className="title_bx">
        <div className="text">
          <h3>Fill the <span className="color">Recipes !</span></h3>
          <p>you can now fill the meals easily using the table and form , <br/> click here and sill it with the table !</p>
        </div>

        <button className="add_btn" onClick={()=> navigate('/dashboard/recipes')}>
          Fill Recipes <img src={IMAGES.whiteRightArrow} alt="pic" />
        </button>
      </div>
    </div>
  );
};

export default Home;
