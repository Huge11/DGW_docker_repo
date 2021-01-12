  



class Random {
  constructor(){
    this.allNoteNames = ['Ab','A','A#','Bb','B','C','C#','Db','D','D#','Eb','E','F','F#','Gb','G','G#'];
    this.noteNames = ['A','B','C','D','E','F','G'];
    this.scales = ['Major','Natural Minor','Minor Pentatonic','Harmonic Minor','Blues']
    this.chords = ['major','minor','major 7th','minor 7th','dominant 7th']

    this.getFiveNoteNames = ()=>{
      let elements = [this.getRandomNoteName(),this.getRandomNoteName(),this.getRandomNoteName(),this.getRandomNoteName(),this.getRandomNoteName()];

      return elements
    }

    this.getFiveStringNumbers = ()=>{
      let elements = [this.getRandom(6)+1,this.getRandom(6)+1,this.getRandom(6)+1,this.getRandom(6)+1,this.getRandom(6)+1];

      return elements
    }

    this.getFiveFretNumbers = ()=>{
      let elements = [this.getRandom(12)+1,this.getRandom(12)+1,this.getRandom(12)+1,this.getRandom(12)+1,this.getRandom(12)+1];

      return elements
    }

    this.getRandom = (int)=>{
      return Math.floor(Math.random() * (int))
    }

    this.getRandomNoteName = ()=>{
      let num = this.getRandom(this.noteNames.length);
      return this.noteNames[num]
    }

    this.getAnyRandomNoteName = ()=>{
      let num = this.getRandom(this.noteNames.length);
      return this.noteNames[num]
    }

    this.getRandomScaleType = ()=>{
      let num = this.getRandom(this.scales.length)
      return this.scales[num]
    }

    this.getRandomChordType = ()=>{
      let num = this.getRandom(this.chords.length);
      return this.chords[num];
    }

    this.getRandomPosition = ()=>{
      let num = this.getRandom(5)+1
      return num
    }

    this.getRandomString = ()=>{
      let num = this.getRandom(5)+1
      return num
    }

    this.getRandomFret = ()=>{
      let num = this.getRandom(11)+1
      return num
    }
  }
}


module.exports = new Random()