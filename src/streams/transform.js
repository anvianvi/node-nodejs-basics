import { Transform } from 'stream';
import { pipeline } from 'stream/promises';

const transform = async () => {
    const reverseTransform = new Transform({
        transform(chank, _, callback) {
            const reversedText = chank.toString().split('').join('');
            callback(null, `${reversedText}\n`)
        }
    })

    await pipeline(process.stdin, reverseTransform, process.stdout)
};

await transform();
