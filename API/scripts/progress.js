class Progress {

  constructor({
    clear: clearLine = false,
    descriptor = '',
    wrapper = null
  } = {}) {

    Object.assign(this, {clearLine, descriptor})

    this.wrapper = 
      (!wrapper)                  ? { in: '',   out: ''   } :
      (wrapper === 'parentheses') ? { in: '(',  out: ')'  } :
      (wrapper === 'brackets')    ? { in: '[',  out: ']'  }
      : { in: '', out: '' }

    return this
    
  }

  start(text = '') {
    this.startText = text
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

  increment(number = 1) {
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

  _write(text = '') {
    this.clear()
    process.stdout.write(`${this.startText}${this.wrapper.in}${text}${this.wrapper.out}${this.descriptor}`)
  }

  done(text = '') {
    process.stdout.write(` ${text}\n`)
  }

  clear() {
    if (this.clearLine) process.stdout.clearLine()
    process.stdout.cursorTo(0)
  }
}

export default Progress