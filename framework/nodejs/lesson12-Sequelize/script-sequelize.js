"use strict"; //for security always use strict

//Node 14.15.1 LTS
//Sequelize

const FORCE_DATABASE_UPDATE = true;

//yarn add sqlite3
//yarn add sequelize
const { Sequelize } = require('sequelize');
const seq = new Sequelize('db', '', '', {
    host: 'localhost',
    storage: 'nodejs/data/db.sqlite',
    dialect: 'sqlite',
});


let LevelTable = seq.define('Level', {
    ID: {
        type: Sequelize.INTEGER,
        primaryKey: true,
    },
    Name: {
        type: Sequelize.STRING,
    }
});

let CourseTable = seq.define('Course', {
    ID: {
        type: Sequelize.INTEGER,
        primaryKey: true
    },
    Name: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
    },
    LevelID: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
});

let LessonTable = seq.define('Lesson', {
    ID: {
        type: Sequelize.INTEGER,
        primaryKey: true,
    },
    Name: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
    },
    CourseID: {
        type: Sequelize.INTEGER,
        allowNull: false,
    },
});

//-----------CONSTRAINTS--------------
LevelTable.hasMany(CourseTable, {
    foreignKey: 'LevelID'
});

CourseTable.belongsTo(LevelTable, {
    foreignKey: 'LevelID'
});

//-----------CONSTRAINTS--------------
CourseTable.hasMany(LessonTable, {
    foreignKey: 'CourseID'
});

LessonTable.belongsTo(CourseTable, {
    foreignKey: 'CourseID'
});

let run = async () => {
    await LevelTable.sync({ force: FORCE_DATABASE_UPDATE });
    await CourseTable.sync({ force: FORCE_DATABASE_UPDATE });
    await LessonTable.sync({ force: FORCE_DATABASE_UPDATE });

    await LevelTable.create({ ID: 1, Name: "Level A" });
    await LevelTable.create({ ID: 2, Name: "Level B" });
    await LevelTable.create({ ID: 3, Name: "Level C" });

    await CourseTable.create({ ID: 1, Name: "Cource AA", LevelID: 1 });
    await CourseTable.create({ ID: 2, Name: "Cource AB", LevelID: 1 });
    await CourseTable.create({ ID: 3, Name: "Cource BA", LevelID: 2 });
    await CourseTable.create({ ID: 4, Name: "Cource BB", LevelID: 2 });
    await CourseTable.create({ ID: 5, Name: "Cource CA", LevelID: 3 });

    await LessonTable.create({ ID: 1, Name: "Lesson AA_1", CourseID: 1 });
    await LessonTable.create({ ID: 2, Name: "Lesson AA_2", CourseID: 1 });
    await LessonTable.create({ ID: 3, Name: "Lesson AB_1", CourseID: 2 });
    await LessonTable.create({ ID: 4, Name: "Lesson AB_2", CourseID: 2 });
    await LessonTable.create({ ID: 5, Name: "Lesson BA_1", CourseID: 3 });
    await LessonTable.create({ ID: 6, Name: "Lesson BA_2", CourseID: 3 });
    await LessonTable.create({ ID: 7, Name: "Lesson BB_1", CourseID: 4 });
    await LessonTable.create({ ID: 8, Name: "Lesson CA_1", CourseID: 5 });
    await LessonTable.create({ ID: 9, Name: "Lesson CA_2", CourseID: 5 });

    await findAll();
    await removeLevel(1);
    await removeLevel(2);
    await findAll();
    await findAllLessons();
    await updateLesson(9, "Lesson KK_1");
    await findAllLessons();
}

let findAll = async () => {
    const { count, rows } = await LevelTable.findAndCountAll({
        where: {},
        order: [
            ['ID', 'ASC'],
        ],
        include: [
            {
                model: CourseTable,
                where: {},
                separate: true,
                include: [
                    {
                        model: LessonTable,
                        where: {},
                        separate: true,
                    }
                ]
            },
        ]
    });
    console.log("_______ALL DATA BASE_______");
    console.log("Count: ", count);
    rows.forEach(level => {
        console.log(level.dataValues.Name);
        level.Courses.forEach(course => {
            console.log("---", course.dataValues.Name);
            course.Lessons.forEach(lesson => {
                console.log("------", lesson.dataValues.Name);
            });
        });
    });
}

let findAllLessons = async () => {
    const { count, rows } = await LessonTable.findAndCountAll({
        where: {}
    });
    console.log("_______ALL LESSONS_______");
    console.log("Count: ", count);
    rows.forEach(lesson => {
        console.log(lesson.dataValues.Name);
    });
}

let removeLevel = async (_id) => {
    let res = await LevelTable.destroy({
        where: {
            ID: _id
        }
    });
    console.log("Number of removed records: ", res);
}

let updateLesson = async (_id, _newName) => {
    let res = await LessonTable.update({ Name: _newName }, {
        where: {
            ID: _id
        }
    });
    console.log("Number of updated records: ", res);
}

run();