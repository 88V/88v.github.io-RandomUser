$(document).ready(function() {

    let radioGender = 'ALL';
    let selectedNationality = 'AU';
    let url = 'https://randomuser.me/api?results=10&gender=' + radioGender + '&nat=' + selectedNationality;
    let p = '';
    let loadMore;


    fetchInformation(url);

    //radio button listener - delete here if code breaks

    $("input[type='radio']").click(function() {

        //get value of radio button

        $('#results').empty();

        radioGender = $("input[name='gender']:checked").val();

        url = 'https://randomuser.me/api?results=10&gender=' + radioGender + '&nat=' + selectedNationality;


        if (radioGender) {
            fetchInformation(url)
        }


    });


    //added this code before things broke


    // event listener for select box -nationality

    $('#country').on('change', function() {


        //get value from user selection

        $('#results').empty();

        selectedNationality = $("#country option:selected").text();

        url = 'https://randomuser.me/api?results=10&gender=' + radioGender + '&nat=' + selectedNationality;

        fetchInformation(url);



    });



    function fetchInformation(url) {
        fetch(url)
            .then((response) => (response.json()))
            .then(function(data) {

                data.results.forEach(person => {

                    p = `<div class ="card">
                            

                            <div class = card-body>

                                <img src="${person.picture.medium}" class="rounded">
                                <span id='title'> ${person.name.title}.</span>
                                <span> ${person.name.first}</span>
                                <span> ${person.name.last}</span>


                                <span id='country'> <svg class="bi bi-flag" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                              <path fill-rule="evenodd" d="M3.5 1a.5.5 0 01.5.5v13a.5.5 0 01-1 0v-13a.5.5 0 01.5-.5z" clip-rule="evenodd"/>
                              <path fill-rule="evenodd" d="M3.762 2.558C4.735 1.909 5.348 1.5 6.5 1.5c.653 0 1.139.325 1.495.562l.032.022c.391.26.646.416.973.416.168 0 .356-.042.587-.126a8.89 8.89 0 00.593-.25c.058-.027.117-.053.18-.08.57-.255 1.278-.544 2.14-.544a.5.5 0 01.5.5v6a.5.5 0 01-.5.5c-.638 0-1.18.21-1.734.457l-.159.07c-.22.1-.453.205-.678.287A2.719 2.719 0 019 9.5c-.653 0-1.139-.325-1.495-.562l-.032-.022c-.391-.26-.646-.416-.973-.416-.833 0-1.218.246-2.223.916a.5.5 0 11-.515-.858C4.735 7.909 5.348 7.5 6.5 7.5c.653 0 1.139.325 1.495.562l.032.022c.391.26.646.416.973.416.168 0 .356-.042.587-.126.187-.068.376-.153.593-.25.058-.027.117-.053.18-.08.456-.204 1-.43 1.64-.512V2.543c-.433.074-.83.234-1.234.414l-.159.07c-.22.1-.453.205-.678.287A2.719 2.719 0 019 3.5c-.653 0-1.139-.325-1.495-.562l-.032-.022c-.391-.26-.646-.416-.973-.416-.833 0-1.218.246-2.223.916a.5.5 0 01-.554-.832l.04-.026z" clip-rule="evenodd"/>
                            </svg> ${person.location.city}, &nbsp${person.location.country}</span>

                                                            <span id='email'> <svg class="bi bi-envelope-fill" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                              <path d="M.05 3.555L8 8.414l7.95-4.859A2 2 0 0014 2H2A2 2 0 00.05 3.555zM16 4.697l-5.875 3.59L16 11.743V4.697zm-.168 8.108L9.157 8.879 8 9.586l-1.157-.707-6.675 3.926A2 2 0 002 14h12a2 2 0 001.832-1.195zM0 11.743l5.875-3.456L0 4.697v7.046z"/>
                            </svg> &nbsp${person.email}</span>
                                

                
                            </div>
                        
                        </div>

                    `;

                    $('#results').append(p);

                });

                loadMore = `<button id='load' class ='btn btn-primary'>Load 10 More</button>`

                $('#results').append(loadMore);
                $('#load').on('click', function() {

                    fetchInformation(url);
                    $(this).remove();

                });

            });
    }

});