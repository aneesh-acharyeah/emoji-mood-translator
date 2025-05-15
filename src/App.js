import './App.css';
import React, { useState } from "react";

function App() {
  const [mood, setMood] = useState('');
  const [emoji, setEmoji] = useState('');
  const [message, setMessage] = useState('');

  const moods = {
  Happy: { emoji: '😊', message: "Keep smiling, it makes people wonder what you're up to." },
  Sad: { emoji: '😢', message: "Tough times don't last, but tough people do." },
  Excited: { emoji: '🤩', message: "The best is yet to come!" },
  Angry: { emoji: '😡', message: "Breathe in, breathe out." },
  Silly: { emoji: '😜', message: "Life’s too short to be serious all the time!" },
  Confused: { emoji: '😕', message: "It's okay to not have all the answers." },
  Cool: { emoji: '😎', message: "Stay chill, you got this!" },
  Sleepy: { emoji: '😴', message: "Rest is productive too!" },
};

  const handleMoodClick=(selectedMood)=>{
    setMood(selectedMood);
    setEmoji(moods[selectedMood].emoji);
    setMessage(moods[selectedMood].message);
  }
   return (
    <div className="App">
      <h1>🎭 Emoji Mood Translator</h1>
      <div className="button-container">
        {Object.keys(moods).map((mood) => (
          <button key={mood} onClick={() => handleMoodClick(mood)}>
            {mood}
          </button>
        ))}
      </div>

      {emoji && (
        <div className="display">
          <h2>{emoji}</h2>
          <p>{message}</p>
        </div>
      )}
    </div>
  );
}

export default App;
