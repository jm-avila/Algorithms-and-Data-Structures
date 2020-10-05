class HashTable {
  constructor(size = 53) {
    this.keyMap = new Array(size);
  }

  _strHash(key) {
    let total = 0;
    let prime = 31;
    for (let i = 0; i < Math.min(key.length, 100); i++) {
      let char = key[i];
      let value = char.charCodeAt(0) - 96;
      total = (total * prime + value) % this.keyMap.length;
    }
    return Math.abs(total);
  }

  validateKeyType(key) {
    if (typeof key !== typeof "") throw "Key must be a string.";
  }
  set(key, value) {
    this.validateKeyType(key);
    const hashedKey = this._strHash(key);

    if (!this.keyMap[hashedKey]) {
      this.keyMap[hashedKey] = [[key, value]];
    } else {
      let keyIndex = -1;

      this.keyMap[hashedKey].some(([k], i) => {
        if (k === key) keyIndex = i;
      });

      if (keyIndex >= 0) {
        this.keyMap[hashedKey][keyIndex][1] = value;
      } else {
        this.keyMap[hashedKey].push([key, value]);
      }
    }
  }

  get(key) {
    this.validateKeyType(key);
    const hashedKey = this._strHash(key);
    let value;

    if (this.keyMap[hashedKey])
      value = this.keyMap[hashedKey].find(([k]) => k === key);

    return value && value[1];
  }

  keys() {
    return this.pairList(true);
  }

  values() {
    return this.pairList(false);
  }

  pairList(isKey) {
    const i = isKey ? 0 : 1;
    return this.keyMap.reduce((list, slot) => {
      if (slot) slot.forEach((pair) => list.push(pair[i]));

      return list;
    }, []);
  }
}

const hashTable = new HashTable();

hashTable.set("Cool", "Coolest");
hashTable.set("Happy", "Happiest");
hashTable.set("Ok", "k");
hashTable.set("Red", "apple");
hashTable.set("Green", "Pear");

console.log(hashTable.get("Cool"));

console.log(hashTable.keys());
console.log(hashTable.values());
