export function downloadFromURL(url: string, target?: string) {
  const link = document.createElement('a');
  link.download = url.split('/').pop() || 'download';

  if (target) {
    link.target = target;
  }

  link.href = url;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  link.remove();

  // downloadFromURL(url, '_blank')
}

export function downloadImageFromURL(url: string, filename: string) {
  fetch(url)
    .then((response) => response.blob())
    .then((blob) => {
      const blobURL = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = blobURL;
      a.setAttribute('style', 'display: none');

      if (filename && filename.length) {
        a.download = filename + '.jpeg';
      }
      document.body.appendChild(a);
      a.click();
      a.remove();
    })
    .catch((error) => console.error(error));
}

export function downloadFromUrlMain(url: string, nameFile: string) {
  fetch(url)
    .then((response) => response.blob()) // Convert the response to a blob
    .then((blob) => {
      // Create a new link element
      const link = document.createElement('a');

      // Create a URL for the blob
      link.href = window.URL.createObjectURL(blob);

      // Set the download attribute to the filename you wish to use
      link.download = nameFile;

      // Append the link to the body
      document.body.appendChild(link);

      // Programmatically click the link to trigger the download
      link.click();

      // Remove the link from the body
      document.body.removeChild(link);
    })
    .catch((error) => console.error('Error downloading the file:', error));
}

export function areObjectsEqualExceptForFields(objA: any, objB: any, fieldsToExclude: string[]) {
  for (const key in objA) {
    if (fieldsToExclude.includes(key)) {
      continue;
    }

    // tslint:disable-next-line:no-collapsible-if
    if (Array.isArray(objA[key]) && Array.isArray(objB[key])) {
      if (JSON.stringify(objA[key]) !== JSON.stringify(objB[key])) {
        return false;
      }
    }

    if (typeof objA[key] === 'object' && typeof objB[key] === 'object') {
      if (!areObjectsEqualExceptForFields(objA[key], objB[key], fieldsToExclude)) {
        return false;
      }
    } else if (objA[key] !== objB[key]) {
      return false;
    }
  }

  return true;
}
