window.onload = ()=> {

    var btnAddClient = document.getElementById('btn-add-client');
	if(btnAddClient !== null) {
		btnAddClient.addEventListener('click', onBtnAddClient);
	}

    onLoadClients();
};

const onBtnAddClient = ()=> {
    window.location.href = '/client';
}

const onLoadClients = async ()=> {
    var urlService = `${location.protocol}//${location.host}/getClients`;
    let request = fetch(urlService, {
        method: 'POST',
        body: JSON.stringify({})
    }).catch(error => {
        console.log('Ocurrio un error en la petición del servicio: '+error);
    });

    let response = await request;
    if (response !== undefined && response.status === 200 && response.ok === true) {
        let jsonResponse = await response.json();
        debugger
    } else {
        console.log('Error de comunicación el servicio no response.');
    }
}