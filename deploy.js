const ci = require("miniprogram-ci");
(async () => {
  const project = new ci.Project({
    appid: "wx4903be31b4350d01",
    type: "miniProgram",
    projectPath:
      "/Users/pkkwilliam/Desktop/bitcode/reusable-merchant-management/rmms-weapp-real-estate/project.config.json",
    privateKeyPath:
      "/Users/pkkwilliam/Desktop/bitcode/reusable-merchant-management/rmms-weapp-real-estate/private.wx4903be31b4350d01.key",
    ignores: ["node_modules/**/*"]
  });
  const uploadResult = await ci.upload({
    project,
    version: "1.0.0",
    desc: "first deployment",
    setting: {
      es6: true
    },
    onProgressUpdate: console.log
  });
  console.log(uploadResult);
})();
