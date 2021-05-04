const express = require('express');
const groupController = require('../../controllers/group.controller');

const router = express.Router();

router.get('/', groupController.getAllGroups);
router.get('/:groupId', groupController.getGroup);
router.put('/item/:itemId', groupController.listItemInGroup);
router.patch('/item/:itemId',  groupController.toggleFavouriteInItem);

module.exports = router;
