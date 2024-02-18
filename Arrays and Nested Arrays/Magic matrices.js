function isMagicalMatrix(matrix) {
   
    if (matrix.length === 0 || matrix[0].length === 0) {
        return false;
    }  
    const referenceSum = matrix[0].reduce((sum, num) => sum + num, 0);
    
    for (const row of matrix) {
        const rowSum = row.reduce((sum, num) => sum + num, 0);
        if (rowSum !== referenceSum) {
            return false;
        }
    }
    
    for (let col = 0; col < matrix[0].length; col++) {
        const colSum = matrix.reduce((sum, row) => sum + row[col], 0);
        if (colSum !== referenceSum) {
            return false;
        }
    }

    
    return true;
}

isMagicalMatrix([[4, 5, 6],

    [6, 5, 4],
    
    [5, 5, 5]])