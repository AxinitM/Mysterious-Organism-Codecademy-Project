// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G'];
  return dnaBases[Math.floor(Math.random() * 4)];
};

// Returns a random single stand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = [];
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase());
  }
  return newStrand;
};


const pAequorFactory = (specimenNum, dna) => {
  return {
    specimenNum,
    dna,


    mutate() {
      const dnaBases = ['A', 'T', 'C', 'G'];

      // Select a random index in the dna array
      const index = Math.floor(Math.random() * this.dna.length);

      // Get the current base at that index
      const currentBase = this.dna[index];

      // Filter out the current base to avoid selecting it again
      const newBases = dnaBases.filter(base => base !== currentBase);

      // Randomly pick a new base from the remaining options
      const newBase = newBases[Math.floor(Math.random() * newBases.length)];

      // Replace the old base with the new one
      this.dna[index] = newBase;

      // Return the mutated dna array
      return this.dna;
    }
  };
};


const organism1 = pAequorFactory(1, mockUpStrand());
console.log("Before mutation:", organism1.dna);

organism1.mutate();
console.log("After mutation:", organism1.dna);











// Поскольку вам нужно создать несколько объектов, создайте фабричную функцию pAequorFactory()с двумя параметрами:

// Первый параметр — число (два организма не должны иметь одинаковое число).
// Второй параметр — массив из 15 оснований ДНК.
// pAequorFactory()должен возвращать объект, содержащий свойства specimenNumи dnaсоответствующий предоставленным параметрам.

// На последующих шагах вы также добавите дополнительные методы к этому возвращаемому объекту.







