let counter = 1;
const getData = function(){
    console.log("API Hits.......", counter++ )
};

const debouncing = function(fn,d) {
    let timer;
    return function(){
      //You can set value of ctx and args to make sure same values are passing
      // let ctx = this,
      //     args = arguments;
          clearTimeout(timer);
          timer = setTimeout(function () {getData()}, d);
    }

}

const debouncingSearch =  debouncing(getData,300)
