// Run at root
// npm init -y
// npm install @actions/core @actions/github @actions/exec

const core = require("@actions/core");
const github = require("@actions/github");
const exec = require("@actions/exec");

function run(){
    core.notice("Hello from my custom action");

    const bucket = core.getInput("bucket", {required: true});
    const bucketRegion = core.getInput("bucket-region", {required: true});    
    const distFolder = core.getInput("dist-folder", {required: true});
    
    const s3Uri = `s3://${bucket}`;
    exec.exec(`aws s3 sync ${distFolder} ${bucket} --region ${bucketRegion}`);
}

run();