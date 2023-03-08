function getCount(str) {
    let vowelsCount = 0;
  
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    const strArr = str.split('');
  
    strArr.forEach((el) => {
      for (let i = 0; i < vowels.length - 1; i++) {
        if (el === vowels[i]) {
          vowelsCount++;
        }
      }
    });
  
    return vowelsCount;
  }