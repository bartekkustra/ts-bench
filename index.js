const { execSync } = require('child_process');

function runBenchmark(dirName) {
  console.time(dirName)
  execSync(`npx tsc -p "${dirName}"`)
  console.timeEnd(dirName)
}

runBenchmark('interfaces')
runBenchmark('types')
