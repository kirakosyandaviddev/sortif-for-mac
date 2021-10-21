import React from 'react';

interface AuthLogoProps {
  className?: string;
}

const AuthLogo: React.FC<AuthLogoProps> = ({ className }: AuthLogoProps) => (
  <div className={`flex items-end ${className}`}>
    <svg
      width="38"
      height="31"
      viewBox="0 0 38 31"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M11.1167 0H37.9997L33.3507 8.69149H11.1167V0Z" fill="#232323" />
      <path
        d="M8.59019 5.96259L35.4732 17.3828L31.2285 25.0636L2.42529 13.4413L8.59019 5.96259Z"
        fill="#232323"
      />
      <path
        d="M4.85083 21.8298H28.2976V30.5213H4.85083V21.8298Z"
        fill="#232323"
      />
      <path
        d="M11.1168 0L12.7109 5.91793L15.1593 8.62614V9.62918L12.3192 12.2371L2.42529 13.4415L11.1168 0Z"
        fill="#232323"
      />
      <path
        d="M21.8696 22.3156L22.8752 21.7092L26.4954 20.0383L29.814 19.2837L31.9363 23.7499L28.298 30.5212L21.8696 22.3156Z"
        fill="#232323"
      />
      <path
        d="M3.06904 24.9268L4.85106 21.8298L4.85106 30.5213H0L3.06904 24.9268Z"
        fill="#232323"
      />
    </svg>
    <span className="font-medium font-inter-med text-dark2 text-size_19">
      Sortif
    </span>
  </div>
);

AuthLogo.defaultProps = {
  className: '',
};

export default AuthLogo;
