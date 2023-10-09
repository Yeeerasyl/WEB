import React  from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faUserFriends, faEnvelope, faImage, faMusic, faVideo } from '@fortawesome/free-solid-svg-icons';
import './SideBar.css'
function SideBar(){
    return(

        <React.Fragment>
            <div className="sidebar">
        <ul>
          <li>
            <FontAwesomeIcon icon={faUser} />
            <a href="#">Моя страница</a>
          </li>
          <li>
            <FontAwesomeIcon icon={faUserFriends} />
            <a href="#">Друзья</a>
          </li>
          <li>
            <FontAwesomeIcon icon={faEnvelope} />
            <a href="#">Сообщения</a>
          </li>
          <li>
            <FontAwesomeIcon icon={faImage} />
            <a href="#">Фотографии</a>
          </li>
          <li>
            <FontAwesomeIcon icon={faVideo} />
            <a href="#">Видео</a>
          </li>
          <li>
            <FontAwesomeIcon icon={faMusic} />
            <a href="#">Музыка</a>
          </li>
          
        </ul>
      </div>
        </React.Fragment>
        
     
    );
}

export default SideBar;