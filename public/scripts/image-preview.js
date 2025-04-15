// This script will add the posibility to 
// show or hide the image preview 
// when selecting an image

const imagePickerElement = document.querySelector('#image-upload-control input');
const imagePreviewElement = document.querySelector('#image-upload-control img');

function updateImagePreview(){
    const files = imagePickerElement.files;

    if(!files || files.length === 0){
        imagePreviewElement.style.display = 'none';
        return;
    }

    const pickedFile = files[0];
    imagePreviewElement.src = URL.createObjectURL(pickedFile);
    imagePreviewElement.style.display = 'block';
}

imagePickerElement.addEventListener('change', updateImagePreview);