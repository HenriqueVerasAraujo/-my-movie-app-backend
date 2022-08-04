const Comment = (sequelize, DataTypes) => {
  const Comment = sequelize.define('Comment', {
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
    commentBody: {
      allowNull:false,
      type:DataTypes.STRING(5000),
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
    tableName: 'comments',
    timestamps: true,
  });

  Comment.associate = ({Review, User}) => {
    Comment.belongsTo(Review, { foreignKey: 'reviewId', as: 'comments' })

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
    //   as: 'users',
    // })
  }
  return Comment;
};

module.exports = Comment;