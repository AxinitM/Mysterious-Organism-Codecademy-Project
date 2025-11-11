# Mysterious Organism / Codecademy Project  

This is a solution to the **"Challenge Project: Mysterious Organism"** on Codecademy.  

This project is designed to simulate DNA comparison and survival prediction for a fictional organism, *P. aequor*. It demonstrates practical use of JavaScript functions, object methods, conditionals, and loops.  

---

## Table of contents
- [Mysterious Organism / Codecademy Project](#mysterious-organism--codecademy-project)
  - [Table of contents](#table-of-contents)
  - [Overview](#overview)
  - [Project Goals](#project-goals)
  - [Features](#features)
  - [Links](#links)
  - [Built With](#built-with)
  - [Author](#author)
  - [License](#license)

---

## Overview

The **Challenge Project: Mysterious Organism** explores DNA structure simulation for a fictional species, *P. aequor*.  
Each organism is represented as an object with unique DNA data, which can mutate, be compared with others, and evaluated for survival likelihood based on its genetic composition.  

---

## Project Goals

- Generate random DNA sequences and simulate biological variation.  
- Implement an object factory function (`pAequorFactory()`) with multiple biological behaviors.  
- Compare DNA sequences between two specimens and determine similarity.  
- Predict organism survivability based on DNA composition.  
- Create and store 30 specimens likely to survive in their natural environment.
    
---

## Features

- **Random DNA generation:**  
  Each specimen has a random strand of 15 DNA bases (`A`, `T`, `C`, `G`).  

- **Mutation:**  
  `.mutate()` randomly changes one DNA base to a different one.  

- **DNA Comparison:**  
  `.compareDNA()` compares DNA between two *P. aequor* specimens and prints the percentage of identical bases in the same position.  

- **Survival Prediction:**  
  `.willLikelySurvive()` returns `true` if at least 60% of the DNA consists of `C` or `G` bases.  

- **Survivor Collection:**  
  Automatically generates an array of 30 specimens that meet the survival criteria.

---

## Links

- **Project Description:** [Codecademy Project Page](https://www.codecademy.com/journeys/front-end-engineer/paths/fecj-22-building-interactive-websites/tracks/fecj-22-javascript-syntax-part-ii/modules/wdcp-22-mysterious-organism-97f6a643-6d5f-4b70-af5b-468388481cca/projects/mysterious-organism)  

---

## Built With

- **JavaScript** — arrays, loops, functions, conditional logic  
- **Console debugging** — `console.log()` to inspect values  

---

## Author

- **Name:** Andrei Martinenko  
- **Website:** [frontender.biz](https://www.frontender.biz/)  
- **GitHub:** [@AxinitM](https://github.com/AxinitM)  
- **Codecademy Profile:** [Andrei Martinenko](https://www.codecademy.com/profiles/system5869051486)  

---

## License

This project is open-source and available under the [MIT License](LICENSE).  
