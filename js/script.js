window.onload = () => {
    var iframe = document.querySelectorAll('myIframe');

    window.addEventListener('message', function(event) {
        if (event.data && event.data.url) {
            history.pushState({
                url: event.data.url
            }, '', event.data.url);

            document.location.href = event.data.url;
        }
    });
}