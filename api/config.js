const fs = require("fs");
var prompt = require("prompt");

console.log("Please enter the following information for database configurations.");
prompt.start();
prompt.get(["user", "host", "password", "database", "port"], function (err, result) {
    const user_env = `PGUSER=${result.user}\n`;
    const host_env = `PGHOST=${result.host}\n`;
    const pw_env = `PGPASSWORD=${result.password}\n`;
    const db_env = `PGDATABASE=${result.database}\n`;
    const port_env = `PGPORT=${result.port}\n`;
    const env_str = user_env + host_env + pw_env + db_env + port_env;

    fs.writeFile(".env", env_str , (err) => {
        if (err) throw err;
        console.log("Configurations have been updated.");
    });
});
