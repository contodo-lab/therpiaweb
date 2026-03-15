document.addEventListener("DOMContentLoaded", function () {
    const footerContainer = document.getElementById("site-footer");

    // Cargar footer en las páginas que lo soliciten
    if (footerContainer) {
        fetch('/partials/footer.html')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.text();
            })
            .then(data => {
                footerContainer.innerHTML = data;
            })
            .catch(error => {
                console.error('There has been a problem with your fetch operation:', error);
            });
    }
});
