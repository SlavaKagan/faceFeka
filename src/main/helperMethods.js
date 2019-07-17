import { WhatsOnYourMindTextAreaPlaceHolder } from './constants';

export const generateHourString = (date) => {
  return `${date.getHours()}:${date.getMinutes()}`;
};

export const generateDateString = (date) => {
  return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear().toString().substr(2, 2)}`;
};

export const generateCreatePostTextAreaPlaceHolder = (firstName) => {
  return `${WhatsOnYourMindTextAreaPlaceHolder}, ${firstName}?`;
};

export const getItemsArrayFromEnum = (enumObject) => {
  return Object.values(enumObject);
};

/*
export const changePrivacySelected = (clickedPrivacy) => {
  if (!clickedPrivacy.classList.contains(selectedClass)) {
    toggleElementSelected(domElements.createPostOptionVisibilityDropdownGlobal);
    toggleElementSelected(domElements.createPostOptionVisibilityDropdownPrivate);
  }
  toggleElementVisibility(domElements.createPostOptionVisibilityDropdown);
};
*/

/*
export const uploadPictures = () => {
  const allPictures = domElements.createPostOptionPhotosUploadButton.files;
  const amount = allPictures.length;
  const maxImagesPerLine = 3;
  const attachments = [];

  if (amount > 6) {
    alert('You can upload max 6 pictures !');
    return;
  }

  const readAndUploadImageDOM = (picture, currentIndex) => {
    if ( /\.(jpe?g|png|gif)$/i.test(picture.name) ) {
      const reader = new FileReader();

      reader.onload = () => {
        const image = new Image();
        if (amount > 3) {
          image.width = currentIndex < (amount - maxImagesPerLine) ?
            userPostContainerSize / (amount - maxImagesPerLine) : userPostContainerSize / maxImagesPerLine
        } else {
          image.width = userPostContainerSize / amount;
        }
        image.src = reader.result.toString();
        // domElements.userPostContentAllAttachments.appendChild(image);
        attachments.push(image);
      };
      reader.readAsDataURL(picture);
    } else {
      alert("Only JPEG/PNG/GIF supported!");
    }
  };

  if (allPictures) {
	// try do map here
    [].forEach.call(allPictures, readAndUploadImageDOM);
  }
};
*/

/*
export const searchAndFilter = () => {
  const input = domElements.navSearchBar;
  const filter = input.value.toLowerCase();
  const elements = domElements.allFriendsNamesInSearchBar;
  let isResultsFound = false;

  const showOrHideDropdown = (filter, isResultsFound) => {
    if (!filter || !isResultsFound) {
      removeVisibilityClass(domElements.searchFriendsDropdown);
    } else {
      addVisibilityClass(domElements.searchFriendsDropdown)
    }
  };

  for (let i = 0; i < elements.length; i++) {
    const name = elements[i].firstElementChild.textContent;
    let styleDisplay = 'none';

    if (name) {
      if (!filter) {
        styleDisplay = 'none';
      } else if (filter === '*' || name.toLowerCase().indexOf(filter) > -1) {
        styleDisplay = 'flex';
        isResultsFound = true;
      }
      elements[i].parentElement.style.display = styleDisplay;
    }

    showOrHideDropdown(filter, isResultsFound);
  }
};*/
