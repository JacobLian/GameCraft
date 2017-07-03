function hideFeed() {
    console.log('hello')
    var x = document.getElementById('hideFeed');
    if (x.style.display === 'none') {
        x.style.display = 'block';
    } else {
        x.style.display = 'none';
    }
}