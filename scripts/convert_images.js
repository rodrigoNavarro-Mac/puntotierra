
const fs = require('fs');
const path = require('path');
const heicConvert = require('heic-convert');

const inputDir = path.join(__dirname, '../public/img/PM9');

const convertImages = async () => {
    console.log('Starting conversion...');
    console.log('Input directory:', inputDir);

    if (!fs.existsSync(inputDir)) {
        console.error('Input directory does not exist!');
        return;
    }

    try {
        const files = await fs.promises.readdir(inputDir);
        console.log('Files in directory:', files);

        const heicFiles = files.filter(file => path.extname(file).toLowerCase() === '.heic');
        console.log(`Found ${heicFiles.length} HEIC files to convert.`);

        for (const file of heicFiles) {
            const inputPath = path.join(inputDir, file);
            const outputFilename = path.basename(file, path.extname(file)) + '.webp';
            const outputPath = path.join(inputDir, outputFilename);

            console.log(`Processing ${file} -> ${path.basename(outputPath)}`);

            try {
                const inputBuffer = await fs.promises.readFile(inputPath);
                const outputBuffer = await heicConvert({
                    buffer: inputBuffer,
                    format: 'WEBP',
                    quality: 0.8
                });

                await fs.promises.writeFile(outputPath, outputBuffer);
                console.log(`Successfully converted ${file}`);
            } catch (err) {
                console.error(`Failed to convert ${file}:`, err);
            }
        }
    } catch (err) {
        console.error('Directory read error:', err);
    }
};

convertImages();
