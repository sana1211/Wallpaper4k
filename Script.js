document.addEventListener('DOMContentLoaded', function () {
    const wallpapers = [
        'Wallpaper 1.jpg',
        'Wallpaper 2.jpg',
        'Wallpaper 3.jpg',
        'Wallpaper 4.jpg',
        'Wallpaper 5.jpg',
        'Wallpaper 6.jpg',
        'Wallpaper 7.jpg',
        'Wallpaper 8.jpg',
        'Wallpaper 9.jpg',
        'Wallpaper 10.jpg',
        'Wallpaper 11.jpg',
        'Wallpaper 12.jpg',
        'Wallpaper 13.jpg',
        'Wallpaper 14.jpg',
        'Wallpaper 15.jpg',
        'Wallpaper 16.jpg',
        'Wallpaper 17.jpg',
        'Wallpaper 18.jpg',
        'Wallpaper 19.jpg',
        'Wallpaper 20.jpg',
        // Add more images up to wallpaper50.jpg
        'wallpaper50.jpg'
    ];

    const wallpaperSection = document.getElementById('wallpapers');
    const popup = document.getElementById('popup');
    const popupImg = document.getElementById('popup-img');
    const downloadBtn = document.getElementById('download-btn');
    const closeBtn = document.querySelector('.close');

    wallpapers.forEach((wallpaper, index) => {
        const wallpaperDiv = document.createElement('div');
        wallpaperDiv.classList.add('wallpaper');

        const img = document.createElement('img');
        img.src = `images/${wallpaper}`;
        img.alt = `Wallpaper ${index + 1}`;
        img.addEventListener('click', () => {
            popup.style.display = 'block';
            popupImg.src = img.src;
            downloadBtn.href = img.src;
            downloadBtn.download = wallpaper;
        });

        wallpaperDiv.appendChild(img);
        wallpaperSection.appendChild(wallpaperDiv);
    });

    closeBtn.addEventListener('click', () => {
        popup.style.display = 'none';
    });

    window.addEventListener('click', (event) => {
        if (event.target == popup) {
            popup.style.display = 'none';
        }
    });
});
