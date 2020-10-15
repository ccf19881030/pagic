import projectConfig from '/pagic.config.js';
var _a, _b;
export default {
    config: { "root": "/", ...projectConfig, ...(_b = (_a = projectConfig.i18n) === null || _a === void 0 ? void 0 : _a.overrides) === null || _b === void 0 ? void 0 : _b['undefined'] },
    'pagePath': "plugins/README.md",
    'layoutPath': "_layout.tsx",
    'outputPath': "plugins/index.html",
    'title': "插件",
    'content': React.createElement("article", { dangerouslySetInnerHTML: {
            __html: '<h1>插件</h1>'
        } }),
    'contentTitle': React.createElement("h1", { key: "0" }, "\u63D2\u4EF6"),
    'contentBody': React.createElement("article", { dangerouslySetInnerHTML: {
            __html: ''
        } }),
    'head': undefined,
    'script': React.createElement(React.Fragment, null,
        React.createElement("script", { src: "https://cdn.pagic.org/react@16.13.1/umd/react.production.min.js" }),
        React.createElement("script", { src: "https://cdn.pagic.org/react-dom@16.13.1/umd/react-dom.production.min.js" }),
        React.createElement("script", { src: "/index.js", type: "module" })),
    'toc': null,
    'contentHasKatex': false,
    'date': "2020-10-15T13:27:41.917Z",
    'updated': null,
    'author': undefined,
    'contributors': [],
    'blog': {
        "isPost": false,
        "isPosts": false,
        "posts": [
            {
                "pagePath": "blog/design_pagic_config_ts.md",
                "title": "设计 pagic.config.ts",
                "link": "blog/design_pagic_config_ts.html",
                "date": "2020-07-12T00:00:00.000Z",
                "updated": null
            }
        ]
    }
};
