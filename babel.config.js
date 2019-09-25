module.exports = {
    presets: [
        [
            "@babel/env",
            {
                targets: {
                    browsers: ['defaults']
                },
                useBuiltIns: "usage",
                "corejs": "3.2.1",
            },
            "react"
        ],
    ],
}
