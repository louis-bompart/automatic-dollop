# node-pty-test

Minimum Reproducible Example for an issue with [conPty](https://devblogs.microsoft.com/commandline/windows-command-line-introducing-the-windows-pseudo-console-conpty/) in [microsoft/node-pty](https://github.com/microsoft/node-pty) v0.10.0.

## Environment:
 - OS: Tested on Windows 10.0.19041
 - Node: nvm w/ 14.16.0
 - Command Interpreters:
    - Powershell 5.1.19041.906
    - Powershell 7.1.3
    - Cmd 10.0.19041.928 

## How to reproduce:
 - `npm run start-conpty`: Should 'flush' the command interpreter and just hang
    - Using `wmic process get processid,parentprocessid,executablepath` you can see that `conhost.exe` is still running w/ `node.exe` as its parent process.
 - `npm run start-winpty`:
    - Should not flush the command interpreter and just display the message
    - The command interpreter input should be freed and all the process of the test should be closed.

## Expected behaviours:
 - `npm run start-winpty` behaviour should not change
 - `npm run start-conpty` behaviour should match the one of `npm run start-winpty`