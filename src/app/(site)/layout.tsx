import LayoutClient from "@/logic/services/clients/layout/LayoutClient/LayoutClient";
import { ReactNode } from "react";

const layout = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <LayoutClient>{children}</LayoutClient>
    </div>
  );
};

export default layout;
