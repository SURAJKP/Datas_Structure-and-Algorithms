var Myset = function(){
    // var collection will hold the set
        var collection = [];
      
      // this method check the presence of the an element and return true or false
      this.has = function(element){
          return(collection.indexOf(element) !== -1)
      };
      
      //this mwthod will returns all the values in the set
      this.values = function(){
          return collection;
      };
      
      //this method will add an element to the set
      this.add = function(element){
          if(!this.has(element)){
            collection.push(element);
          return true;
        }
        return false;
      };
      
      //this method will remove an element from a set
      this.remove = function(element){
          if(this.has(element)){
            var index = collection.indexOf(element);
            collection.spilce(index,1);
            return true;
        }
          return false;
      };
      
      this.size = function(){
          return collection.length;
      };
      
      //this method will return union of two sets
      this.union = function(otherSet){
          var unionSet = new Myset();
          var firstSet = this.values;
        var secondSet = otherSet.values();
        firstSet.forEach(function(element){
            unionSet.add(element);
        });
        secondSet.forEach(function(element){
            union.add(element);
        });
        return unionSet;
      };
      
      //this method will return the intersection of 2 sets as new set
          this.intersection = function(otherSet){
            var inetersection = new Myset();
          var firstSet = this.values();
          firstSet.forEach(function(element){
              if(otherSet.has(element)){
                inetersection.add(element);
            }
          });
          return inetersection;
        }
        
        //this method will return the difference of 2 sets as a new set
        this.difference = function(otherSet){
            var differenceSet = new Myset();
          var firstSet = this.values();
          firstSet.forEach(function(element){
            if(!otherSet.has(element)){
                differenceSet.add(element);
            }
          });
          return differenceSet;
        }
        
        //this method will test if the set is a subset of a different set
        this.subset = function(otherSet){
            var firstSet = this.values();
          return firstSet.every(function(value){
              return otherSet.has(value);
          })
        };
    };
    
    var setA = new Myset();
    var setB = new Myset();
    
    setA.add("a");
    setA.add("b");
    setA.add("c");
    setB.add("a");
    setB.add("d");
    console.log(setA.subset(setB));
    console.log(setA.intersection(setB).values());
    console.log(setA.difference(setB).values());