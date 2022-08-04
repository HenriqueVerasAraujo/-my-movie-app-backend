'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('comments', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
  
      userId: {
        allowNull:false,
        type: Sequelize.INTEGER,
        references: {
          model: 'users',
          key: 'id',
        },
        onDelete: 'CASCADE',
      },
  
      reviewId: {
        allowNull:false,
        type: Sequelize.INTEGER,
        references: {
          model: 'reviews',
          key: 'id',
        },
        onDelete: 'CASCADE',
  
      },
      commentBody: {
        allowNull:false,
        type:Sequelize.STRING(5000),
      },
  
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('comments');
  }
};