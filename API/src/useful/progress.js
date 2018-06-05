class Progress {

  constructor(options) {

    if (!options) {
      this.wrapper = {
        in: '',
        out: ''
      }
    }

    else {

      switch (options.clear) {

        case true:
          this.clearLine = true
          break

        default:
          this.clearLine = false

      }
      
      switch (options.start) {

        case '':
        case null:
        case undefined:
          this.startText = ''
          break
        
        default:
          this.startText = options.start

      }

      switch (options.wrapper) {

        case '':
        case null:
        case undefined:
          this.wrapper = {
            in: '',
            out: ''
          }
          break
  
        case 'parentheses':
          this.wrapper = {
            in: '(',
            out: ')'
          }
          break

        case 'brackets':
        this.wrapper = {
          in: '[',
          out: ']'
        }
        break
  
        default:
          throw 'Unrecognized style option'
      }

      switch (options.descriptor) {

        case '':
        case null:
        case undefined:
          this.descriptor = ''
          break
  
        default:
          this.descriptor = options.descriptor
  
      }

      switch (options.done) {

        case '':
        case null:
        case undefined:
          this.doneText = ''
          break

        default:
          this.doneText = options.done

      }
    }

    return this

  }

  start(text) {
    this.startText = text || ''
    this.count = 0
    process.stdout.write(`${this.startText}`)
    return this
  }

  isAt(count) {
    this.count = count
    return this
  }

  outOf(total) {
    this.total = total
    return this
  }

  increment(number) {
    number = number || 1
    this.count += number
    return this
  }

  percentage() {
    let percentage = Math.round(this.count / this.total * 100)
    this._write(`${percentage}%`)
  }

  division() {
    this._write(`${this.count}/${this.total}`)
  }

  units() {
    this._write(`${this.count}`)
  }

  _write(text) {
    this.clear()
    text = text || ''
    process.stdout.write(`${this.startText}${this.wrapper.in}${text}${this.wrapper.out}${this.descriptor}`)
  }

  done(text) {
    text = text || ''
    process.stdout.write(` ${this.doneText}\n`)
  }

  clear() {
    if (this.clearLine) process.stdout.clearLine()
    process.stdout.cursorTo(0)
  }
}

export default Progress