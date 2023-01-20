import { LogoInfo } from "../../Interfaces";

class Logo implements LogoInfo {
    readonly src: string
    readonly name: string
    constructor(url: string, name: string) {
        this.src = url
        this.name = name
    };
};

const CSS3 = new Logo(require('./CSS3.png'), 'CSS3');
const Firebase = new Logo(require('./Firebase.png'), 'Firebase');
const GitHub = new Logo(require('./Github.png'), 'GitHub');
const HTML5 = new Logo(require('./HTML5.png'), 'HTML5');
const Jest = new Logo(require('./Jest.png'), 'Jest');
const JavaScript = new Logo(require('./JavaScript.png'), 'JavaScript');
const React = new Logo(require('./React.png'), 'React');
const TypeScript = new Logo(require('./Typescript.png'), 'Typescript');
const Git = new Logo(require('./Git.png'), 'Git');
const Node = new Logo(require('./Node-js.png'), 'Node.js');
const Mocha = new Logo(require('./Mocha.png'), 'Mocha');
const Docker = new Logo(require('./Docker.png'), 'Docker');
const MySQL = new Logo(require('./MySQL.png'), 'MySQL');
const Sequelize = new Logo(require('./Sequelize.png'), 'Sequelize');
const Express = new Logo(require('./Express-js.png'), 'Express.js');
const Postman = new Logo(require('./Postman.png'), 'Postman');
const AWS = new Logo(require('./AWS.png'), 'AWS');
const PostgreSQL = new Logo(require('./Postgresql.png'), 'PostgreSQL');


export { CSS3, Firebase, GitHub, HTML5, Jest, JavaScript, React, TypeScript, Git, Node, Mocha, Docker, MySQL, Sequelize, Express, Postman, AWS, PostgreSQL };