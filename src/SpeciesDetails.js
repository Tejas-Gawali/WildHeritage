import React from 'react';
import { useParams } from 'react-router-dom';
import Quiz from './Quiz';

const SpeciesDetails = ({ species }) => {
  const { id } = useParams();
  const selectedSpecies = species.find((specie) => specie.id === id);

  const quizQuestions = [
    {
      question: 'Question 1: Which of the following is a threat to this species?',
      options: [
        'Habitat loss',
        'Climate change',
        'Poaching',
        'All of the above',
      ],
      correctOption: 'All of the above',
    },
    // Add more quiz questions as needed
  ];

  return (
    <div>
      <h2>{selectedSpecies.name}</h2>
      <p>{selectedSpecies.description}</p>
      {/* Add more information as needed */}

      <h3>Quiz</h3>
      <Quiz questions={quizQuestions} />
    </div>
  );
};

export default SpeciesDetails;
