// Interfaces
interface MajorCredits {
  credits: number;
  brand: 'MajorCredits'; // Unique identifier
}

interface MinorCredits {
  credits: number;
  brand: 'MinorCredits'; // Unique identifier
}

// Functions
function sumMajorCredits(subject1: MajorCredits, subject2: MajorCredits): MajorCredits {
  return {
    credits: subject1.credits + subject2.credits,
    brand: 'MajorCredits'
  };
}

function sumMinorCredits(subject1: MinorCredits, subject2: MinorCredits): MinorCredits {
  return {
    credits: subject1.credits + subject2.credits,
    brand: 'MinorCredits'
  };
}

// Usage example (optional)
const majorSubject1: MajorCredits = { credits: 3, brand: 'MajorCredits' };
const majorSubject2: MajorCredits = { credits: 4, brand: 'MajorCredits' };

const minorSubject1: MinorCredits = { credits: 2, brand: 'MinorCredits' };
const minorSubject2: MinorCredits = { credits: 1, brand: 'MinorCredits' };

console.log(sumMajorCredits(majorSubject1, majorSubject2));
console.log(sumMinorCredits(minorSubject1, minorSubject2));
