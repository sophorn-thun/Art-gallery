import { useState } from 'react';
import CheerModal from './CheerModal';

import styles from './Game.module.css';

const artCollection = [
  {
    src: 'https://www.artic.edu/iiif/2/25c31d8d-21a4-9ea1-1d73-6a2eca4dda7e/full/1686,/0/default.jpg',
    alt: 'The bed room',
    artist: 'Vincent van Gogh',
    options: ['Georges Seurat', 'Vincent van Gogh', 'Alma Thomas'],
  },
  {
    src: 'https://www.artic.edu/iiif/2/b272df73-a965-ac37-4172-be4e99483637/full/843,/0/default.jpg',
    alt: 'American Gothic',
    artist: 'Grant Wood',
    options: ['Grant Wood', 'Rene Magritte', 'Andy Warhol'],
  },
  {
    src: 'https://www.artic.edu/iiif/2/c617e2f0-d5fe-0772-390e-6d8c83895815/full/843,/0/default.jpg',
    alt: 'The red armchair',
    artist: 'Pablo Picasso',
    options: ['Pablo Picasso', 'Claude Monet', 'Bernat Martorell'],
  },
  {
    src: 'https://www.artic.edu/iiif/2/64734461-887d-80b9-8489-e38cb05ac01d/full/843,/0/default.jpg',
    alt: 'Mother and child',
    artist: 'Pablo Picasso',
    options: ['Rembrandt van Rijn', 'Grant Wood', 'Pablo Picasso'],
  },
  {
    src: 'https://www.artic.edu/iiif/2/e707e79a-b668-91a3-e580-40b3e4d17317/full/843,/0/default.jpg',
    alt: 'Self portrait',
    artist: 'Beauford Delaney',
    options: ['Georges Seurat', 'Beauford Delaney', 'Claude Monet'],
  },
];

function Quiz() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);

  const nextQuestion = () => {
    setCurrentQuestion((prevQuestion) => (prevQuestion + 1) % artCollection.length);
  };

  const prevQuestion = () => {
    setCurrentQuestion(
      (prevQuestion) => (prevQuestion - 1 + artCollection.length) % artCollection.length,
    );
  };

  const art = artCollection[currentQuestion];

  function handleChoice(e: React.ChangeEvent<HTMLInputElement>) {
    const isCorrect = e.target.value === artCollection[currentQuestion].artist;

    setTimeout(() => {
      if (isCorrect) {
        setIsModalOpen(true);
      } else {
        alert('Nope, do try again!');
      }
    }, 0);
  }

  return (
    <div className={styles['game']}>
      <div className={styles['question']}>
        <h1>Surprize gift is await 🤡</h1>
        <h2>Who made this art?</h2>
        <form className={styles['question-form']} key={currentQuestion}>
          {art.options.map((option, optionIndex) => (
            <div key={optionIndex}>
              <input
                type="radio"
                id={`option-${currentQuestion}-${optionIndex}`}
                name={`art-${currentQuestion}`}
                value={option}
                onChange={handleChoice}
              />
              <label htmlFor={`option-${currentQuestion}-${optionIndex}`}>{option}</label>
            </div>
          ))}
        </form>
        <img src={art.src} alt={art.alt} />
        <div>
          <button onClick={prevQuestion} className={styles['prev-button']}>
            Prevs
          </button>
          <button onClick={nextQuestion} className={styles['next-button']}>
            Next
          </button>
        </div>
      </div>
      <CheerModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
}

export default Quiz;
