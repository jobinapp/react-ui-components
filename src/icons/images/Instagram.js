import React from "react";

const SvgInstagram = props => (
  <svg width={24} height={24} className={props.className}
  style={{...props.style}}>
    <defs>
      <path
        d="M10.156 0h1.688c2.217.005 2.628.03 3.681.075C16.7.125 17.5.3 18.2.575c.725.275 1.35.675 1.95 1.275.625.625 1 1.225 1.275 1.95.25.7.45 1.5.5 2.675C21.975 7.65 22 8.025 22 11c0 2.975-.025 3.35-.075 4.525-.05 1.175-.225 1.975-.5 2.675a5.376 5.376 0 01-1.275 1.95c-.625.625-1.225 1-1.95 1.275-.7.25-1.5.45-2.675.5-1.175.05-1.55.075-4.525.075-2.975 0-3.35-.025-4.525-.075-1.175-.05-1.975-.225-2.675-.5a5.376 5.376 0 01-1.95-1.275c-.625-.625-1-1.225-1.275-1.95-.25-.7-.45-1.5-.5-2.675-.045-1.053-.07-1.464-.074-3.681v-1.688C.005 7.94.03 7.528.075 6.475.125 5.3.3 4.5.575 3.8A5.376 5.376 0 011.85 1.85c.625-.625 1.225-1 1.95-1.275.7-.25 1.5-.45 2.675-.5C7.528.03 7.939.005 10.156.001h1.688zm2.403 1.976h-2.415C7.991 1.98 7.602 2 6.575 2c-1.075.05-1.65.225-2.05.375-.525.2-.9.45-1.275.825-.375.4-.625.75-.825 1.275-.15.4-.325.975-.375 2.05-.075 1.175-.075 1.5-.075 4.45s.025 3.3.075 4.45c.05 1.075.225 1.65.375 2.05.2.525.45.9.825 1.275.375.375.75.625 1.225.825.4.15.975.325 2.05.375 1.175.075 1.5.075 4.45.075s3.3-.025 4.45-.075c1.075-.05 1.65-.225 2.05-.375.525-.2.9-.45 1.275-.825.375-.375.625-.75.85-1.225.15-.4.325-.975.375-2.05.06-.932.072-1.33.074-2.925v-2.36c-.004-2.196-.03-2.584-.074-3.615-.05-1.075-.225-1.65-.375-2.05-.2-.525-.45-.9-.825-1.275-.4-.375-.75-.625-1.275-.825-.4-.15-.975-.325-2.05-.375-.923-.059-1.337-.072-2.89-.074zM11 5.35A5.644 5.644 0 0116.65 11 5.645 5.645 0 0111 16.65 5.645 5.645 0 015.35 11 5.644 5.644 0 0111 5.35zm0 1.975A3.681 3.681 0 007.325 11 3.68 3.68 0 0011 14.675 3.68 3.68 0 0014.675 11 3.681 3.681 0 0011 7.325zM16.875 3.8a1.326 1.326 0 010 2.65 1.325 1.325 0 010-2.65z"
        id="Instagram_svg__a"
      />
    </defs>
    <g transform="translate(1 1)" fill="none" fillRule="evenodd">
      <mask id="Instagram_svg__b" fill="#fff">
        <use xlinkHref="#Instagram_svg__a" />
      </mask>
      <use fill="#000" xlinkHref="#Instagram_svg__a" />
      <g mask="url(#Instagram_svg__b)" fill="#444">
        <path d="M-1-1h24v24H-1z" />
      </g>
    </g>
  </svg>
);

export default SvgInstagram;
