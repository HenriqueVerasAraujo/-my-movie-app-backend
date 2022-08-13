const Like = (sequelize, DataTypes) => {
  const Like = sequelize.define('Like', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },

    userId: {
      allowNull:false,
      type: DataTypes.INTEGER,
      references: {
        model: 'users',
        key: 'id',
      },
      onDelete: 'CASCADE',
    },

    reviewId: {
      allowNull:false,
      type: DataTypes.INTEGER,
      references: {
        model: 'reviews',
        key: 'id'
      },
      onDelete: 'CASCADE',
    },
  }, {
    tableName: 'likes',
    timestamps: false,
  });

  Like.associate = ({ Review, User }) => {
    Like.belongsTo(Review, { foreignKey: 'reviewId' })
    Like.belongsTo(User, { foreignKey: 'userId', as: 'likes' })

    // User.belongsToMany(Review, {
    //   foreignKey: 'userId',
    //   otherKey: 'reviewId',
    //   through: Comment,
    //   as: 'reviews-Comments',
    // });
    // Review.belongsToMany(User, {
    //   foreignKey: 'reviewId',
    //   otherKey: 'userId',
    //   through: Comment,
    //   as: 'users',.
    // })
  }
  return Like;
};

module.exports = Like;