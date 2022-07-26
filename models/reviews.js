const Review = (sequelize, DataTypes) => {
  const Review = sequelize.define('Review', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    reviewBody: {
      type: DataTypes.STRING(5000),
      allowNull: false,
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
    movieId: {
      allowNull:false,
      type: DataTypes.INTEGER,
    },
    score: {
      allowNull:false,
      type:DataTypes.INTEGER,
    },
    createdAt: {
      allowNull: false,
      type: DataTypes.DATE
    },
    updatedAt: {
      allowNull: false,
      type: DataTypes.DATE
    }
  }, {
    tableName: 'reviews',
    timestamps: true,
  });
  Review.associate = ({ User, Comment, Like }) => {
    Review.belongsTo(User, { foreignKey: 'userId', as: 'user' });
    Review.hasMany(Comment, { foreignKey: 'reviewId', as: 'comments' });
    Review.hasMany(Like, { foreignKey: 'reviewId', as: 'likes' });
  }
  return Review;
};

module.exports = Review;