$(document).ready(function() {

    let radioGender = 'male';
    let selectedNationality ='AU';
    let url = 'https://randomuser.me/api?results=10&gender='+ radioGender + '&nat='+ selectedNationality;
    let p = '';
    let loadMore;


    fetchInformation(url);

    //radio button listener - delete here if code breaks

$("input[type='radio']").click(function(){

    //get value of radio button

    $('#results').empty();

    radioGender = $("input[name='gender']:checked"). val();

    url = 'https://randomuser.me/api?results=10&gender='+ radioGender + '&nat='+ selectedNationality;


    if(radioGender) {
        fetchInformation(url)
    }


});


//added this code before things broke


// event listener for select box -nationality

$('#country').on('change',function(){


    //get value from user selection

   $('#results').empty(); 

  selectedNationality = $("#country option:selected").text();

url = 'https://randomuser.me/api?results=10&gender='+ radioGender + '&nat='+ selectedNationality;

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
                                <span id='country'> ${person.location.country}</span>
								<span id='email'>${person.email}</span>
				
							</div>
						
                		</div>

                	`;

                    $('#results').append(p);

                });

                loadMore = `<button id='load' class ='btn btn-primary'>Load 10 More</button>`

                $('#results').append(loadMore);
                $('#load').on('click', function(){

                        fetchInformation(url);
                        $(this).remove();

                });

            });
    }

});