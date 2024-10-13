import React from 'react';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="container">
      <h1>Welcome to FlashForge!</h1>
      <p>Your flashcard tool for Software Engineering and CS students.</p>

      <div className="deck-categories">
        <Link href="/decks/software-design">
          <div className="category-box flash">Software Design</div>
        </Link>
        <Link href="/decks/java-basics">
          <div className="category-box flash">Java Basics</div>
        </Link>
        <Link href="/decks/algorithms">
          <div className="category-box flash">Algorithms</div>
        </Link>
        <Link href="/decks/data-structures">
          <div className="category-box flash">Data Structures</div>
        </Link>
      </div>
    </div>
  );
}
