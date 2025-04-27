import ConfessionBoard from "./components/ConfessionBoard";
export default function Home() {
  return (
    <div className="h-[760px] overflow-scroll">
      <div className="m-20">
        <h2 className="text-4xl text-center mb-5 text-yellow-500"> Today's Confessions </h2>
        <ConfessionBoard/>
      </div>
    </div>

  );
}
