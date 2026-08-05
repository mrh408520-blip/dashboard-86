const { spawn } = require("child_process");

const n8n = spawn(
    process.platform === "win32" ? "npx.cmd" : "npx",
    ["n8n"],
    {
        stdio: "inherit",
        shell: true
    }
);

n8n.on("close", (code) => {
    console.log(`n8n exited with code ${code}`);
});