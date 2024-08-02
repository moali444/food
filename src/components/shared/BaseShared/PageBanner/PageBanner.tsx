//import IMAGES from '@assets/images/images';
import "./PageBanner.scss";

interface Item {
  main_title?: string;
  sub_title?: string;
  banner_text?: string;
  img_path?: string;
}

const PageBanner = ({ main_title, sub_title, banner_text, img_path }: Item) => {
  return (
    <div id="page_banner">
      <div className="text">
        <h3>
          {main_title} <span className="sub_text">{sub_title}</span>
        </h3>
        <p>{banner_text}</p>
      </div>

      <div className="img_holder">
        <img src={img_path} alt="pic" />
      </div>
    </div>
  );
};

export default PageBanner;
