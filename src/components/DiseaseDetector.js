import React, { useState, useEffect } from 'react';

const DiseaseDetector = () => {
  const [image, setImage] = useState(null);
  const [prediction, setPrediction] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (image) {
      setLoading(true);
      setTimeout(() => {
        setPrediction('Detected: Leaf Blight 🌿\nSuggestion: Use Mancozeb 75% WP');
        setLoading(false);
      }, 2000);
    }
  }, [image]);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(URL.createObjectURL(file));
    }
  };

  return (
    <div style={{ marginTop: '30px' }}>
      <h2>🖼️ Upload Leaf Image</h2>
      <input type="file" accept="image/*" onChange={handleImageChange} />
      {image && <img src={image} alt="leaf" style={{ marginTop: 10, width: 200 }} />}
      {loading && <p>🔄 Analyzing image...</p>}
      {!loading && prediction && <p>✅ {prediction}</p>}
    </div>
  );
};

export default DiseaseDetector;
