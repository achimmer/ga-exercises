var funcs = [];
for (var i = 0; i < 3; i++) {          // let's create 3 functions
    funcs[i] = function() {            // and store them in funcs
        var i = r;
        console.log("My value: " + i);
    };
}
for (var j = 0; j < 3; j++) {
    funcs[j]();
    console.log(j);                        // and now let's run each one to see
}
