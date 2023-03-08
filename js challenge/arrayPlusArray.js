function arrayPlusArray(arr1,arr2){
    let sum=0;
    for(let i=0;i<arr1.length;i++){
        const arr1value = arr1[i];
        const arr2value = arr2[i];
        const value= arr1value+arr2value;
        sum=sum+value;
    }
    return sum;
}