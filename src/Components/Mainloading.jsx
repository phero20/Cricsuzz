import Lottie from "lottie-react";
import loadingAnimation from "../assets/Mainloading.json";

const MainLoading = () => (
  <div
    style={{
      height: "100vh",
      width: "100vw",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      overflow: "hidden",
    }}
  >
    <Lottie
      animationData={loadingAnimation}
      loop
      autoplay
      style={{ width: "100vw", height: "100vh" }}
    />
  </div>
);

export default MainLoading;