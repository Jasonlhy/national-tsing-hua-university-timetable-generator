function BlockReader(lines){
  var counter = 0; // currently point to next line going to test
  
  this.next = function() {
    return counter < lines.length;
  }
  
  this.nextBlock = function() {
    var head;
    
    // remove empty line between block
    // pointing to first non-empty line on the next block
    do {
      if (lines[counter] == ''){
        counter++;
      } else {
        head = counter;
        break;
      }
    } while (this.next());
    
    // reach the end if not inlcuding empty line?
    if (!this.next()){
      return [];
    } else {
      // examing how long the block is until reading empty line
      do {
        counter++;
      } while ( (this.next()) && (lines[counter] != undefined) && (lines[counter] != '') );
      
      return lines.slice(head, counter);
    }
  }
}

/*
var s = ['jason', 'ass', '', '', 'wff', 'wtf'];
var blockReader = new BlockReader(s);
console.log(blockReader.nextBlock());
console.log(blockReader.nextBlock());
*/