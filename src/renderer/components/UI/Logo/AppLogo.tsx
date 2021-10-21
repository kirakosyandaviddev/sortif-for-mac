import React from 'react';

interface AppLogoProps {
  className?: string;
}

const AppLogo: React.FC<AppLogoProps> = ({ className }: AppLogoProps) => (
  <div className={`flex ${className}`}>
    <svg
      className="mr-1.5"
      width="25"
      height="20"
      viewBox="0 0 25 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M7.28467 0H24.9005L21.8542 5.69535H7.28467V0Z" fill="#232323" />
      <path
        d="M5.62914 3.90717L23.245 11.3906L20.4635 16.4237L1.58942 8.80782L5.62914 3.90717Z"
        fill="#232323"
      />
      <path d="M3.17883 14.3046H18.543V20H3.17883V14.3046Z" fill="#232323" />
      <path
        d="M7.28477 0L8.32938 3.8779L9.93377 5.65253V6.3098L8.07268 8.0187L1.58942 8.80792L7.28477 0Z"
        fill="#232323"
      />
      <path
        d="M14.3306 14.623L14.9895 14.2256L17.3618 13.1307L19.5363 12.6362L20.927 15.5628L18.5429 19.9999L14.3306 14.623Z"
        fill="#232323"
      />
      <path
        d="M2.01108 16.334L3.1788 14.3046L3.1788 20H0L2.01108 16.334Z"
        fill="#232323"
      />
    </svg>

    <span className="font-medium font-inter-med text-dark2 text-size_19">
      Sortif
    </span>
  </div>
);

AppLogo.defaultProps = {
  className: '',
};

export default AppLogo;
