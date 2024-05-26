const fs = require('fs');
const structure = fs.readdirSync('.');

const numbersOnly = function (fileName) {
  if (!/^\d+$/.test(fileName)) {
    return false;
  }
  if (fileName > new Date().valueOf()) {
    return false;
  }
  return true;
};

// only chooses files with numbers only, no file extension to be used for folders only
const potentialBlogs = structure.filter(numbersOnly);

// goes through every folder to structure blog posts
const blogPosts = potentialBlogs.map(function (entry) {
  const folder = fs.readdirSync(`./${entry}`);
  // filters to find txt file which has the body of the blog post
  const textFiles = folder.filter(function txtFile(file) {
    return /\.txt$/.test(file);
  });
  // there should only be 1 text document in the foler
  if (textFiles.length !== 1) {
    throw new Error(`${entry} needs one text file.`);
  }
  // reads text file and splits into lines
  const textField = fs
    .readFileSync(`./${entry}/${textFiles[0]}`)
    .toString('utf-8')
    .split('\n');

  if (!textField[textField.length - 1]) {
    textField.splice(-1);
  }

  const imageFiles = folder
    .filter(function imgFiles(image) {
      return /\.(jpg|gif|png)$/.test(image);
    })
    .map(function (imageFile) {
      return `./${entry}/${imageFile}`;
    });

  const unixTime = new Date(entry * 1000);
  const postYear = unixTime.getFullYear();
  const postMonth = unixTime.getMonth();
  const postDay = unixTime.getDate();
  const postHours = unixTime.getHours();
  const postMinutes = unixTime.getMinutes();

  const monthLookup = {
    0: 'January',
    1: 'February',
    2: 'March',
    3: 'April',
    4: 'May',
    5: 'June',
    6: 'July',
    7: 'August',
    8: 'September',
    9: 'October',
    10: 'November',
    11: 'December',
  };

  const timeStamp = `${postDay} ${monthLookup[postMonth]} ${postYear}, ${postHours}:${postMinutes}`;

  return { text: textField, images: imageFiles, timestamp: timeStamp };
});

fs.writeFileSync('blogPosts.json', JSON.stringify(blogPosts));
