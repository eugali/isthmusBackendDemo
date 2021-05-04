const httpStatus = require('http-status');
const pick = require('../utils/pick');
const ApiError = require('../utils/ApiError');
const catchAsync = require('../utils/catchAsync');
const { groupService } = require('../services');

const getAllGroups = catchAsync(async (req, res) => {
  const groups = await groupService.getAllGroups();
  res.send(groups);
}) // get

const getGroup = catchAsync(async (req, res) => {
  const group = await groupService.getGroup(req.params.groupId);
  if (!group) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Group not found');
  }
  res.send(group);

}) // get

const listItemInGroup = catchAsync(async (req, res) => {
  res.send(true)
}) // put

const toggleFavouriteInItem = catchAsync(async (req, res) => {
  res.send(true)
}) // patch

module.exports = {
  getAllGroups,
  getGroup,
  listItemInGroup,
  toggleFavouriteInItem
};
