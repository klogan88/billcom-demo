/* jshint node: true */

module.exports = {
    testreports: {
        files: [
            // includes files within path
            {
                expand: true,
                cwd: "html-report/",
                src: ["**"],
                dest: "build/test-results/code-coverage-reports/"
            }, {
                expand: true,
                src: ["lcov.info"],
                dest: "build/test-results/code-coverage-reports/"
            }, {
                expand: true,
                src: ["cobertura-coverage.xml"],
                dest: "build/test-results/code-coverage-reports/"
            }, {
                expand: true,
                src: ["report.xml"],
                dest: "build/test-results/junit-reports/"
            }
        ]
    },
    release: {
        expand: true,
        src: "build/dist/*",
        dest: "release/",
        filter: "isFile",
        flatten: true
    }
};