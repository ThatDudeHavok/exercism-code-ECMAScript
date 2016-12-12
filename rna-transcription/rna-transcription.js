class Transcriptor {
  toRna(dnaStrand) {
    let rnaStrand = ''
    for (let i = 0; i < dnaStrand.length; i++) {
      let nucleotide = dnaStrand.charAt(i)
      rnaStrand += thing(nucleotide)
    }
    return rnaStrand
  }
}

function thing(nucleotide) {
  switch (nucleotide) {
    case 'C':
      return 'G'
    case 'G':
      return 'C'
  }
}

export default Transcriptor;
