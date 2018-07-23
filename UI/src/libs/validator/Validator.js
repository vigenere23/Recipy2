class Validator {
  constructor(variable) {
    this.var = variable
    this.isValid = true
    this.messages = []
    return this
  }

  log() {
    for (let message of this.messages) {
      console.error(message)
    }
    return this
  }

  throw() {
    for (let message of this.messages) {
      throw message
    }
    return this
  }

  checkType(type, variable = this.var, name = undefined) {
    try {

      if (variable === null || variable === undefined) {
        return this
      }

      else if (Array.isArray(variable)) {
        for (let item of variable) {
          this.checkType(type[0], item, name)
        }
      }

      else if (typeof variable === 'object') {
        this._compareKeys(type, variable, name)
        for (let [propName, value] of Object.entries(variable)) {
          this.checkType(type[propName], value, propName)
        }
      }

      else {
        this._checkSingleType(type, variable, name)
      }

    }
    catch (err) {
      this.messages.push(err)
      this.isValid = false
    }

    return this
  }

  _checkSingleType(type, variable, name) {
    let receivedType = BasicTypes[typeof variable]
    if (receivedType !== type) {
      let message = ""
      if (name) {
        message = `Field '${name}' should be of type '${typeof type()}' but received type '${typeof variable}'`
      }
      else {
        message = `Expected a ${typeof type()} but received a ${typeof variable}`
      }
      throw new TypeError(message)
    }
  }

  _compareKeys(type, variable, name) {
    let varKeys = Object.keys(variable);
    let typeKeys = Object.keys(type);

    typeKeys.every(function(key) {
      if (!varKeys.includes(key)) {
        if (name) {
          throw new TypeError(`Key '${key}' was not found in field '${name}'`)
        }
        else {
          throw new TypeError(`Key '${key}' was not found`)
        }
      }
    })
  }
}

const BasicTypes = {
  'string': String,
  'number': Number,
  'function': Function
}

export default Validator