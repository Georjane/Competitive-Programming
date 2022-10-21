function gradingStudents(grades) {
    let res = []
    grades.forEach(grade => {
        if(grade < 38){
            res.push(grade)
        } else {
            let nextMultipleOf5 = grade + 5 - (grade % 5)
            if(nextMultipleOf5 - grade < 3){
                res.push(nextMultipleOf5)
            } else {
                res.push(grade)
            }
        }
    });
    return res;
}
