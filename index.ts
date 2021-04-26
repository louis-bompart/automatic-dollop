import { spawn } from "node-pty";

(async () => {
  const pty = spawn("node.exe", ["test.js"], {
    useConpty: Boolean(process.argv[2]),
    cwd: process.cwd(),
  });

  pty.onData((d) => console.log(d));

  await new Promise<void>((resolve) => {
    pty.onExit((e) => {
      console.log(`Exit with ${e.exitCode} code`);
      resolve();
    });
  });
})();
