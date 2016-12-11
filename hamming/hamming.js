class Hamming {
  compute (sequenceOne, sequenceTwo) {
    let hammingDistance = 0

    for (let i = 0; i < sequenceOne.length; i++) {
      if (sequenceOne[i] !== sequenceTwo[i]) {
        hammingDistance++
      }
    }
    
    return hammingDistance
  }
}

export default Hamming;
