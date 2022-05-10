const hbs = require('handlebars');
const { Transformer } = require('@parcel/plugin');

module.exports = new Transformer({
    async loadConfig({ config }) {
        const { contents, filePath } =
            (await config.getConfig([
                '.hbsrc',
                '.hbsrc.js',
                'hbs.config.js',
            ])) || {};

        if (contents) {
            if (filePath.endsWith('.js')) {
                config.invalidateOnStartup();
            }
            config.invalidateOnFileChange(filePath);
        } else {
            config.invalidateOnFileCreate({
                fileName: '.hbsrc' || '.hbsrc.js' || 'hbs.config.js',
                aboveFilePath: config.searchPath,
            });
        }

        return contents;
    },
    async transform({ asset, config }) {
        const hbsConfig = config || {};
        const source = await asset.getCode();
        const compiled = hbs.compile(source, {
            compileDebug: false,
            filename: asset.filePath,
            ...hbsConfig,
        });

        const includes = [];

        const { resolveInclude } = hbs;

        hbs.resolveInclude = (...args) => {
            const include = resolveInclude(...args);
            includes.push(include);
            return include;
        };

        asset.type = 'html';
        asset.setCode(compiled(hbsConfig));

        for (let include of includes) {
            await asset.invalidateOnFileChange(include);
        }

        return [asset];
    },
});
