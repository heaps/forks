(function(){

   //  // function scriptLoader(scripts, callback) {

   //  //     var count = scripts.length;

   //  //     function urlCallback(url) {
   //  //         return function () {
   //  //             console.log(url + ' was loaded (' + --count + ' more scripts remaining).');
   //  //             if (count < 1) {
   //  //                 callback();
   //  //             }
   //  //         };
   //  //     }

   //  //     function loadScript(url) {
   //  //         var s = document.createElement('script');
   //  //         s.setAttribute('src', url);
   //  //         s.onload = urlCallback(url);
   //  //         document.head.appendChild(s);
   //  //     }

   //  //     for (var script of scripts) {
   //  //         loadScript(script);
   //  //     }
   //  // }



   //  // function addScript( src ) {
   //  //   var script = document.createElement( 'script' );
   //  //   script.setAttribute( 'src', src );
   //  //   document.body.appendChild( script );
   //  // }

   //  // addScript('https://code.jquery.com/jquery-3.3.1.slim.min.js');
   //  // addScript('https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js');
   //  // addScript('https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js');

   //  // scriptLoader([
   //  //     'https://code.jquery.com/jquery-3.3.1.slim.min.js',
   //  //     'https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js',
   //  //     'https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js'], 
   //  //     function(){
   //  //         console.log('all done');
   //  //     });


   //  scripts = [
   //      'https://code.jquery.com/jquery-3.3.1.slim.min.js',
   //      'https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js',
   //      'https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js'
   //  ];


   // var length = scripts.length;
   // var counter = 0;

   //  function callback(url,script) {
   //      document.body.appendChild(script);
   //      console.log(url + ' was loaded'); 

   //      counter++;
   //      if (counter < length) {
   //          loadScript();
   //      }
   //  }

   //  function loadScript() {
   //      var url = scripts[counter];
   //      var script = document.createElement('script');
   //      script.setAttribute('src', url);
   //      script.onload = callback(url, script);
   //  }
   //  loadScript();


    console.log('in end.js');
    // $( document ).ready(function() {
    //     console.log('from onload');
    //     $('#target').load('x.html');  
    // });      

   
})();


