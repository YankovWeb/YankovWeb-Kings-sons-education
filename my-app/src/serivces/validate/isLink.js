const urlPattern = /^(http|https):\/\/[^\s/$.?#].[^\s]*$/;
export const isLink = (inputValue) => urlPattern.test(inputValue);
