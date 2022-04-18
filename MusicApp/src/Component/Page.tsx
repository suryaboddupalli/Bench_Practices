import React, { useState } from "react";
import FooterPlayer from "./FooterPlayer";
import Model from "./Model";
import SongList from "./SongList";

function Page() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <Model open={isOpen} isClose={() => setIsOpen(false)}>
        <SongList />
      </Model>
      <FooterPlayer setIsOpen={setIsOpen} />
    </div>
  );
}

export default Page;
