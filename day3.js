const {exec} = require ('child_process');

function executeCommand(command){
    exec(command,(error, stdout, stderr)=> {
        if(error){
            console.log(`Error executing command:${error.message}`);
            return;
        }
        if(stderr){
            console.log(`Command sterr: ${stderr}`);
            return;
        }
        console.log(`Command Output`);
        console.log(stdout);
    });
}

// test Cases:
executeCommand('ls -la')
executeCommand('echo "Hello, Node.js"')