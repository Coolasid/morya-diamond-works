import { useState } from "react";
import FsLightbox from "fslightbox-react";

const ImageViewer = () => {
  const [toggler, setToggler] = useState(false);
  //   var images = [
  //     {
  //       src: "https://upload.wikimedia.org/wikipedia/commons/8/89/Ropy_pahoehoe.jpg",
  //       title: "Ropy pahoehoe",
  //       description:
  //         "By Tari Noelani Mattox. Licensed under Public Domain via Commons",
  //     },
  //     {
  //       src: "https://upload.wikimedia.org/wikipedia/commons/7/73/Pyroclastic_flows_at_Mayon_Volcano.jpg",
  //       title: "Pyroclastic flows at Mayon Volcano",
  //       description: "By C.G. Newhall. Licensed under Public Domain via Commons",
  //     },
  //     {
  //       src: "https://upload.wikimedia.org/wikipedia/commons/f/f3/Okataina.jpg",
  //       title: "Okataina",
  //       description: "By Richard Waitt. Licensed under Public Domain via Commons",
  //     },
  //   ];

  return (
    <>
      <button onClick={() => setToggler(!toggler)}>Toggle Lightbox</button>
      <FsLightbox
        toggler={toggler}
        sources={[
          "https://i.imgur.com/fsyrScY.jpg",
          "https://www.youtube.com/watch?v=3nQNiWdeH2Q",
          "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
        ]}
      />
    </>
  );
};

export default ImageViewer;
