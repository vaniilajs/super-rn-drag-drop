/** @jsxImportSource react */
import type { FunctionComponent, SVGAttributes } from "react";

export type MenuIconProps = SVGAttributes<SVGElement>;

export const MenuIcon: FunctionComponent<MenuIconProps> = (props) => {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" {...props}>
      <path d="M4 7h16M4 12h16M4 17h16" />
    </svg>
  );
};
