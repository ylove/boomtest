const getTopFive = async function() {
	const response = await fetch('/search');
	const topUsers = await response.json();

	const header = document.querySelector('.header');
	header.innerHTML = 'Retrieving data...';

	if( topUsers ) {	
	
		const outerContainer = document.createElement('div');
		outerContainer.className = 'outer-container';
		document.body.appendChild(outerContainer);

		topUsers.forEach( (user) => {
			const container = document.createElement('div');
			container.className = 'user-container';
			
			const img = document.createElement('img');
			img.className = 'user-avatar';
			img.src = user.profile_image_url;
			img.alt = user.name;
			container.appendChild(img);
			
			const userLabel = document.createElement('h3');
			userLabel.innerHTML = `@${user.username}`;
			container.appendChild(userLabel);

			const followerCountLabel = document.createElement('h3');
			followerCountLabel.innerHTML = `${user.public_metrics.followers_count.toLocaleString('en-us')} followers`;
			container.appendChild(followerCountLabel);
			
			const userNameLabel = document.createElement('h5');
			userNameLabel.innerHTML = user.name;
			container.appendChild(userNameLabel);

			outerContainer.appendChild(container);
			document.querySelector('.header').innerHTML = 'Here are the five most famous users who tweeted about PlayXFL or XFL.';			
		} );
	
		const refreshButton = document.createElement('button');
		refreshButton.addEventListener('click', (e) => { refreshTopFive(); });
		refreshButton.innerHTML = 'Click to refresh';
		refreshButton.className = 'refresh-btn';
		outerContainer.appendChild(refreshButton);
	} else {
		header.innerHTML = 'Most famous users could not be retrieved.';
	}

};

getTopFive();

const refreshTopFive = () => {
	document.querySelector('.header').innerHTML = 'Refreshing...';
	const topContainer = document.querySelector('.outer-container');
	document.body.removeChild(topContainer);

	getTopFive();
};

