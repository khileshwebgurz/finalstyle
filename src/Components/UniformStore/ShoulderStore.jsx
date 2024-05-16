import wide_shoulder from "../../assets/images/shoulder-files/V-NECK-WIDE-SHOULDER.png";
import narrow_shoulder from "../../assets/images/shoulder-files/V-NECK-NARROW-SHOULDER.png";



const Shoulderstore = ()=>{
  const jersyNum = localStorage.getItem("selectedJersy");
  const frontShoulderwide = `assets/jerseys/${jersyNum}/slicings/front-shoulders-wide.png`;
  const backshoulderwide = `assets/jerseys/${jersyNum}/slicings/back-shoulders-wide.png`;
  const frontShouldernarrow = `assets/jerseys/${jersyNum}/slicings/front-shoulders-narrow.png`;
  const backshouldernarrow = `assets/jerseys/${jersyNum}/slicings/back-shoulders-narrow.png`;

  const ShoulderImages = [
  
    {
      id: 1,
      src: narrow_shoulder,
      alt: "narrow_shoulder",
      name: "Narrow Shoulder",
      frontassociate: frontShouldernarrow,
      backassociate: backshouldernarrow,
    },
    {
      id: 2,
      src: wide_shoulder,
      alt: "wide_shoulder",
      name: "Wide Shoulder",
      frontassociate: frontShoulderwide,
      backassociate: backshoulderwide,
    },
  ];
  return ShoulderImages;
}

export default Shoulderstore;

