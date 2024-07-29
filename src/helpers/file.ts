export function getBase64Image(url: string) {
  return new Promise((resolve, reject) => {
    const img = new Image();

    img.setAttribute('crossOrigin', 'anonymous');

    img.onload = () => {
      const canvas = document.createElement('canvas');
      canvas.width = img.width;
      canvas.height = img.height;

      const ctx = canvas.getContext('2d');
      if (ctx) {
        ctx.drawImage(img, 0, 0);
        ctx.fillStyle = 'red';

        return resolve(canvas.toDataURL('image/png'));
      }

      reject(new Error('Failed to get canvas context'));
    };
    img.onerror = (error) => {
      return reject(error);
    };

    img.src = url;
  });

  // logo = await getBase64Image('/assets/img/logo.png'),
}

export enum FileType {
  Photo = 'photo',
  Video = 'video',
  File = 'file',
}

export function parseFileType(extension: string): FileType {
  let type = extension.replace(/\/.*/g, '');
  if (type === 'image') {
    type = 'photo';
  }
  switch (type) {
    case FileType.Photo:
    case FileType.Video:
      break;
    default:
      type = 'file';
      break;
  }

  return <any>type;
}

export function checkFileTypeImage(file: any) {
  if (file.raw) {
    return parseFileType(file.raw.type) === FileType.Photo;
  }

  return file.fileType === FileType.Photo;
}
