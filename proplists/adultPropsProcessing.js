const fs = require('fs');

const wko2Files = ['wko2/client.txt', 'wko2/emergency_contact.txt', 'wko2/parenting_partner.txt', 'wko2/visit.txt', 'wko2/visit_summary.txt', 'wko2/social_security_number.txt'];
wko2Files.forEach((fileName) => {
    const adultPropsBuffer = fs.readFileSync(fileName);
    const writeStream = fs.createWriteStream(fileName);
    //const wkoFiles = ['wko/adult.txt', 'wko/adult2.txt', 'wko/adultvisits.txt', 'wko/adultvisits2.txt', 'wko/asq.txt', 'wko/contact.txt', 'wko/employee.txt', 'wko/child.txt', 'wko/childvisits.txt'];
    const wko2Files = ['wko2/client.txt', 'wko2/emergency_contact.txt', 'wko2/parenting_partner.txt', 'wko2/visit.txt', 'wko2/visit_summary.txt', 'wko2/social_security_number.txt'];
    const pathName = writeStream.path;

    const adultProps = adultPropsBuffer
        .toString('utf8')
        .split(',')
        .map((token) => {
            return token.trim();
        })
        .map((token) => {
            return token.split('`')[1];
        });

    // write each value of the array on the file breaking line
    adultProps.forEach((value) => writeStream.write(`${value}\n`));

    // the finish event is emitted when all data has been flushed from the stream
    writeStream.on('finish', () => {
        console.log(`wrote all the array data to file ${pathName}`);
    });

    // handle the errors on the write process
    writeStream.on('error', (err) => {
        console.error(`There is an error writing the file ${pathName} => ${err}`);
    });

    // close the stream
    writeStream.end();
});
