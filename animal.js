const { useState } = React;

const AnimalSpiritGenerator = () => {
  const [userName, setUserName] = useState('');
  const [userAnimalSpirit, setUserAnimalSpirit] = useState('');

  const handleButtonClick = () => {
    if (userName === '') {
      alert('Please write your name');
    } else {
      const animalSpirits = [
        'The Fullmoon Wolf',
        'The Wise Owl',
        'The Clever Fox',
        'The Majestic Eagle',
        'The Forest Bear',
        'The Nocturnal Jaguar',
        'The Enigmatic Lynx',
        'The Shadow Tiger',
        'The Golden Lion',
        'The Soaring Hawk',
      ];
      const randomIndex = Math.floor(Math.random() * animalSpirits.length);
      const randomAnimalSpirit = animalSpirits[randomIndex];

      setUserAnimalSpirit(randomAnimalSpirit);
      alert(`Your spirit animal name: ${userName} - ${randomAnimalSpirit}`);
    }
  };

  return (
    <div className="container">
      <label className="label">
        Name:
        <input type="text" value={userName} onChange={(e) => setUserName(e.target.value)} />
      </label>
      <button onClick={handleButtonClick}>Generate Animal Spirit</button>
    </div>
  );
};

ReactDOM.render(<AnimalSpiritGenerator />, document.getElementById('root'));
