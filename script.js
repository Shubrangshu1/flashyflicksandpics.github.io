// Open Lightbox
function openLightbox() {
    document.getElementById('lightbox').style.display = 'block';
}

// Close Lightbox
function closeLightbox() {
    document.getElementById('lightbox').style.display = 'none';
}

// Display Image in Lightbox
function showImage(index) {
    const images = [
        'wallpaper1.jpg',
        'wallpaper2.jpg',
        'wallpaper3.jpg'
    ];
    const captions = [
        'Photography 1 Caption',
        'Photography 2 Caption',
        'Photography 3 Caption'
    ];

    document.getElementById('lightbox-img').src = images[index - 1];
    document.getElementById('caption').innerText = captions[index - 1];
}
