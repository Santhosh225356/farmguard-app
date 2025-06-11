import React, { useState, useEffect } from 'react';

const WeatherInfo = () => {
  const [temperature, setTemperature] = useState('');
  const [humidity, setHumidity] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setTemperature('32°C');
      setHumidity('68%');
      setLoading(false);
    }, 1500);
  }, []);

  return (
    <div style={{ marginTop: '30px' }}>
      <h2>🌤️ Local Weather</h2>
      {loading ? (
        <p>Fetching weather...</p>
      ) : (
        <ul>
          <li><strong>Temperature:</strong> {temperature}</li>
          <li><strong>Humidity:</strong> {humidity}</li>
        </ul>
      )}
    </div>
  );
};

export default WeatherInfo;
