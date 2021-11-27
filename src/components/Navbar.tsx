import { navigate } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import { Button } from '@components/styled/Button';

export const Navbar: React.FC = () => (
  <div className="w-full flex justify-center align-baseline h-16 bg-gray-900">
    <div className="w-full px-2 py-8 max-w-5xl flex justify-between align-baseline">
      <div
        className="max-w-[160px]"
      >
        <StaticImage
          src="../images/logo_no_text.png"
          alt="logo"
          layout="constrained"
          width={48}
          quality={100}
          placeholder="blurred"
        />
      </div>
      <div>
        <Button
          ml="128px"
          className="bg-blue-600"
          onClick={() => { navigate('/app/login'); }}
        >
          Sign in
        </Button>
      </div>
    </div>
  </div>
);
