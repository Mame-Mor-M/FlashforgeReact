import { useState } from 'react';

export default function Create() {
  const [cards, setCards] = useState([{ question: '', answer: '' }]);

  const addCard = () => {
    setCards([...cards, { question: '', answer: '' }]);
  };

  const handleInputChange = (index, field, value) => {
    const newCards = [...cards];
    newCards[index][field] = value;
    setCards(newCards);
  };

  return (
    <div className="create-container">
      <h2>Create a New Deck</h2>
      {cards.map((card, index) => (
        <div key={index}>
          <input
            type="text"
            placeholder="Question"
            value={card.question}
            onChange={(e) => handleInputChange(index, 'question', e.target.value)}
          />
          <input
            type="text"
            placeholder="Answer"
            value={card.answer}
            onChange={(e) => handleInputChange(index, 'answer', e.target.value)}
          />
        </div>
      ))}
      <button onClick={addCard}>Add Another Card</button>
    </div>
  );
}
