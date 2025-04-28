module.exports = async function (context, req) {
    context.res = {
        body: { 
            status: "Jonny 5 is alive!",
            timestamp: new Date().toISOString() 
        }
    };
};
