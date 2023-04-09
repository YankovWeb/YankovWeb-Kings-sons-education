const patern = /\.(jpg|jpeg|png|webp|avif|gif|svg)$/;
export const isImage = (url) => patern.test(url);
