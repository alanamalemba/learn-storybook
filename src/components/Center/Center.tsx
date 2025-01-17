import { ReactNode } from "react";
import "./Center.css";

type Props = {
  children: ReactNode;
};

export default function Center({ children }: Props) {
  return <div className="center">{children}</div>;
}
