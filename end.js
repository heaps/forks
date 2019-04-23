
var abel = {};

function loadPage(page){
    console.log('loading page: ' + page + '.html');
    $('#target').load(page + '.html');
    abel.history.push('/#/'+page, { page : page });
}

$(window).on('hashchange', function() {
    console.log('hash changed');
    $('#target').load(abel.history.location.state.page + '.html');
    //abel.history.push('/#/'+page, { page : page });
});   

(function(){

    $( document ).ready(function() {

        // setup video modal window
        // ------------------------------------
        CreateVideoModalWindow();

        // destroy video when user closes modal window
        $('#modalTarget').on('hidden.bs.modal', function (e) {
            document.getElementById('modalVideo').src = '';
        });


        // setup history navigation
        // ------------------------------------
        const history = History.createBrowserHistory();
        abel.history = history;
         
        // Get the current location.
        const location = history.location
         
        // Listen for changes to the current location.
        const unlisten = history.listen((location, action) => {
          // location is an object like window.location
          console.log(action, location.pathname, location.state)
        })
        
        // Use push, replace, and go to navigate around.
        // history.push('/home', { some: 'state' })

        if(window.location.hash) {
            //Puts hash in variable, and removes /#
            console.log(hash);
            var hash = window.location.hash.substring(2); 
            loadPage(hash);            
        } else {
            console.log('load home page');
            loadPage('home');
            //$('#target').load('home.html');            
        }        

    });   

   
})();


// modal video
// ------------------------------------

function CreateVideoModalWindow(){
    var html = `
        <!-- modal window -->
        <div class="modal fade bd-example-modal-lg" id="modalTarget" tabindex="-1" role="dialog" aria-labelledby="ariaLabel" aria-hidden="true">
          <div class="modal-dialog modal-dialog-centered modal-lg" role="document">
            <div class="modal-content">

              <!-- responsive youtube video -->
              <div class="embed-responsive embed-responsive-16by9">
                <iframe src="" id="modalVideo" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
              </div>

            </div><!-- /.modal-content -->
          </div>
        </div><!-- /.modal -->
    `;
    document.getElementById('modal').innerHTML = html;
}

// show video on modal window
function showVideo(id){
    var source = "https://www.youtube.com/embed/" + id;
    var element = document.getElementById('modalVideo');
    document.getElementById('modalVideo').src = source;
    $('#modalTarget').modal('toggle');            
}


