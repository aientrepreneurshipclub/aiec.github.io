import { useState, useRef } from "react";
import styles from "./image.module.css";
const ImageDisplay = () => {
  const [imageUrl, setImageUrl] = useState("/placeholder.png");
  const ref = useRef(null);
  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setImageUrl(imageUrl);
    }
  };

  return (
    <div className={styles.container}>
      <img
        className={styles.image}
        src={imageUrl}
        alt="Selected"
        onClick={()=>{ref.current.click()}}
      />
      <input
        type="file"
        id="image"
        name="image"
        accept="image/*"
        onChange={handleImageChange}
        className={styles.input}
        ref={ref}
      />
    </div>
  );
};

export default ImageDisplay;
