'use strict';
const axios = require('axios');
const constants = require('../utils/constants.js');
const { v4: uuidv4 } = require('uuid');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    try {
      const response = await axios.get(constants.TIMEZONE_URL);
      const timezones = response.data.zones.map(zone => ({
        id: uuidv4(),
        countryCode: zone.countryCode,
        countryName: zone.countryName,
        zoneName: zone.zoneName,
        gmtOffset: zone.gmtOffset,
        createdAt: new Date(),
        updatedAt: new Date()
      }));
      await queryInterface.bulkInsert('Locations', timezones, {});
    } catch (error) {
      console.error('Error seeding data:', error);
    }
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Locations', null, {});
  }
};
