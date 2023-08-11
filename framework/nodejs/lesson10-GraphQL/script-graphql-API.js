"use strict"; //for security always use strict

//Node 14.15.1 LTS
//GraphQl

//** for CMS use SonicJS or Strapi */

const exp = require("express");
const app = exp();
const pth = require("path");

/**
 * npm i --save graphgl
 * --for packages that you cannot install; then use "yarn"
 * yarn add graphql
 */
const { graphql, buildSchema } = require('graphql');


app.use('/graphql-editor', exp.static(pth.join(__dirname, '', 'editor.html')));
app.use('/graphql-script', exp.static(pth.join(__dirname, '', 'editor.js')));


app.get("/", (q, r) => {

});


var schema = buildSchema(`
    type Query {
        user: [User]
        find(id:Int!): User
    }
    
    type User {
        id:Int!
        name: String
        emails: [Email]
    }

    type Email {
        name: String
    }
`);


let root = {
    user: () => [
        {
            id: 1, name: "A", emails: [
                { name: "a@a.com" },
                { name: "b@b.com" },
                { name: "c@c.com" }
            ]
        },
        {
            id: 2, name: "B", emails: [
                { name: "d@d.com" }
            ]
        }
    ],
    find: ({ id }) => {
        let items = root.user();
        for (let i = 0; i < items.length; i++) {
            if (items[i].id === id) return items[i];
        }
        return null;
    }
};


app.get("/gql/:gql", (q, r) => {
    //{user{name,emails{name}}}
    //{user{id,name}}
    //{find(id:1){name}}
    graphql(schema, q.params.gql/*{user{name}}*/, root).then((res) => {
        r.send(res);
    });
});


app.listen(3000);