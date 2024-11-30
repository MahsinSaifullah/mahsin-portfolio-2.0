import { SocialIcon } from 'react-social-icons';

const Footer = () => {
  return (
    <footer className="flex justify-center items-center p-10 flex-col space-y-4">
      <h3 className="text-lime text-sm font-light">
        Designed and Built by Mahsin Saifullah
      </h3>
      <div className="flex space-x-2">
        <SocialIcon
          url="https://github.com/MahsinSaifullah"
          bgColor="#233554"
          fgColor="#64ffda"
        />
        <SocialIcon
          url="https://www.linkedin.com/in/mahsin-saifullah-a503b3107/"
          bgColor="#233554"
          fgColor="#64ffda"
        />
      </div>
    </footer>
  );
};

export default Footer;
