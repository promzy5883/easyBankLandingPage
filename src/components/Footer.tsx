import SocialIcons from "./icons";
import { footerLinks } from "./data";
import Button from "./button";

export default function Footer() {
  const { faceBook, youtube, twitter, pinterest, instagram } = SocialIcons();

  return (
    <footer>
      <div className="footer_first_part">
        <div className="footer_logo_box">
          <img src="images/logo-footer.svg" alt="" />
          <div className="social_icons">
            {faceBook}
            {youtube}
            {twitter}
            {pinterest}
            {instagram}
          </div>
        </div>
        <ul className="firstPartLinks">
          {footerLinks[0].map((link) => {
            return (
              <li key={link}>
                <a href="#">{link}</a>
              </li>
            );
          })}
        </ul>
        <ul className="firstPartLinks">
          {footerLinks[1].map((link) => {
            return (
              <li key={link}>
                <a href="#">{link}</a>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="footer_second_part">
        <Button />
        <p>@Easybank. All Rights Reserved</p>
      </div>
    </footer>
  );
}
