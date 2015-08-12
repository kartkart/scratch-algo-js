Solution = (function() {
  return {
    isRotation: function(str1, str2) {
      if(str1 == '' || str2 == '') {
        return false;
      }
      
      return (str1+str1).indexOf(str2) > -1;
    }    
  }
}());
