function HashTable(size){
    this.buckets = Array(size);
    this.NumBuckets = this.buckets.length;
}

function HashNode(key, value, next){
    this.key = key;
    this.value = value;
    this.next = next || null;
}

HashTable.prototype.hash = function(key){
    var charSum = 0;
    for(var i = 0; i<key.length; i++){
        charSum = charSum + key.charCodeAt(1);
    }
    return charSum % this.NumBuckets;
}

HashTable.prototype.insert = function(key, value){
    var hashKey = this.hash(key);
    if(!this.buckets[hashKey]){
        this.buckets[hashKey] = new HashNode(key, value);
    }
    else if(this.buckets[hashKey].key === key){
        this.buckets[hashKey].value = value;
    }
    else{
        var current = this.buckets[hashKey];
        while(current.next){
            if(current.next.key === key){
                current.next.value = value;
                return;
            }
            current = current.next;
        }
        current.next = new HashNode(key, value);
    }
}

HashTable.prototype.get = function(key){
    var hashKey = this.hash(key);
    if(!this.buckets[hashKey]){
        return null;
    }
    else{
        current = this.buckets[hashKey];
        while(current.next){
            if(current.next.key === key){
                return current.next.value;
            }
            current = current.next;
        }
        return null;
    }

}

HashTable.prototype.retrieveAll = function(){
    var resultArr = [];
    for(var i=0;i<this.NumBuckets;i++){
        if(this.buckets[i]){
            var current = this.buckets[i];
            while(current){
                resultArr.push({key: current.key, value: current.value});
                current = current.next;
            }
        }
    }
    return resultArr;
}