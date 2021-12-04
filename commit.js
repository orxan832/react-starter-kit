const { execSync } = require('child_process');

const gitCommand = `git add . && git commit -m "${process.argv[3]}" && git push -u origin master`;

const gitCommandWithoutBuild = `git add . && git commit -m "${process.argv[2]}" && git push -u origin master`;

if (process.argv[2] === 'test') execSync(`${gitCommand} && npm run build-test && cd starter-build && ${gitCommand}`);
else if (process.argv[2] === 'production') execSync(`${gitCommand} && npm run build-production && cd starter-build && ${gitCommand}`);
else execSync(gitCommandWithoutBuild);