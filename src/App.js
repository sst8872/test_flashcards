import React from 'react';
import { FlashCardArray } from 'react-flashcards';

const MyFlashcardComponent = () => {
    const flashcards = [
   { id: 1, front: <h1>able</h1>, back: <p>능력 있는</p>, isBookmarked: false },
    { id: 2, front: <h1>accident</h1>, back: <p>사고</p>, isBookmarked: true },
    { id: 3, front: <h1>advice</h1>, back: <p>조언</p> , isBookmarked: false,},
    { id: 4, front: <h1>advantage</h1>, back: <p>이점</p> },
    { id: 5, front: <h1>adventure</h1>, back: <p>모험</p> },
    { id: 6, front: <h1>advise</h1>, back: <p>조언하다</p> },
    { id: 7, front: <h1>agent</h1>, back: <p>대리인</p> },
    { id: 8, front: <h1>airline</h1>, back: <p>항공사</p> },
    { id: 9, front: <h1>airport</h1>, back: <p>공항</p> },
    { id: 10, front: <h1>alarm</h1>, back: <p>경보</p> },
    { id: 11, front: <h1>alcohol</h1>, back: <p>알코올</p> },
    { id: 12, front: <h1>alive</h1>, back: <p>살아 있는</p> },
    { id: 13, front: <h1>aloud</h1>, back: <p>소리 내어</p> },
    ];

    return (
        <FlashCardArray
            cards={flashcards}
            controls={true}
            showCount={true}
            autoPlay={true}
            onCardChange={(id, index) => console.log(`Card change detected: ID ${id}, Index: ${index}`)}
            onCardFlip={(id, index, state) => console.log(`Card flipped: ID ${id}, Index: ${index}, Flipped: ${state}`)}

            // Other props...
        />
    );
};

export default MyFlashcardComponent;