const httpStatus = require('http-status');
const { User } = require('../models');
const ApiError = require('../utils/ApiError');

const getAllGroups = () => {
  return mockGroups
}

const getGroup = (groupId) => {
  return mockGroups.find(group => group.id === groupId)
}

const listItemInGroup = (itemId) => {
  return true
}

const toggleFavouriteInItem = (params) => {
  return true
}

module.exports = {
  getAllGroups,
  getGroup,
  listItemInGroup,
  toggleFavouriteInItem
};


const mockGroups = [
  {
    id: "aaaa",
    headerPicture:
      "https://assets.dorik.com/5faa728126674600114e7e6f/images/clothing_waste_2_ogvh5iqy.jpg",
    title: "SellTradeSlowFashion",
    listingsAmount: 993,
    discussionsAmount: 6434,
    location: "United States",
    membersAmount: 522,
    categoryId: "1234",
    groupAccess: 'private',
    firstTenMembers: [
      {
        firstName: "Eugenio",
        lastName: "Galioto",
        profilePicture:
          "https://media-exp1.licdn.com/dms/image/C4E03AQHNWFP087JaGg/profile-displayphoto-shrink_800_800/0/1516678907976?e=1625702400&v=beta&t=Oe3gIzZZKbpRaNCczQoUEai7d1G8Vk2hQsx6yhmJakw",
      },
      {
        firstName: "Eugenio",
        lastName: "Galioto",
        profilePicture:
          "https://media-exp1.licdn.com/dms/image/C4E03AQHNWFP087JaGg/profile-displayphoto-shrink_800_800/0/1516678907976?e=1625702400&v=beta&t=Oe3gIzZZKbpRaNCczQoUEai7d1G8Vk2hQsx6yhmJakw",
      },
      {
        firstName: "Eugenio",
        lastName: "Galioto",
        profilePicture:
          "https://media-exp1.licdn.com/dms/image/C4E03AQHNWFP087JaGg/profile-displayphoto-shrink_800_800/0/1516678907976?e=1625702400&v=beta&t=Oe3gIzZZKbpRaNCczQoUEai7d1G8Vk2hQsx6yhmJakw",
      },
      {
        firstName: "Eugenio",
        lastName: "Galioto",
        profilePicture:
          "https://media-exp1.licdn.com/dms/image/C4E03AQHNWFP087JaGg/profile-displayphoto-shrink_800_800/0/1516678907976?e=1625702400&v=beta&t=Oe3gIzZZKbpRaNCczQoUEai7d1G8Vk2hQsx6yhmJakw",
      },
      {
        firstName: "Eugenio",
        lastName: "Galioto",
        profilePicture:
          "https://media-exp1.licdn.com/dms/image/C4E03AQHNWFP087JaGg/profile-displayphoto-shrink_800_800/0/1516678907976?e=1625702400&v=beta&t=Oe3gIzZZKbpRaNCczQoUEai7d1G8Vk2hQsx6yhmJakw",
      },
    ]
  },
  {
    id: "bbbb",
    headerPicture:
      "https://assets.dorik.com/5faa728126674600114e7e6f/images/clothing_waste_2_ogvh5iqy.jpg",
    title: "SellTradeSlowFashion",
    listingsAmount: 993,
    discussionsAmount: 6434,
    location: "United States",
    membersAmount: 522,
    categoryId: "6789",
    groupAccess: 'private',
    firstTenMembers: [
      {
        firstName: "Eugenio",
        lastName: "Galioto",
        profilePicture:
          "https://media-exp1.licdn.com/dms/image/C4E03AQHNWFP087JaGg/profile-displayphoto-shrink_800_800/0/1516678907976?e=1625702400&v=beta&t=Oe3gIzZZKbpRaNCczQoUEai7d1G8Vk2hQsx6yhmJakw",
      },
      {
        firstName: "Eugenio",
        lastName: "Galioto",
        profilePicture:
          "https://media-exp1.licdn.com/dms/image/C4E03AQHNWFP087JaGg/profile-displayphoto-shrink_800_800/0/1516678907976?e=1625702400&v=beta&t=Oe3gIzZZKbpRaNCczQoUEai7d1G8Vk2hQsx6yhmJakw",
      },
      {
        firstName: "Eugenio",
        lastName: "Galioto",
        profilePicture:
          "https://media-exp1.licdn.com/dms/image/C4E03AQHNWFP087JaGg/profile-displayphoto-shrink_800_800/0/1516678907976?e=1625702400&v=beta&t=Oe3gIzZZKbpRaNCczQoUEai7d1G8Vk2hQsx6yhmJakw",
      },
      {
        firstName: "Eugenio",
        lastName: "Galioto",
        profilePicture:
          "https://media-exp1.licdn.com/dms/image/C4E03AQHNWFP087JaGg/profile-displayphoto-shrink_800_800/0/1516678907976?e=1625702400&v=beta&t=Oe3gIzZZKbpRaNCczQoUEai7d1G8Vk2hQsx6yhmJakw",
      },
      {
        firstName: "Eugenio",
        lastName: "Galioto",
        profilePicture:
          "https://media-exp1.licdn.com/dms/image/C4E03AQHNWFP087JaGg/profile-displayphoto-shrink_800_800/0/1516678907976?e=1625702400&v=beta&t=Oe3gIzZZKbpRaNCczQoUEai7d1G8Vk2hQsx6yhmJakw",
      },
    ]
  },
  {
    id: "cccc",
    headerPicture:
      "https://assets.dorik.com/5faa728126674600114e7e6f/images/clothing_waste_2_ogvh5iqy.jpg",
    title: "SellTradeSlowFashion",
    listingsAmount: 993,
    discussionsAmount: 6434,
    location: "United States",
    membersAmount: 522,
    categoryId: "abcd",
    groupAccess: 'private',
    firstTenMembers: [
      {
        firstName: "Eugenio",
        lastName: "Galioto",
        profilePicture:
          "https://media-exp1.licdn.com/dms/image/C4E03AQHNWFP087JaGg/profile-displayphoto-shrink_800_800/0/1516678907976?e=1625702400&v=beta&t=Oe3gIzZZKbpRaNCczQoUEai7d1G8Vk2hQsx6yhmJakw",
      },
      {
        firstName: "Eugenio",
        lastName: "Galioto",
        profilePicture:
          "https://media-exp1.licdn.com/dms/image/C4E03AQHNWFP087JaGg/profile-displayphoto-shrink_800_800/0/1516678907976?e=1625702400&v=beta&t=Oe3gIzZZKbpRaNCczQoUEai7d1G8Vk2hQsx6yhmJakw",
      },
      {
        firstName: "Eugenio",
        lastName: "Galioto",
        profilePicture:
          "https://media-exp1.licdn.com/dms/image/C4E03AQHNWFP087JaGg/profile-displayphoto-shrink_800_800/0/1516678907976?e=1625702400&v=beta&t=Oe3gIzZZKbpRaNCczQoUEai7d1G8Vk2hQsx6yhmJakw",
      },
      {
        firstName: "Eugenio",
        lastName: "Galioto",
        profilePicture:
          "https://media-exp1.licdn.com/dms/image/C4E03AQHNWFP087JaGg/profile-displayphoto-shrink_800_800/0/1516678907976?e=1625702400&v=beta&t=Oe3gIzZZKbpRaNCczQoUEai7d1G8Vk2hQsx6yhmJakw",
      },
      {
        firstName: "Eugenio",
        lastName: "Galioto",
        profilePicture:
          "https://media-exp1.licdn.com/dms/image/C4E03AQHNWFP087JaGg/profile-displayphoto-shrink_800_800/0/1516678907976?e=1625702400&v=beta&t=Oe3gIzZZKbpRaNCczQoUEai7d1G8Vk2hQsx6yhmJakw",
      },
    ]
  },
  {
    id: "dddd",
    headerPicture:
      "https://assets.dorik.com/5faa728126674600114e7e6f/images/clothing_waste_2_ogvh5iqy.jpg",
    title: "SellTradeSlowFashion",
    listingsAmount: 993,
    discussionsAmount: 6434,
    location: "United States",
    membersAmount: 522,
    categoryId: "efgh",
    groupAccess: 'private',
    firstTenMembers: [
      {
        firstName: "Eugenio",
        lastName: "Galioto",
        profilePicture:
          "https://media-exp1.licdn.com/dms/image/C4E03AQHNWFP087JaGg/profile-displayphoto-shrink_800_800/0/1516678907976?e=1625702400&v=beta&t=Oe3gIzZZKbpRaNCczQoUEai7d1G8Vk2hQsx6yhmJakw",
      },
      {
        firstName: "Eugenio",
        lastName: "Galioto",
        profilePicture:
          "https://media-exp1.licdn.com/dms/image/C4E03AQHNWFP087JaGg/profile-displayphoto-shrink_800_800/0/1516678907976?e=1625702400&v=beta&t=Oe3gIzZZKbpRaNCczQoUEai7d1G8Vk2hQsx6yhmJakw",
      },
      {
        firstName: "Eugenio",
        lastName: "Galioto",
        profilePicture:
          "https://media-exp1.licdn.com/dms/image/C4E03AQHNWFP087JaGg/profile-displayphoto-shrink_800_800/0/1516678907976?e=1625702400&v=beta&t=Oe3gIzZZKbpRaNCczQoUEai7d1G8Vk2hQsx6yhmJakw",
      },
      {
        firstName: "Eugenio",
        lastName: "Galioto",
        profilePicture:
          "https://media-exp1.licdn.com/dms/image/C4E03AQHNWFP087JaGg/profile-displayphoto-shrink_800_800/0/1516678907976?e=1625702400&v=beta&t=Oe3gIzZZKbpRaNCczQoUEai7d1G8Vk2hQsx6yhmJakw",
      },
      {
        firstName: "Eugenio",
        lastName: "Galioto",
        profilePicture:
          "https://media-exp1.licdn.com/dms/image/C4E03AQHNWFP087JaGg/profile-displayphoto-shrink_800_800/0/1516678907976?e=1625702400&v=beta&t=Oe3gIzZZKbpRaNCczQoUEai7d1G8Vk2hQsx6yhmJakw",
      },
    ]
  },
]