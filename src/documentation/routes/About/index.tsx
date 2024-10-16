// import toast, { Toaster } from "react-hot-toast";

import { AboutAdTextW, AboutAdW, AboutW } from "./style/style";

// import { Topbar } from "@/ui-kit/Navigation";

export const About = () => {
  // const notify = () => toast.success("Hello World");
  return (
    <AboutW>
      <AboutAdW>
        <AboutAdTextW $fontSize={32} $color={"#c5d3ff"}>
          simple
        </AboutAdTextW>
        <AboutAdTextW $fontSize={34} $color={"#8fa8f9"}>
          beautiful
        </AboutAdTextW>
        <AboutAdTextW $fontSize={36} $color={"#3041fc"}>
          mighty
        </AboutAdTextW>
        <AboutAdTextW $fontSize={38} $color={"#eb30fc"}>
          rich
        </AboutAdTextW>
        <AboutAdTextW $fontSize={40} $color={"#2ef00c"}>
          flexible
        </AboutAdTextW>
        <AboutAdTextW $fontSize={42} $color={"#505487"}>
          expandable
        </AboutAdTextW>
        <AboutAdTextW $fontSize={70} $color={"#6386f2"}>
          evident
        </AboutAdTextW>
      </AboutAdW>
    </AboutW>
  );
};
