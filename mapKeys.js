const fs = require('fs');
const dir = require('node-dir');

const $shematics = JSON.parse(fs.readFileSync('map_schematics.json').toString('utf8'));
$shematics.forEach((compare) => {
    const oldFileName = compare.from.split('/')[compare.from.split('/').length - 1].replace('.txt', '');
    const newFileName = compare.to.split('/')[compare.to.split('/').length - 1].replace('.json', '');
    const oldPropsFileContent = fs.readFileSync(compare.from);
    const newPropsFileContent = fs.readFileSync(compare.to);
    const oldProps = oldPropsFileContent.toString('utf8').split('\n');
    const newProps = JSON.parse(newPropsFileContent.toString('utf8'));

    const map = [];

    const removeAll = (props, removeList) => {
        removeList.forEach((rmIndex) => {
            props.splice(rmIndex, 1);
        });
    };
    let OLD_DELETES = [];
    let NEW_DELETES = [];

    //exact matches
    for (let i = 0; i < oldProps.length; i++) {
        for (let j = 0; j < newProps.length; j++) {
            if (oldProps[i] === newProps[j].key) {
                map.push({ sourceKey: oldProps[i], mapsTo: newProps[j] });
                OLD_DELETES.push(i);
                NEW_DELETES.push(j);
                break;
            }
        }
    }
    removeAll(oldProps, OLD_DELETES);
    removeAll(newProps, NEW_DELETES);
    OLD_DELETES = [];
    NEW_DELETES = [];

    //match ignore case
    for (let i = 0; i < oldProps.length; i++) {
        for (let j = 0; j < newProps.length; j++) {
            if (oldProps[i].toLowerCase() === newProps[j].key.toLowerCase()) {
                map.push({ sourceKey: oldProps[i], mapsTo: newProps[j] });
                OLD_DELETES.push(i);
                NEW_DELETES.push(j);
                break;
            }
        }
    }
    removeAll(oldProps, OLD_DELETES);
    removeAll(newProps, NEW_DELETES);
    OLD_DELETES = [];
    NEW_DELETES = [];

    //condense new to one word and check ignore case
    for (let i = 0; i < oldProps.length; i++) {
        for (let j = 0; j < newProps.length; j++) {
            if (
                oldProps[i].toLowerCase() ===
                newProps[j].key
                    .split(' ')
                    .join('')
                    .toLowerCase()
            ) {
                map.push({ sourceKey: oldProps[i], mapsTo: newProps[j] });
                OLD_DELETES.push(i);
                NEW_DELETES.push(j);
                break;
            }
        }
    }
    removeAll(oldProps, OLD_DELETES);
    removeAll(newProps, NEW_DELETES);
    OLD_DELETES = [];
    NEW_DELETES = [];

    //map.forEach(console.log);
    const writeStream = fs.createWriteStream(`${compare.outdir}${oldFileName}_map_${newFileName}.json`);
    const pathName = writeStream.path;

    //map.forEach((value) => writeStream.write(`${value}\n`));
    writeStream.write(JSON.stringify(map));
    writeStream.on('finish', () => {
        console.log(`wrote all the array data to file ${pathName}`);
    });

    writeStream.on('error', (err) => {
        console.error(`There is an error writing the file ${pathName} => ${err}`);
    });

    writeStream.end();
});
