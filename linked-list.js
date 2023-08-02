/** Node: node for a singly linked list. */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/** LinkedList: chained together nodes. */

class LinkedList {
  constructor(vals = []) {
    this.head = null;
    this.tail = null;
    this.length = 0;

    for (let val of vals) this.push(val);
  }

  /** push(val): add new value to end of list. */

  push(val) {  
    if(this.head === null){
      this.head = new Node(val);
      this.tail = this.head;
      this.length ++;
    }
    else {
      this.tail.next = new Node(val);
      this.tail = this.tail.next;
      this.length ++;
    }
  }

  /** unshift(val): add new value to start of list. */

  unshift(val) {
    if(this.head === null){
      this.head = new Node(val);
      this.tail = this.head;
      this.length ++;
    }
    else{
      let newNode = new Node(val);
      newNode.next = this.head;
      this.head = newNode;
      this.length++;
    }
  }

  /** pop(): return & remove last item. */

  pop() {
    if(this.head === null) return null;
    else if(this.length ===1){
      let lastNode = this.head.val;
      this.head = null;
      this.tail = null;
      this.length = 0;
      return lastNode;
    }
    else{
      let current = this.head;
      while(current.next != this.tail){
        current = current.next;
      }
      let lastNode = this.tail.val;
      current.next = null;
      this.tail = current;
      this.length --;
      return lastNode;
    }
  }

  /** shift(): return & remove first item. */

  shift() {
    if(this.head === null) return null;
    else if(this.length ===1){
      let lastNode = this.head.val;
      this.head = null;
      this.tail = null;
      this.length = 0;
      return lastNode;
    }
    else{
      let lastNode = this.head.val;
      this.head = this.head.next;
      this.length--;
      return lastNode;
    }

  }

  /** getAt(idx): get val at idx. */

  getAt(idx) {
    if(idx > this.length || this.length === 0) return null;
    let current = this.head;
    
    while(idx>0){
      current = current.next
      idx --;
    }
    return current.val;
  }

  /** setAt(idx, val): set val at idx to val */

  setAt(idx, val) {
    if(!(idx > this.length || this.length === 0)){
      let current = this.head;
      
      while(idx>0){
        current = current.next
        idx --;
      }
      current.val = val;
    }
  }

  /** insertAt(idx, val): add node w/val before idx. */

  insertAt(idx, val) {
    if(!(idx > this.length)){  
      if(this.head === null){
        this.head = new Node(val);
        this.tail = this.head;
        this.length ++;
      }
      else if(idx ===1){
        this.head = new Node(val);
        this.head.next = this.tail;
        this.length++;
      }
      else{
        let current = this.head;
        
        while(idx>1){
          current = current.next
          idx --;
        }
        let newNode = new Node(val);
        newNode.next = current.next;
        current.next = newNode;
        if(newNode.next === null) this.tail = newNode;
        this.length++;
      }
    }
  }

  /** removeAt(idx): return & remove item at idx, */

  removeAt(idx) {
    if(idx > this.length || this.length === 0) return null;
    if(this.length === 1){
      let res = this.head.val;
      let lastNode = this.head.val;
      this.head = null;
      this.tail = null;
      this.length = 0;
      return res;
    }
    let current = this.head;
    
    while(idx>1){
      current = current.next
      idx --;
    }
    let res = current.next.val;
    current.next = current.next.next;
    this.length--;
    return res;
  }

  /** average(): return an average of all values in the list */

  average() {
    if(this.length===0) return 0;
    let total = 0;
    let current = this.head;
    while(current.next!=null){
      total += current.val;
      current = current.next;
    }
    total += current.val;
    return total/this.length;
  }
}

//module.exports = LinkedList;
