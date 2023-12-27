export const handleLongContent = (title,length) => {
    if (title.length > length) {
      return `${title.slice(0, length)}...`;
    } else {
      return title;
    }
  };