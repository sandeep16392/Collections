function LinkedList(){
    this.head = null;
    this.tail = null;
  }
  
  function Node(value, next, prev){
    this.value = value;
    this.next = next;
    this.prev = prev;
  }
  
  LinkedList.prototype.addToHead = function(value){
    var newNode = new Node(value, this.head, null);
    if(this.head){
      this.head.prev = newNode;
    }
    else
      this.tail = newNode;
  
    this.head = newNode;
  }
  
  LinkedList.prototype.addToTail = function(value){
    var newNode = new Node(value, null, this.tail);
    if(this.tail){
      this.tail.next = newNode;
    }
    else  
      this.head = newNode;
    
    this.tail = newNode;
  }
  
  LinkedList.prototype.removeFromHead = function(){
    if(!this.head){
      return null;
    }
    var value = this.head.value;
    this.head = this.head.next;
    if(this.head)
    {
        this.head.prev = null;
    }
    else{
      this.tail = null;
    }
    return value;
  }
  
  LinkedList.prototype.removeFromTail = function(){
    if(!this.tail){
      return null;
    }
    var value = this.tail.value;
    this.tail = this.tail.prev;
    if(this.tail){
      this.tail.next = null;
    }
    else{
      this.head = null;
    }
    return value;
  }

  LinkedList.prototype.search = function(searchValue){
      var current = this.head;
      while(current){
        if(current.value === searchValue){
            return current.value;
        }
        current = current.next;
      }
      return null;
  }

  LinkedList.prototype.indexOf = function(value){
      var current = this.head;
      var result = [];
      var i=0;
      while(current){
          if(current.value == value){
              result.push(i);
          }
          current = current.next;
          i++;
      }
      return result;
  }