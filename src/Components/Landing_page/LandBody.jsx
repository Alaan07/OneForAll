import React from "react";
import LandBodyCarousel from "./LandBodyCarousel";
import LandBodyMembership from "./LandBodyMembership";
import LandBodyReviews from "./LandBodyReviews";

function LandBody() {
  return (
    <div>

      {/* brand carousel part */}
      <LandBodyCarousel/>

      {/* membership page layout */}
      <LandBodyMembership/>

      {/* revies page layout */}
      <LandBodyReviews/>

    </div>
  );
}

export default LandBody;
