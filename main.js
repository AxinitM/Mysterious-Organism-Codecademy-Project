// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G'];
  return dnaBases[Math.floor(Math.random() * 4)];
};

// Returns a random single strand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = [];
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase());
  }
  return newStrand;
};

// Factory function to create a pAequor object
const pAequorFactory = (specimenNum, dna) => {
  return {
    specimenNum,
    dna,

    mutate() {
      const randomIndex = Math.floor(Math.random() * this.dna.length);
      let newBase = returnRandBase();
      while (this.dna[randomIndex] === newBase) {
        newBase = returnRandBase();
      }
      this.dna[randomIndex] = newBase;
      return this.dna;
    },

    compareDNA(otherPAequor) {
      let identicalCount = 0;
      for (let i = 0; i < this.dna.length; i++) {
        if (this.dna[i] === otherPAequor.dna[i]) {
          identicalCount++;
        }
      }
      const percentCommon = ((identicalCount / this.dna.length) * 100).toFixed(2);
      console.log(
        `Specimen #${this.specimenNum} and specimen #${otherPAequor.specimenNum} have ${percentCommon}% DNA in common.`
      );
    },

    willLikelySurvive() {
      const cgCount = this.dna.filter(base => base === 'C' || base === 'G').length;
      const percentCG = (cgCount / this.dna.length) * 100;
      return percentCG >= 60;
    }
  };
};

// Create an array with 30 instances of pAequor likely to survive
const survivingPAequor = [];
let specimenNum = 1;

while (survivingPAequor.length < 30) {
  const newOrganism = pAequorFactory(specimenNum, mockUpStrand());
  if (newOrganism.willLikelySurvive()) {
    survivingPAequor.push(newOrganism);
  }
  specimenNum++;
}

// Testing examples
survivingPAequor[0].compareDNA(survivingPAequor[1]);
console.log(survivingPAequor[0].willLikelySurvive());
console.log(`Number of surviving pAequor: ${survivingPAequor.length}`);