export const checkBudget = (badget, remaining) => {
    let className;

    if( (badget / 4) > remaining ) {
        className = 'alert alert-danger';
    }  else if ((badget / 2) > remaining) {
        className = 'alert alert-warning';
    } else {
        className = 'alert alert-success';
    }

    return className;
}