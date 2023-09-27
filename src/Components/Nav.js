import { useState } from "react";
import { useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faUser, faScrewdriverWrench, faPanorama, faEnvelopeOpen } from "@fortawesome/free-solid-svg-icons";

const Nav = () => {

  const [clicked, setClicked] = useState("menu__slide--bar");
  
  const menuClicked = () => {
    setClicked((current) =>
      current === "menu__slide--bar"
        ? "menu__slide--clicked"
        : "menu__slide--bar"
    );
  };
  
  const handler = (e) => {
    return e.key === "Enter" ? menuClicked() : null;
  };

  const location = useLocation();
  const {hash} = location;
  const splitLocation = hash.split("#");

  return (
    <div className="menu__container">
      <ul className="menu__main">
        <li>
          <a href="/#home" className="menu__main--list">
            <h4 className="menu__main--item">Home</h4>
            <FontAwesomeIcon
              icon={faHome}
              className={
                splitLocation[1] === "home"
                  ? "menu__main--active"
                  : "menu__main--icon"
              }
            />
          </a>
        </li>
        <li>
          <a href="/#about" className="menu__main--list">
            <h4 className="menu__main--item">About</h4>
            <FontAwesomeIcon
              icon={faUser}
              className={
                splitLocation[1] === "about"
                  ? "menu__main--active"
                  : "menu__main--icon"
              }
            />
          </a>
        </li>
        <li>
          <a href="/#skills" className="menu__main--list">
            <h4 className="menu__main--item">Skills</h4>
            <FontAwesomeIcon
              icon={faScrewdriverWrench}
              className={
                splitLocation[1] === "skills"
                  ? "menu__main--active"
                  : "menu__main--icon"
              }
            />
          </a>
        </li>
        <li>
          <a href="/#projects" className="menu__main--list">
            <h4 className="menu__main--item">Projects</h4>
            <FontAwesomeIcon
              icon={faPanorama}
              className={
                splitLocation[1] === "projects"
                  ? "menu__main--active"
                  : "menu__main--icon"
              }
            />
          </a>
        </li>
        <li>
          <a href="/#contact" className="menu__main--list">
            <h4 className="menu__main--item">Contact</h4>
            <FontAwesomeIcon
              icon={faEnvelopeOpen}
              className={
                splitLocation[1] === "contact"
                  ? "menu__main--active"
                  : "menu__main--icon"
              }
            />
          </a>
        </li>
      </ul>
      <div className="menu__slide">
        <p
          className="menu__slide--button"
          type="button"
          title="Click Me"
          tabIndex="0"
          onClick={menuClicked}
          onKeyDown={handler}
        >
          JS
        </p>
        <ul className={clicked}>
          <li>
            <a href="/#home" className="menu__slide--list">
              <FontAwesomeIcon
                icon={faHome}
                className={
                  splitLocation[1] === "home"
                    ? "menu__slide--active"
                    : "menu__slide--icon"
                }
                title="Home"
              />
            </a>
          </li>
          <li>
            <a href="/#about" className="menu__slide--list">
              <FontAwesomeIcon
                icon={faUser}
                className={
                  splitLocation[1] === "about"
                    ? "menu__slide--active"
                    : "menu__slide--icon"
                }
                title="About"
              />
            </a>
          </li>
          <li>
            <a href="/#skills" className="menu__slide--list">
              <FontAwesomeIcon
                icon={faScrewdriverWrench}
                className={
                  splitLocation[1] === "skills"
                    ? "menu__slide--active"
                    : "menu__slide--icon"
                }
                title="Skills"
              />
            </a>
          </li>
          <li>
            <a href="/#projects" className="menu__slide--list">
              <FontAwesomeIcon
                icon={faPanorama}
                className={
                  splitLocation[1] === "projects"
                    ? "menu__slide--active"
                    : "menu__slide--icon"
                }
                title="Projects"
              />
            </a>
          </li>
          <li>
            <a href="/#contact" className="menu__slide--list">
              <FontAwesomeIcon
                icon={faEnvelopeOpen}
                className={
                  splitLocation[1] === "contact"
                    ? "menu__slide--active"
                    : "menu__slide--icon"
                }
                title="Contact"
              />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Nav