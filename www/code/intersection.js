/* Sample Call*/
var p1 = {x: 1, y: 1};
var p2 = {x: 2, y: 2};
var p3 = {x: 3, y: 3};
var p4 = {x: 4, y: 4};
console.log( intersection(p1, p2, p3, p4) );

/* Function takes end points of two lines as parameters */
function intersection( p1,  p2,  p3,  p4){

    /* try to find out the X coordinate of the intersection point */
    var m1 = math.matrix([[p1.x, p1.y], [p2.x, p2.y]]);
    var d1 = math.det( m1 );

    var m2 = math.matrix([[p1.x, 1], [p2.x, 1]]);
    var d2 = math.det( m2 );

    var m3 = math.matrix([[p3.x, p3.y], [p4.x, p4.y]]);
    var d3 = math.det( m3 );

    var m4 = math.matrix([[p3.x, 1], [p4.x, 1]]);
    var d4 = math.det( m4);
 
    var upper_matrix = math.matrix([[d1, d2], [d3, d4]]);
    var upper_final_det = math.det( upper_matrix );
 
    var m5 = math.matrix([[p1.x, 1], [p2.x, 1]]);
    var d5 = math.det( m5 );

    var m6 = math.matrix([[p1.y, 1], [p2.y, 1]]);
    var d6 = math.det( m6 );

    var m7 = math.matrix([[p3.x, 1], [p4.x, 1]]);
    var d7 = math.det( m7 );

    var m8 = math.matrix([[p3.y, 1], [p4.y, 1]]);
    var d8 = math.det( m8 );
 
    var lower_matrix = math.matrix([[d5, d6], [d7, d8]]);
    var lower_final_det = math.det( lower_matrix );
 
    /* finally calculate the X intersection point */
    var x_i = upper_final_det/lower_final_det;
 
    /* do a similar thing for the Y coord */
    d1 = math.det( m1 );

    m2 = math.matrix([[p1.y, 1], [p2.y, 1]]);
    d2 = math.det( m2 );

    m3 = math.matrix([[p3.x, p3.y], [p4.x, p4.y]]);
    d3 = math.det( m3 );

    m4 = math.matrix([[p3.y, 1], [p4.y, 1]]);
    d4 = math.det( m4 );
 
    upper_matrix = math.matrix([[d1, d2], [d3, d4]]);
    upper_final_det = math.det( upper_matrix );
 
    m5 = math.matrix([[p1.x, 1], [p2.x, 1]]);
    d5 = math.det( m5 );

    m6 = math.matrix([[p1.y, 1], [p2.y, 1]]);
    d6 = math.det( m6 );

    m7 = math.matrix([[p3.x, 1], [p4.x, 1]]);
    d7 = math.det( m7 );

    m8 = math.matrix([[p3.y, 1], [p4.y, 1]]);
    d8 = math.det( m8 );
 
    lower_matrix = math.matrix([[d5, d6], [d7, d8]]);
    lower_final_det = math.det( lower_matrix );
 
    /* calc final Y point */
    var y_i = upper_final_det/lower_final_det;
 
    /* in this case the point does not exist, because the intersection
     * happens outside the two segments' borders
     */
    if (x_i <= Math.min(p1.x, p2.x) || x_i >= Math.max(p1.x, p2.x)) {
        return false;
    }
    if (x_i <= Math.min(p3.x, p4.x) || x_i >= Math.max(p3.x, p4.x)) {
        return false;
    }

    if (isNaN(x_i) || isNaN(y_i)){
        return false;
    }
 
    /* if it gets here, point exists, all is OK */
    var point = [x_i, y_i];
    return point;
}


