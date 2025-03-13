import { Hourglass } from "react-loader-spinner";

export default function Loading() {
  return (
    <div className="bg-white relative w-screen h-[calc(100vh-100px)] flex justify-center items-center">
      <Hourglass
        visible={true}
        height="60"
        width="60"
        ariaLabel="hourglass-loading"
        wrapperStyle={{}}
        wrapperClass=""
        colors={["#EA433A", "#FF6A5E"]}
      />
    </div>
  );
}
