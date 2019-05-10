function BST(value){
    this.value = value;
    this.left = null;
    this.right = null;
}

BST.prototype.insert = function(value){
    if(value <= this.value){
        if(!this.left){
            this.left = new BST(value);
        }
        else{
            this.left.insert(value);
        }
    }
    else if(value > this.value){
        if(!this.right){
            this.right = new BST(value);
        }
        else{
            this.right.insert(value);
        }
    }
}

BST.prototype.contains = function(value){
    if(this.value === value){
        return true;
    }
    else if(value<=this.value){
        if(!this.left){
            return false;
        }
        else{
            return this.left.contains(value);
        }
    }
    else if(value>this.value){
        if(!this.right){
            return false;
        }
        else{
            return this.right.contains(value);
        }
    }
}

BST.prototype.depthFirstTraversal = function(iteratorFunc, order){
    if(order === 'pre-order')
        iteratorFunc(this.value);
    if(this.left){
        this.left.depthFirstTraversal(iteratorFunc, order);
    }
    if(order === 'in-order')
        iteratorFunc(this.value);
    if(this.right){
        this.right.depthFirstTraversal(iteratorFunc, order);
    }
    if(order === 'post-order')
        iteratorFunc(this.value);
}

BST.prototype.breadthFirstTraversal = function(iteratorFunc){
    var queue = [this];
    while(queue.length>0){
        var node = queue.shift();
        iteratorFunc(node);
        if(node.left){
            queue.push(node.left);
        }
        if(node.right){
            queue.push(node.right);
        }
    }
}

BST.prototype.getMinVal = function(value){
    if(this.left){
        return this.left.getMinVal();
    }
    return this.value;
}

BST.prototype.getMaxVal = function(value){
    if(this.right){
        return this.right.getMaxVal();
    }
    return this.value;
}