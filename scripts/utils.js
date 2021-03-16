const cp = require("child_process");

function spawnSync(command, options) {
  const result = cp.spawnSync(command, {
    shell: true,
    stdio: "pipe",
    ...options,
  });
  result.stdout = result.stdout || "";
  result.stderr = result.stderr || "";
  if (result.status === 0) {
    return result.stdout.toString().trim();
  } else {
    throw new Error(
      `\n\nError executing command: ${command}\n\nERROR CODE: ${result.status}\n\nSTDERR:\n${result.stderr}\n\nSTDOUT:\n${result.stdout}`
    );
  }
}

module.exports = {
  spawnSync,
};
