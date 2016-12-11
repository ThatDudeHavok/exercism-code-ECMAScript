class Hamming {
  constructor() {
    this.hammingDistance = 0
  }

  compute (sequenceOne, sequenceTwo) {
    for (let i = 0; i < sequenceOne.length; i++) {
      if (sequenceOne[i] !== sequenceTwo[i]) {
        hammingDistance++
      }
    }
    return this.hammingDistance
  }
}

export default Hamming;
