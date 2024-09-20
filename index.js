let array = [
  {
    id: 1,
  },
  {
    id: 2,
  },
  {
    id: 3,
  },
  {
    id: 10,
  },
  {
    id: 7,
  },
];

function createObjectForSortArray(arr) {
  if (!arr) {
    return;
  }
  let obj = {
    newArr: arr,
    sortArr: function () {
      let newSortArr = this.newArr.sort((a, b) => (a.id > b.id ? 1 : -1));

      return Object.freeze(newSortArr);
    },
  };

  return console.log(obj.sortArr());
}

createObjectForSortArray(array);
