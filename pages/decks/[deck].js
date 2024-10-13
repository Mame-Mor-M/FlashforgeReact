import { useState } from 'react';

const DeckPage = () => {
  const [currentCard, setCurrentCard] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);

  const deckData = [
    { question: "What is Software Design?", answer: "The process of defining the architecture, components, and interfaces of a system." },
    { question: "What is a protected variable?", answer: "A variable that can only be accessed within its class and its subclasses." },
    { question: "What does # represent in a UML diagram?", answer: "A protected variable." },
  ];

  const flipCard = () => setIsFlipped(!isFlipped);

  return (
    <div className="flashcard-container">
      <div className="flashcard" onClick={flipCard}>
        {isFlipped ? deckData[currentCard].answer : deckData[currentCard].question}
      </div>
      <div className="controls">
        <button onClick={() => setCurrentCard((currentCard - 1 + deckData.length) % deckData.length)}>Previous</button>
        <button onClick={() => setCurrentCard((currentCard + 1) % deckData.length)}>Next</button>
      </div>
    </div>
  );
};

export default DeckPage;
