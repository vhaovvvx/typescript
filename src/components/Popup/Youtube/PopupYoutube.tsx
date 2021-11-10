import react from 'react';
import './PopupYoutube.scss';

type TProps = {
  hrefLink: string;
};

const PopupYoutube: react.FC<TProps> = ({ hrefLink }) => {
  return (
    <div className='container-test'>
      <h2>Dibba-managed purchase</h2>

      <p>Take the hassle out of the property buying process and let</p>
      <p>Diyba take care of it for you</p>
      <iframe src={hrefLink} frameBorder='1' className='iframe-popup'></iframe>

      <h3>Want to go ahead ?</h3>
    </div>
  );
};

export default PopupYoutube;
