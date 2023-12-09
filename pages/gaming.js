import Gfeed from "./gaming/game-feed";
import GamingSidebar from "./sidebar/gamingSidebar";

export default function Gaming() {
    return (
      <div>
        <GamingSidebar />
        <Gfeed />
      </div>
    );
}