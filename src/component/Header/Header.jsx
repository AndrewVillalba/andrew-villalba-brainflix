import "./Header.scss";
import companyLogo from '../../assets/images/BrainFlix-logo.svg';
import searchSvg from '../../assets/images/search.svg'
import profilePic from '../../assets/images/Mohan-muruge.jpg'


function Header() {
    return (
      <>
        <header className="header">
          <a className="header__logo"><img src={companyLogo}></img></a>
          <div className="search-section">
            <div className="search-section-wrapper">
              <label>
                <input type='text' className="search-section-wrapper__input" placeholder="Search"></input>
              </label>
              <img className="search-section-wrapper__user" src={profilePic}></img>
            </div>
            <button className="search-section__button">Upload</button>
          </div>
        </header>
      </>
    );
  }

export default Header;