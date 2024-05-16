import React, { useRef, useEffect } from "react";

const JerseyFront = ({ selectedNeckImage, selectedShoulderImage,shapeColors }) => {
  const canvasRef = useRef(null);



  const jersyNum = localStorage.getItem("selectedJersy");
  const shirtImage = `assets/jerseys/${jersyNum}/slicings/crew_front_narrow_shoulder.png`;
  const frontStripes = `assets/jerseys/${jersyNum}/slicings/front-stripes.png`;

  const loadImages = async (src) => {
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.src = src;
      img.onload = () => resolve(img);
      img.onerror = (error) => {
        console.error("Image loading failed:", img);
        reject(error);
      };
    });
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d", { willReadFrequently: true });

    const drawImages = async () => {
      try {
        const [shirt, shoulderImg, frontStripesImg, selectedImg] =
          await Promise.all([
            loadImages(shirtImage),
            loadImages(selectedShoulderImage),
            loadImages(frontStripes),
            loadImages(selectedNeckImage),
          ]);

        context.clearRect(0, 0, canvas.width, canvas.height);

        // Draw shirt
        context.drawImage(shirt, 10, 30, 300, 600);
        let imageData = context.getImageData(10, 30, 300, 600);
        imageData = changeColor(imageData, shapeColors.shirt1);
        context.putImageData(imageData, 10, 30);

        // Draw other images
        const images1 = [
          {
            image: shoulderImg,
            color: shapeColors.shoulder1,
            position: [10, 30],
          },
          {
            image: frontStripesImg,
            color: shapeColors.shirt2,
            position: [10, 30],
          },
        ];

        if (selectedNeckImage) {
          // temp canvas for the neck options
          const tempCanvasbackStr = document.createElement("canvas");
          tempCanvasbackStr.width = 180;
          tempCanvasbackStr.height = 120;
          const textContextbackStr = tempCanvasbackStr.getContext("2d");
          textContextbackStr.drawImage(selectedImg, -9, -5, 180, 120);
          const tempImagebackStr = textContextbackStr.getImageData(
            -9,
            -5,
            180,
            120
          );
          const updatedTempImagebackStr = changeColor(
            tempImagebackStr,
            shapeColors.neck1
          );
          textContextbackStr.putImageData(updatedTempImagebackStr, -9, -5);
          context.drawImage(tempCanvasbackStr, 80, 30);
        }

        images1.forEach(({ image,color, position }) => {
          const tempCanvas = document.createElement("canvas");
          tempCanvas.width = 300;
          tempCanvas.height = 600;
          const tempContext = tempCanvas.getContext("2d");
          tempContext.drawImage(image, 0, 0, 300, 600);
          let tempImageData = tempContext.getImageData(0, 0, 300, 600);
          tempImageData = changeColor(tempImageData, color);
          tempContext.putImageData(tempImageData, 0, 0);
          context.drawImage(tempCanvas, ...position);
        });
      } catch (error) {
        console.error("Error loading images:", error);
      }
    };

    drawImages();
  }, [selectedNeckImage, selectedShoulderImage,shapeColors]);


  const changeColor = (imageData, color) => {
    if (!color) {
      console.error("Color is undefined or null.");
      return imageData;
    }
    const { data } = imageData;
    const hexColor = color.replace(/^#/, ""); 
    const [r, g, b] = hexColor.match(/.{1,2}/g).map((c) => parseInt(c, 16));
    for (let i = 0; i < data.length; i += 4) {
      data[i] = r;
      data[i + 1] = g;
      data[i + 2] = b;
    }
    return imageData;
  };
  return (
    <canvas
      ref={canvasRef}
      width={300}
      height={600}
     
    />
  );
};

export default JerseyFront;
