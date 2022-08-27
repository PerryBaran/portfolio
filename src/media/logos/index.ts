import { IconInfo } from "../../Interfaces";

class Icon implements IconInfo {
    readonly src: string
    readonly name: string
    constructor(url: string, name: string) {
        this.src = url
        this.name = name
    };
};

const CSS3 = new Icon(require('./CSS3.png'), 'CSS3');
const Firebase = new Icon(require('./Firebase.png'), 'Firebase');
const GitHub = new Icon(require('./Github.png'), 'GitHub');
const HTML5 = new Icon(require('./HTML5.png'), 'HTML5');
const Jest = new Icon(require('./Jest.png'), 'Jest');
const JavaScript = new Icon(require('./JavaScript.png'), 'JavaScript');
const React = new Icon(require('./React.png'), 'React');
const TypeScript = new Icon(require('./Typescript.png'), 'Typescript');


export { CSS3, Firebase, GitHub, HTML5, Jest, JavaScript, React, TypeScript };