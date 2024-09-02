/** @jsxImportSource react */
import type { FunctionComponent, SVGAttributes } from "react";

export type CloseIconProps = SVGAttributes<SVGElement>;

export const CloseIcon: FunctionComponent<CloseIconProps> = (props) => {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" {...props}>
      <path d="M5 5l14 14M19 5l-14 14" />
    </svg>
  );
};
