$(document).ready(function() {

    let url = 'https://randomuser.me/api?results=10&gender=male&nat=AU'
    let p = '';

    fetchInformation(url);


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
								<span id='email'>${person.email}</span>
				
							</div>
						
                		</div>

                	`;

                    $('#results').append(p);

                })

            })
    }

});