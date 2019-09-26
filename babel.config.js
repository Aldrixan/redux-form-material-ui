module.exports = {
    presets: [
        [
            "@babel/preset-env",
            {
                targets: {
                    browsers: ['defaults']
                },
                useBuiltIns: "usage",
                "corejs": "3.2.1",
            },
            "@babel/preset-react"
        ],
    ],
}
