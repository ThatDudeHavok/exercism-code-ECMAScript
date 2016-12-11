class Hamming {
  compute (sequenceOne, sequenceTwo) {
    if (sequenceOne.length != sequenceTwo.length) {
      throw new Error('DNA strands must be of equal length.')
    }

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
