import objects from './objects';
import lettersHe from './lettersHe';
import nikudHe from './nikudHe';
import lettersEn from './lettersEn';
import lettersAr from './lettersAr';
import wordsHe from './wordsHe';
import wordsEn from './wordsEn';
import wordsAr from './wordsAr';
import numbers from './numbers';

// Every key is unique across the files (checked when they were split).
export const ItemIcons = {
  ...objects,
  ...lettersHe,
  ...nikudHe,
  ...lettersEn,
  ...lettersAr,
  ...wordsHe,
  ...wordsEn,
  ...wordsAr,
  ...numbers,
};

export { default as MultiIconRenderer } from './MultiIconRenderer';
