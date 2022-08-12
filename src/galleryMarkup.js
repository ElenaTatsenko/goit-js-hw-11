import { gallery } from './refs'
//const galleryMarkup = createGalleryMarkup(galleryItems);
gallery.insertAdjacentHTML('beforeend', createGalleryMarkup());

export default function createGalleryMarkup(galleryItems) {
    //galleryItems.innerHTML = '';
    return galleryItems
        .map(({
        webformatURL,
        largeImageURL,
        tags,
        likes,
        views,
        comments,
        downloads, }) => {
            return `
            <a class="gallery__link" href="${largeImageURL}">
            <div class="photo-card">
                <img src="${webformatURL}" alt="${tags}" loading="lazy" />
                <div class="info">
                    <p class="info-item">
                        <b>Likes ${likes}</b>
                    </p>
                    <p class="info-item">
                        <b>Views ${views}</b>
                    </p>
                    <p class="info-item">
                        <b>Comments ${comments}</b>
                    </p>
                    <p class="info-item">
                        <b>Downloads ${downloads}</b>
                    </p>
                </div>
            </div>
            </a>
            `
            })
        .join('');
}
 new SimpleLightbox('.gallery a', {
        captionsData: 'alt',
         captionDelay: 250,
        captionPosition: 'bottom',
    });