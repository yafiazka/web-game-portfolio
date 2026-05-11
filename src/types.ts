import { ReactNode, ElementType } from "react";

export interface Section {
  id: string;
  title: string;
  color: string;
  content: ReactNode;
  icon: ElementType;
}
