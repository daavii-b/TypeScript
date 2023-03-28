// const body = document.querySelector('body');

// body?.style.background = 'red';

// const body2 = document.querySelector('body')!; // non-null assertion(!)

// body2.style.background = 'yellow';

// Recommended

// type assertion (as)
const body3 = document.querySelector('body') as HTMLBodyElement;
body3.style.background = 'blue';

// type assertion (as)
const body4 = document.querySelector('body') as unknown as number;
console.log(typeof body4); // Output should be 'number'
