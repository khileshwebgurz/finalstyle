import React, { useRef, useEffect } from "react";

const JerseyBack = ({ selectedShoulderImage,shapeColors }) => {
  const canvasRef = useRef(null);

  const jersyNum = localStorage.getItem("selectedJersy");
  const shirtImage = `assets/jerseys/${jersyNum}/slicings/crew_back_narrow_shoulder.png`;
  const backStripes = `assets/jerseys/${jersyNum}/slicings/back-stripes.png`;

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
        const [defaultShirt, defaultShoulder, defaultBackStripes] =
          await Promise.all([
            loadImages(shirtImage),
            loadImages(selectedShoulderImage),
            loadImages(backStripes),
          ]);

        context.clearRect(0, 0, canvas.width, canvas.height);

        // default shirt
        context.drawImage(defaultShirt, 10, 30, 300, 600);
        let imageData = context.getImageData(10, 30, 300, 600);
        imageData = changeColor(imageData, shapeColors.shirt1);
        context.putImageData(imageData, 10, 30);
        // Draw other default images
        const defaultImages = [
          {
            image: defaultShoulder,
            color: shapeColors.shoulder1,
            position: [10, 30],
          },
          {
            image: defaultBackStripes,
            color: shapeColors.shirt2,
            position: [10, 30],
          },
        ];

        defaultImages.forEach(({ image, color, position }) => {
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
  }, [selectedShoulderImage, shapeColors]);

  const changeColor = (imageData, color) => {
    const { data } = imageData;
    const hexColor = color.replace(/^#/, ""); // Remove '#' if present
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
      // style={{ border: "1px solid black" }}
    />
  );
};

export default JerseyBack;
