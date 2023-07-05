const { Op } = require("sequelize");
Post.findAll({
    where: {
        [Op.and]: [{ a: 5 }, { b: 6 }],            // (a = 5) AND (b = 6)
        [Op.or]: [{ a: 5 }, { b: 6 }],             // (a = 5) OR (b = 6)
        
        someAttribute: {
            [Op.eq]: 3,                              // = 3
            [Op.ne]: 20,                             // != 20
            [Op.is]: null,                           // IS NULL
            [Op.not]: true,                          // IS NOT TRUE
            [Op.or]: [5, 6],                         // (someAttribute = 5) OR (someAttribute = 6)

            // Using dialect specific column identifiers (PG in the following example):
            [Op.col]: 'user.organization_id',        // = "user"."organization_id"

            // Number comparisons
            [Op.gt]: 6,                              // > 6
            [Op.gte]: 6,                             // >= 6
            [Op.between]: [6, 10],                   // BETWEEN 6 AND 10
            
            // Other operators
            [Op.in]: [1, 2],                         // IN [1, 2]
            [Op.notIn]: [1, 2],                      // NOT IN [1, 2]
            [Op.like]: '%hat',                       // LIKE '%hat'
            [Op.notLike]: '%hat',                    // NOT LIKE '%hat'
        }
    }
});